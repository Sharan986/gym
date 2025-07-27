import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { advSHOULDERS } from '../assets/assets';
import { interSHOULDERS } from '../assets/assets';

const ShouldersAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Face Pulls (Rope)",
      video: advSHOULDERS.ropefacepull,
      muscles: ["Posterior Deltoids", "Trapezius", "Rhomboids"],
      instructions: [
        "Attach a rope to a cable machine at chest height.",
        "Grab the rope with both hands and step back to create tension.",
        "Pull the rope towards your forehead, separating your hands as you pull.",
        "Return to the starting position with control."
      ],
      benefits: [
        "Strengthens the rear deltoids and upper back",
        "Improves posture and shoulder health",
        "Enhances shoulder stability"
      ],
      tips: [
        "Keep your elbows high and squeeze your shoulder blades together.",
        "Avoid using momentum; focus on controlled movements.",
        "Use a light to moderate weight to maintain proper form."
      ]
    },
    {
      id: 2,
      name: "Cable Lateral Raises",
      video: advSHOULDERS.cable,
      muscles: ["Lateral Deltoids", "Supraspinatus"],
      instructions: [
        "Stand next to a cable machine with the pulley at its lowest setting.",
        "Grab the handle with your outside hand, keeping a slight bend in your elbow.",
        "Raise your arm out to the side until it's parallel to the floor.",
        "Slowly lower back to the starting position with control."
      ],
      benefits: [
        "Isolates the lateral deltoids effectively",
        "Provides constant tension throughout the movement",
        "Improves shoulder width and definition"
      ],
      tips: [
        "Keep your torso upright and avoid leaning.",
        "Raise only to shoulder height to avoid impingement.",
        "Control the weight on both the lift and descent."
      ]
    },
    {
      id: 4,
      name: "Arnold Press",
      video: advSHOULDERS.arnoldpress,
      muscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
      instructions: [
        "Sit on a bench with dumbbells at shoulder height, palms facing your body.",
        "As you press the dumbbells overhead, rotate your palms to face forward.",
        "Lower the dumbbells back to the starting position with the same rotation.",
        "Keep your core engaged and maintain control throughout."
      ],
      benefits: [
        "Enhances shoulder mobility and strength",
        "Engages multiple parts of the deltoids",
        "Improves rotational strength"
      ],
      tips: [
        "Focus on smooth rotation during the press.",
        "Avoid using momentum to lift the weights.",
        "Keep your elbows slightly in front of your body."
      ]
    },
    {
      id: 5,
      name: "Reverse Fly Machine",
      video: advSHOULDERS.reversefly,
      muscles: ["Posterior Deltoids", "Trapezius", "Rhomboids"],
      instructions: [
        "Sit at a reverse fly machine or bend forward with dumbbells.",
        "Keep a slight bend in your elbows and open your arms outward.",
        "Squeeze your shoulder blades together at the top of the movement.",
        "Return to the starting position with control."
      ],
      benefits: [
        "Targets the often-neglected rear delts",
        "Improves posture and upper back strength",
        "Helps balance shoulder development"
      ],
      tips: [
        "Focus on using your rear delts, not your arms.",
        "Keep your movements controlled and deliberate.",
        "Avoid arching your back during the movement."
      ]
    },
    {
      id: 6,
      name: "Upright Rows",
      video: interSHOULDERS.CABLE,
      muscles: ["Lateral Deltoids", "Trapezius", "Biceps"],
      instructions: [
        "Stand holding a barbell or dumbbells with an overhand grip.",
        "Pull the weight straight up along your torso to chin level.",
        "Keep your elbows higher than your hands throughout.",
        "Lower back down with control."
      ],
      benefits: [
        "Develops the lateral deltoids and traps",
        "Improves shoulder and upper back strength",
        "Can be done with various equipment"
      ],
      tips: [
        "Use a shoulder-width grip to reduce strain.",
        "Don't raise the weight higher than chin level.",
        "Keep the movement smooth and controlled."
      ]
    },
    {
      id: 7,
      name: "Front Raises",
      video: advSHOULDERS.frontraise,
      muscles: ["Anterior Deltoids", "Pectoralis Major (upper)"],
      instructions: [
        "Stand holding dumbbells or a barbell with palms facing your thighs.",
        "Raise the weight straight in front of you to shoulder height.",
        "Pause briefly at the top of the movement.",
        "Lower back down with control."
      ],
      benefits: [
        "Isolates the front deltoids effectively",
        "Improves shoulder definition and strength",
        "Can be done with various equipment"
      ],
      tips: [
        "Keep a slight bend in your elbows.",
        "Avoid using momentum to swing the weights up.",
        "Control the descent to maximize muscle engagement."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NGpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Shoulder Workout Banner"
          className="w-full h-full object-cover opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-One text-white mb-4 drop-shadow-2xl">
            SHOULDER MASTERY
          </h1>
          <div className="flex items-center space-x-2 text-lg font-DM">
            <Link to='/WorkoutGuide' className="text-orange-300 hover:text-orange-100 transition-colors">
              GUIDE
            </Link>
            <span className="text-orange-400">/</span>
            <span className="text-orange-200">ADVANCED</span>
            <span className="text-orange-400">/</span>
            <span className="text-white">SHOULDERS</span>
          </div>
        </div>
      </div>

      {/* Exercises Grid */}
      <div className="container mx-auto px-4 py-12 space-y-8">
        {exercises.map((exercise, index) => (
          <div key={exercise.id} className="backdrop-blur-sm bg-white/5 border border-orange-500/30 rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
            {/* Exercise Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-One text-white mb-1">{exercise.name}</h2>
                <div className="text-orange-300 font-DM">
                  <span className="font-semibold">Targets: </span>
                  {exercise.muscles.join(", ")}
                </div>
              </div>
            </div>

            {/* Video and Instructions Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Video Section */}
              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-xl overflow-hidden shadow-lg">
                  <video 
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 object-cover" 
                    controls={false} 
                    preload="none" 
                    autoPlay 
                    muted 
                    loop
                  >
                    <source src={exercise.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Instructions Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-One text-orange-300 mb-3">Exercise Instructions</h3>
                  <ol className="space-y-2">
                    {exercise.instructions.map((step, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-300 font-DM">
                        <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-One text-red-400 mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {exercise.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-300 font-DM">
                        <span className="text-red-400 mt-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="mt-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">⭐</span>
                <h3 className="text-xl font-One text-orange-300">Elite Training Tips</h3>
              </div>
              <ul className="space-y-2">
                {exercise.tips.map((tip, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-300 font-DM">
                    <span className="text-orange-400 mt-2">→</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ShouldersAdvanced;
