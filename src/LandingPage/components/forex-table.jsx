import { useState } from "react";
import { Link } from "react-router-dom";

import { forexData } from "../../library/data-placeholder";

const headings = ["Bank", "Buying", "Selling", "Mid-rate"];

const ForexSummaryTable = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const dataToDisplay =
    forexData.find((item) => item.currency === selectedCurrency)?.data || [];

  return (
    <div className="flex flex-col w-full px-8 md:w-[90%] mx-auto">
      <div className="flex justify-between px-8 mb-4 items-center">
        <div className="flex justify-start gap-8 px-8 mb-4 items-center">
          <h4 className="font-bold text-gray-800 text-xl">Forex</h4>
          {/* Currency Dropdown */}
          <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="border border-gray-300 rounded p-2 text-gray-700"
          >
            <option value="USD">USD</option>
            <option value="POUND">POUND</option>
            <option value="EURO">EURO</option>
          </select>
        </div>
        <Link to="/forex" className="text-blue-500 underline">
          Show more
        </Link>
      </div>

      {/* ----------------Table Heading--------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 shadow-md rounded-md p-4 font-semibold text-lg bg-gray-300">
        {headings.map((heading, index) => (
          <p key={index}>{heading}</p>
        ))}
      </div>

      <div className="border-y">
        {dataToDisplay.map((d, index) => (
          <div
            className={`grid text-sm text-gray-600 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } grid-cols-1 sm:grid-cols-4 gap-4 py-4 items-center px-5`}
            key={index}
          >
            <div className="flex items-center gap-2">
              <img src={d.bankLogo} alt={d.bankName} className="w-6 h-6" />
              <p className="pl-1">{d.bankName}</p>
            </div>
            <p className="pl-1">{d.buying}</p>
            <p className="pl-1">{d.selling}</p>
            <p className="pl-1">{d.midRate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForexSummaryTable;
