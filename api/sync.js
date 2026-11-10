// Vercel Serverless Function: Secure MongoDB Cloud Sync & Backup Endpoint
// Rule: Never expose MONGODB_URI to the browser!
// All database access runs strictly on the backend here.

import { MongoClient } from 'mongodb';

let cachedClient = null;

async function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not configured.');
  }

  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000
  });

  await client.connect();
  cachedClient = client;
  return cachedClient;
}

export default async function handler(req, res) {
  // CORS & Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { userId, userEmail, snapshot } = req.body || {};

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: Missing user authentication identifier.' });
    }

    if (!snapshot || !snapshot.data) {
      return res.status(400).json({ error: 'Bad Request: Missing snapshot payload.' });
    }

    // Connect to MongoDB Atlas securely
    const client = await getMongoClient();
    const db = client.db(process.env.MONGODB_DB_NAME || 'warrenwise_academy');
    const syncCollection = db.collection('user_sync_backups');

    const now = new Date();

    // Fetch existing backup if present
    const existingDoc = await syncCollection.findOne({ userId });

    let finalSnapshot = snapshot;

    if (existingDoc && existingDoc.snapshot) {
      // Conflict resolution: Latest timestamp or higher progress counts win
      const localProgressCount = snapshot.data.progress?.length || 0;
      const remoteProgressCount = existingDoc.snapshot.data?.progress?.length || 0;

      if (remoteProgressCount > localProgressCount) {
        // Cloud has more progress, return cloud snapshot to client to merge
        finalSnapshot = existingDoc.snapshot;
      }
    }

    // Upsert user's cloud snapshot
    await syncCollection.updateOne(
      { userId },
      {
        $set: {
          userId,
          userEmail: userEmail || 'unknown@user',
          snapshot: finalSnapshot,
          updatedAt: now
        },
        $setOnInsert: {
          createdAt: now
        }
      },
      { upsert: true }
    );

    return res.status(200).json({
      success: true,
      syncedAt: now.toISOString(),
      cloudSnapshot: finalSnapshot !== snapshot ? finalSnapshot : null
    });
  } catch (error) {
    console.error('MongoDB Serverless Sync Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
}
