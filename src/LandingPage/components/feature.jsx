const features = [
  {
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores ",
    icon: "",
  },
  {
    title: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores ",
    icon: "",
  },
  {
    title: "Feature 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores ",
    icon: "",
  },
];

const Feature = () => {
  return (
    <div className="mt-96 flex flex-col gap-6 container mx-auto text-center text-gray-500">
      <h2 className="text-5xl text-gray-900 font-semibold">
        Compare prices and rates easily
      </h2>
      <p className="text-gray-500 w-[50%] mx-auto">
        Whether you want to convert dollars to cedis or check how much it costs
        to fill your fuel tank, CediRates can help with that.
      </p>
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature, index) => {
          return (
            <div key={index} className=" flex flex-col gap-4 p-8">
              <img />
              <h4 className="font-semibold text-2xl text-gray-700">
                {feature.title}
              </h4>
              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
