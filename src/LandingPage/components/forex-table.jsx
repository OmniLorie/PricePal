/* eslint-disable react/prop-types */
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const ForexSummaryTable = ({ category }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("Dollar");

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  // Ensure category and companies are defined
  const companies = useMemo(() => category?.companies || [], [category]);

  const data = useMemo(
    () =>
      companies.map((company) => {
        const products = company.products.filter(
          (product) => product.productName === selectedCurrency
        );
        const buying =
          products.find((p) => p.state === "Buying")?.price || "N/A";
        const selling =
          products.find((p) => p.state === "Selling")?.price || "N/A";
        const midRate =
          products.find((p) => p.state === "Mid Rate")?.price || "N/A";

        return {
          bankName: company.companyName,
          bankLogo: company.logo,
          buying,
          selling,
          midRate,
        };
      }),
    [companies, selectedCurrency]
  );

  return (
    <div className="flex flex-col w-full px-4 sm:px-8 md:w-[90%] mx-auto overflow-x-auto">
      <div className="flex justify-between mb-4 items-center px-4 sm:px-16">
        <h4 className="font-bold text-gray-800 text-lg sm:text-xl">Forex</h4>
        {/* Currency Dropdown */}
        <select
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          className="border border-gray-300 rounded p-2 text-gray-700"
        >
          <option value="Dollar">USD</option>
          <option value="Euro">EURO</option>
          <option value="Pound Sterling">POUND</option>
        </select>
      </div>

      {/* ----------------Table Heading--------------------- */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Bank
            </th>
            <th className="px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Buying GHC
            </th>
            <th className="px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Selling GHC
            </th>
            <th className="px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Mid-rate GHC
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.slice(0, 3).map((d, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <img
                    src={`https://savefiles.org/${d.bankLogo}?shareable_link=329`}
                    alt={d.bankName}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <p className="pl-1">{d.bankName}</p>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                {d.buying}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                {d.selling}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                {d.midRate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end items-center w-full mt-6">
        <Link to="/forex" className="text-blue-500 underline">
          Show more
        </Link>
      </div>
    </div>
  );
};

export default ForexSummaryTable;
