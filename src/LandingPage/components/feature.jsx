import { motion } from "framer-motion";
import Affordable from "../../assets/images/affordableoptions.png";
import bestdeals from "../../assets/images/best_deals.png";
import savestime from "../../assets/images/savestime.jpeg";
import smartchoice from "../../assets/images/smartchoices.png";
import comparison from "../../assets/images/comparison.png";

const features = [
  {
    title: "Affordable Options",
    image: Affordable,
  },
  {
    title: "Simple & Clear Comparisons",
    image: comparison,
  },
  {
    title: "Finding Best Deals",
    image: bestdeals,
  },
  {
    title: "Saves Time & Money",
    image: savestime,
  },
  {
    title: "Smart Choices",
    image: smartchoice,
  },
];

const Feature = () => {
  return (
    <div className="py-10 flex flex-col gap-10 container mx-auto text-center text-gray-500">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-10 font-semibold">
        Your partner in saving and managing expenses.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-8 gap-6">
        {features.map((feature, index) => {
          return (
            <motion.div
              key={index}
              className={`${index % 2 === 1 && "lg:mt-20"} mt-0`}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.2,
              }}
              style={{
                animationPlayState:
                  window.innerWidth < 640 ? "paused" : "running",
              }}
            >
              <div className="flex flex-col items-center justify-center gap-4 p-4 border rounded-2xl shadow-lg bg-white">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                />
                <h4 className="font-semibold text-xl md:text-2xl text-gray-700">
                  {feature.title}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
