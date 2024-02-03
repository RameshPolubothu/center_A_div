import { React } from "react";

const majorissues = (props) => {
  const upvote = () => {};
  return (
    <div className="py-6 flex flex-wrap md:flex-nowrap">
      <div className="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-bold text-2xl text-gray-700 flex ms-6 overflow-hidden ">
          {props.category}
        </span>
        <span className="font-semibold mt-4 text-gray-600 text-md flex ms-10">
          {props.timestamp}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {props.roll_no} - {props.heading}
        </h2>
        <p className="leading-relaxed">{props.description}</p>
        <div className="flex justify-end pt-4">
          <button
            className="flex justify-end p-2 bg-gray-500 rounded-full cursor-pointer"
            key={props.category}
            onClick={upvote}
          >
            {/* Upvote icon (you can replace the content inside the button with your icon) */}
            <div className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
            <div className="inline-block text-green-500 font-bold">Upvote</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default majorissues;
