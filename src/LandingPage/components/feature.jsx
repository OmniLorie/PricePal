import Affordable from "../../assets/images/affordableoptions.png";
import bestdeals from "../../assets/images/best_deals.png";
import savestime from "../../assets/images/savestime.jpeg";
import smartchoice from "../../assets/images/smartchoices.png";
import comparison from "../../assets/images/comparison .png";

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
      <h2 className="text-5xl text-gray-900 mb-10 font-semibold">
        Your partner in saving and managing expenses.{" "}
      </h2>
      {/* <p className="text-gray-900 w-[50%] mx-auto">
        Whether you want to convert dollars to cedis or check how much it costs
        to fill your fuel tank, CediRates can help with that.
      </p> */}
      <div className="grid grid-cols-5 gap-6">
        {features.map((feature, index) => {
          return (
            <div key={index} className={`${index % 2 === 1 && "mt-20"}`}>
              <div className=" flex flex-col items-center justify-center gap-4 p-2 border rounded-2xl shadow-lg bg-white">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="size-30"
                />
                <h4 className="font-semibold text-2xl text-gray-700">
                  {feature.title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
