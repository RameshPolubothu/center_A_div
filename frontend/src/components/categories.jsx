import React from "react";

const categories = (props) => {
  return (
    <div className="container px-5 py-3 mx-auto">
      <div className="p-2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              {props.category}
            </h2>
            <p className="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default categories;
