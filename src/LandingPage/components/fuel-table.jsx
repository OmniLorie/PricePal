/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import React, { useMemo } from "react";

const FuelSummaryTable = (props) => {
  // Ensure category and companies are defined
  const companies = useMemo(() => props.category?.companies || [], []);
  // const companies = props.category?.companies || [];

  // Prepare the data and columns for react-table
  const data = useMemo(
    () =>
      companies.map((company) => ({
        companyName: company.companyName,
        logo: company.logo,
        petrol:
          company.products.find((p) => p.productName === "Petrol")?.price ||
          "N/A",
        diesel:
          company.products.find((p) => p.productName === "Diesel")?.price ||
          "N/A",
        premium:
          company.products.find((p) => p.productName === "Premium")?.price ||
          "N/A",
      })),
    [companies]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Company",
        accessor: "companyName",
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img
              src={`https://savefiles.org/${row.original.logo}?shareable_link=329`}
              alt={row.original.companyName}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <p className="pl-1 text-xs sm:text-sm">
              {row.original.companyName}
            </p>
          </div>
        ),
      },
      {
        Header: "Petrol GHC",
        accessor: "petrol",
      },
      {
        Header: "Diesel GHC",
        accessor: "diesel",
      },
      {
        Header: "Premium GHC",
        accessor: "premium",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="flex flex-col w-full px-4 sm:px-8 md:w-[90%] mx-auto overflow-x-auto">
      <div className="flex justify-between mb-4 items-center px-4 sm:px-16">
        <h4 className="font-bold text-gray-800 text-lg sm:text-xl">
          {props.category?.categoryName?.toUpperCase()}
        </h4>
      </div>

      {/* ----------------Table Heading--------------------- */}
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200"
      >
        <thead className="bg-gray-300">
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.slice(0, 3).map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <td
                    key={index}
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-end items-center w-full mt-6">
        <Link to="/fuel" className="text-blue-500 underline">
          Show more
        </Link>
      </div>
    </div>
  );
};

export default FuelSummaryTable;
