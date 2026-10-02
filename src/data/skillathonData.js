// WarrenWise Youth Animal Training Academy - Skillathon Drills Data
// Standard competitive 4-H Skillathon identification stations

export const SKILLATHON_DRILLS = {
  rabbits: {
    speciesName: 'Rabbits',
    stations: [
      {
        id: 'rabbit_breeds_station',
        title: 'Breed Identification Station',
        description: 'Match the rabbit breed with its recognized body type, fur category, and purpose.',
        drills: [
          {
            id: 'dr_rb_1',
            prompt: 'Identify this breed: Medium size (8.5–11 lbs), Commercial body type, pure white body with solid black ears, nose, tail, and all four feet, and red (ruby) eyes.',
            options: ['Californian', 'New Zealand White', 'Himalayan', 'Checkered Giant'],
            correctIndex: 0,
            feedback: 'Correct! The Californian has distinctive dark points (ears, nose, feet, tail) and pink ruby eyes on a commercial frame.',
            hint: 'Look for points on the ears, nose, tail, and feet on a commercial body.'
          },
          {
            id: 'dr_rb_2',
            prompt: 'Identify this breed: Compact body type, mature weight up to 4 lbs, distinctive lop ears hanging down beside the cheeks, and short thick crown.',
            options: ['Holland Lop', 'French Lop', 'Netherland Dwarf', 'Mini Rex'],
            correctIndex: 0,
            feedback: 'Correct! The Holland Lop is a popular compact lop breed with a maximum senior weight of 4 lbs.',
            hint: 'Small compact lop with a bold head and maximum weight of 4 lbs.'
          },
          {
            id: 'dr_rb_3',
            prompt: 'Identify this breed: Upright plush velvet fur standing at 90 degrees with no visible protruding guard hairs, compact body type, maximum weight 4.5 lbs.',
            options: ['Mini Rex', 'Standard Rex', 'Jersey Wooly', 'Mini Satin'],
            correctIndex: 0,
            feedback: 'Mini Rex is famous for its plush velvet fur and compact body structure.',
            hint: 'Plush velvet fur with under 4.5 lb limit.'
          },
          {
            id: 'dr_rb_4',
            prompt: 'Identify this breed: Full Arch body type, large size (over 11 lbs), white body with butterfly nose marking, eye circles, cheek spots, spinal stripe, and side spots.',
            options: ['Checkered Giant', 'English Spot', 'Rhinelander', 'Belgian Hare'],
            correctIndex: 0,
            feedback: 'Checkered Giant exhibits the classic running full-arch type with bold black or blue markings.',
            hint: 'Giant running breed with butterfly nose marking and side spots.'
          }
        ]
      },
      {
        id: 'rabbit_anatomy_station',
        title: 'Anatomy & Body Parts Drill',
        description: 'Identify anatomical structures used during judge examination and Standard of Perfection scoring.',
        drills: [
          {
            id: 'dr_ant_1',
            prompt: 'Where is the "Dewlap" located on a mature doe?',
            options: ['Pendulous fold of skin under the chin / lower neck', 'Between the rear hocks', 'On the tip of the tail', 'Inside the left ear'],
            correctIndex: 0,
            feedback: 'The dewlap is a fleshy fold under the chin developed in mature females of certain breeds.',
            hint: 'Fleshy fold under the chin.'
          },
          {
            id: 'dr_ant_2',
            prompt: 'What is the "Saddle" on a rabbit’s top line?',
            options: ['The intermediate portion of the back between the shoulders and the loin/hips', 'The top of the ears', 'The tip of the muzzle', 'The belly underneath'],
            correctIndex: 0,
            feedback: 'The saddle comprises the back region connecting the shoulders to the loin and rump.',
            hint: 'The middle portion of the back.'
          },
          {
            id: 'dr_ant_3',
            prompt: 'Where are the "Hocks" located on a rabbit?',
            options: ['The lower joint and heel pad of the hind leg', 'The top of the shoulder blade', 'The tip of the tail', 'The front wrist'],
            correctIndex: 0,
            feedback: 'The hock is the rear heel joint that rests on cage wire and must be protected from sore hocks.',
            hint: 'Heel joint on the back legs.'
          },
          {
            id: 'dr_ant_4',
            prompt: 'What are the two tiny secondary incisor teeth located directly behind the main upper front teeth called?',
            options: ['Peg teeth (auxiliary incisors)', 'Wolf fangs', 'Molar caps', 'Canines'],
            correctIndex: 0,
            feedback: 'Peg teeth are small circular teeth situated directly behind the upper central incisors in all lagomorphs.',
            hint: 'Lagomorphs have a secondary pair of small teeth behind upper incisors.'
          }
        ]
      },
      {
        id: 'rabbit_equipment_station',
        title: 'Equipment & Barn Tools Station',
        description: 'Identify proper husbandry, grooming, and handling tools used in standard rabbitries.',
        drills: [
          {
            id: 'dr_eq_1',
            prompt: 'What tool is used to stamp permanent identification letters and numbers inside a rabbit’s left ear?',
            options: ['Tattoo pliers (clamp or electric rotary pen)', 'Ear punch hole', 'Branding iron', 'Plastic ear tag'],
            correctIndex: 0,
            feedback: 'ARBA mandates permanent tattoos in the left ear applied with sanitary tattoo pliers or rotary pen.',
            hint: 'Used to place permanent ink inside the ear.'
          },
          {
            id: 'dr_eq_2',
            prompt: 'What grooming tool is specially designed with bent wire bristles to remove dead undercoat moult without scratching skin?',
            options: ['Slicker brush', 'Steel curry comb', 'Hoof rasp', 'Scissors'],
            correctIndex: 0,
            feedback: 'A gentle slicker brush extracts loose shedding undercoat cleanly and safely.',
            hint: 'Fine wire bristle brush.'
          }
        ]
      }
    ]
  },
  cavies: {
    speciesName: 'Cavies',
    stations: [
      {
        id: 'cavy_breeds_station',
        title: 'Cavy Breed Identification Station',
        description: 'Identify ARBA recognized cavy breeds by coat structure, rosettes, and crests.',
        drills: [
          {
            id: 'dr_cv_1',
            prompt: 'Identify this breed: Coat composed of distinct circular swirls (rosettes) radiating from pinpoint centers, with crisp ridges between them.',
            options: ['Abyssinian', 'American', 'Silkie', 'Teddy'],
            correctIndex: 0,
            feedback: 'Abyssinians have distinct rosettes forming ridges across the saddle, hips, and rump.',
            hint: 'Look for multiple rosettes forming crisp ridges.'
          },
          {
            id: 'dr_cv_2',
            prompt: 'Identify this breed: Completely smooth, short, glossy coat that lays flat against the body with Roman nose and rounded contours.',
            options: ['American', 'Abyssinian', 'Peruvian', 'Coronet'],
            correctIndex: 0,
            feedback: 'American is the classic smooth-coated cavy breed with gentle curves and broad head.',
            hint: 'Smooth flat coat with broad Roman profile.'
          },
          {
            id: 'dr_cv_3',
            prompt: 'Identify this breed: Long flowing coat that sweeps straight back from the head like a cape, with no rosettes and hair parting over the shoulders.',
            options: ['Silkie', 'Peruvian', 'Texel', 'Abyssinian'],
            correctIndex: 0,
            feedback: 'Silkie coats sweep cleanly backward without facial bangs or forward fall.',
            hint: 'Long sweeping cape coat flowing backwards.'
          },
          {
            id: 'dr_cv_4',
            prompt: 'Identify this breed: Single distinct circular rosette (crest) centered squarely on the forehead between the eyes and ears on an otherwise smooth short coat.',
            options: ['White Crested', 'Abyssinian', 'American', 'Teddy'],
            correctIndex: 0,
            feedback: 'The White Crested cavy features a contrasting white rosette crest on the crown of the head.',
            hint: 'Single rosette on the top of the head.'
          }
        ]
      },
      {
        id: 'cavy_nutrition_station',
        title: 'Cavy Nutrition & Health Drill',
        description: 'Match specific nutritional requirements and physiological health indicators.',
        drills: [
          {
            id: 'dr_cv_nut_1',
            prompt: 'Which vitamin is essential in the daily diet of every cavy to prevent scurvy?',
            options: ['Vitamin C (Ascorbic acid)', 'Vitamin D only', 'Vitamin K only', 'No vitamins needed'],
            correctIndex: 0,
            feedback: 'Cavies lack the enzyme to make Vitamin C and must ingest 10-30 mg every day.',
            hint: 'The same vitamin humans get from citrus and bell peppers.'
          },
          {
            id: 'dr_cv_nut_2',
            prompt: 'What type of vegetable provides high Vitamin C with low risk of excess sugar or digestive upset?',
            options: ['Green or red bell pepper slices', 'Iceberg lettuce head', 'Whole banana', 'Sweet onion'],
            correctIndex: 0,
            feedback: 'Bell peppers provide abundant Vitamin C with safe fiber and low sugar.',
            hint: 'A crunchy salad pepper with seeds removed.'
          }
        ]
      }
    ]
  }
};
