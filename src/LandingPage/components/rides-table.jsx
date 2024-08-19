import { useState } from "react";
import { Link } from "react-router-dom";
import VIP from "../../assets/images/Vi.IP logo.png";
import Metro from "../../assets/images/metromass logo.png";
import STC from "../../assets/images/stc logo.png";

const headings = ["Company", "Origin", "Destination", "Amount(GHC)", ""];

const locations = [
  { name: "Accra", value: "acc" },
  { name: "Kumasi", value: "ksi" },
  { name: "Tamale", value: "tam" },
  { name: "Obuasi", value: "obu" },
  { name: "Wa", value: "wa" },
  { name: "Sunyani", value: "sny" },
];

const prices = [
  {
    companyName: "STC",
    companyLogo: STC,
    prices: [
      { origin: "acc", destination: "ksi", amount: "100" },
      { origin: "acc", destination: "tam", amount: "200" },
      { origin: "ksi", destination: "sny", amount: "150" },
    ],
  },
  {
    companyName: "VIP",
    companyLogo: VIP,
    prices: [
      { origin: "acc", destination: "ksi", amount: "90" },
      { origin: "acc", destination: "tam", amount: "200" },
      { origin: "ksi", destination: "sny", amount: "120" },
    ],
  },
  {
    companyName: "METRO",
    companyLogo: Metro,
    prices: [
      { origin: "acc", destination: "ksi", amount: "80" },
      { origin: "acc", destination: "tam", amount: "190" },
      { origin: "ksi", destination: "sny", amount: "110" },
    ],
  },
];

const RidesSummaryTable = () => {
  const [from, setFrom] = useState(null);
  const [destination, setDestination] = useState(null);
  const [dataToDisplay, setDataToDisplay] = useState([]);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredData = prices
      .map((company) => {
        const validPrices = company.prices.filter(
          (p) =>
            (p.origin === from && p.destination === destination) ||
            (p.origin === destination && p.destination === from)
        );
        if (validPrices.length > 0) {
          return {
            companyName: company.companyName,
            companyLogo: company.companyLogo,
            prices: validPrices,
          };
        }
        return null;
      })
      .filter(Boolean); // remove null values
    setDataToDisplay(filteredData);
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-6 md:w-[90%] mx-auto">
      <h4 className="font-bold text-gray-800 text-lg sm:text-xl">Long Rides</h4>

      {/* Form Section */}
      <div className="flex flex-col gap-6 sm:flex-row justify-between mb-4 items-start sm:items-center mt-6">
        <form
          className="flex w-full flex-col sm:flex-row gap-4 sm:gap-8"
          onSubmit={handleSubmit}
        >
          {/* From Location */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="from-location"
              className="font-medium text-gray-700"
            >
              From
            </label>
            <select
              id="from-location"
              value={from}
              onChange={handleFromChange}
              className="border border-gray-300 rounded p-2 text-gray-700 w-full"
            >
              <option value="" disabled>
                Select a location
              </option>
              {locations.map((location, index) => (
                <option key={index} value={location.value}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>

          {/* To Location */}
          <div className="flex flex-col w-full">
            <label htmlFor="to-location" className="font-medium text-gray-700">
              To
            </label>
            <select
              id="to-location"
              value={destination}
              onChange={handleDestinationChange}
              className="border border-gray-300 rounded p-2 text-gray-700 w-full"
            >
              <option value="" disabled>
                Select a destination
              </option>
              {locations.map((location, index) => (
                <option key={index} value={location.value}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="p-2 rounded-md shadow-md w-[120px] font-semibold bg-primary-main text-white hover:bg-primary-dark"
            >
              Check Rates
            </button>
          </div>
        </form>
      </div>

      {/* Table Heading */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 shadow-md rounded-t-md p-4 font-semibold text-base sm:text-lg bg-gray-300">
        {headings.map((heading, index) => (
          <p key={index} className="text-gray-700">
            {heading}
          </p>
        ))}
      </div>

      {/* Data Display */}
      <div className="border-y">
        {dataToDisplay.length > 0 ? (
          dataToDisplay.map((company, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 sm:grid-cols-5 gap-4 py-4 items-center px-4 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } sm:px-5`}
            >
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <img
                  src={company.companyLogo}
                  alt={company.companyName}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <p className="pl-1">{company.companyName}</p>
              </div>
              {company.prices.map((price, i) => (
                <div
                  key={i}
                  className="flex gap-4 col-span-2 sm:col-span-4 sm:grid sm:grid-cols-4"
                >
                  <p className="pl-1">
                    {locations.find((loc) => loc.value === price.origin).name}
                  </p>
                  <p className="pl-1">
                    {
                      locations.find((loc) => loc.value === price.destination)
                        .name
                    }
                  </p>
                  <p className="pl-1">{price.amount}</p>
                  <Link className="p-2 rounded-md shadow-md w-[120px] text-center font-semibold bg-red-500 text-white hover:bg-red-700">
                    Book Ticket
                  </Link>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">
            No rides available for the selected route
          </p>
        )}
      </div>
      <div className="flex justify-end items-center mt-6">
        <Link
          to="/rides"
          className="text-blue-500 underline text-sm sm:text-base mt-4 sm:mt-0"
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default RidesSummaryTable;
