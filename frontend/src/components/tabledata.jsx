import React from "react";
import { Navbar2 } from "./components";

const TableData = () => {
  const data = [
    { id: 1, className: "Default", heading1: "Cell", heading2: "Cell" },
    // Add more data as needed
  ];

  const handleAssignClick = (id) => {
    // Handle Assign button click here
    console.log(`Assign button clicked for row with id ${id}`);
  };

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col pt-28 px-10">
        <h1 className="text-3xl font-bold mb-4 text-[#89288f] border-b pb-2">
          Welcome Admin
        </h1>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      className
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Heading1
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Heading2
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Assign
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {item.className}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.heading1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.heading2}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          onClick={() => handleAssignClick(item.id)}
                          className="bg-green-500 text-white px-2 py-1 rounded-md"
                        >
                          Assign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
