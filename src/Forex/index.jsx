const Forex = () => {
  return <div>(
    <div className="flex flex-col w-full px-4 sm:px-6 md:w-[90%] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between px-4 mb-4 items-start sm:items-center">
        <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-8 mb-4 sm:mb-0 items-start sm:items-center">
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
      </div>

      {/* ----------------Table Heading--------------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-md rounded-t-md p-4 font-semibold text-base sm:text-lg bg-gray-300">
        {headings.map((heading, index) => (
          <p key={index} className="text-gray-700">
            {heading}
          </p>
        ))}
      </div>

      <div className="border-y">
        {dataToDisplay.map((d, index) => (
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 text-xs sm:text-sm text-gray-600 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } gap-4 py-4 items-center px-4 sm:px-5`}
            key={index}
          >
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <img
                src={`https://savefiles.org/${d.bankLogo}?shareable_link=329`}
                alt={d.bankName}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <p className="pl-1">{d.bankName}</p>
            </div>
            <p className="pl-1 col-span-1 sm:col-span-1">{d.buying}</p>
            <p className="pl-1 col-span-1 sm:col-span-1">{d.selling}</p>
            <p className="pl-1 col-span-1 sm:col-span-1">{d.midRate}</p>
          </div>
        ))}</div>;
};

export default Forex;
