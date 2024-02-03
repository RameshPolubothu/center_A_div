import React from "react";

const complaint = () => {
  return (
    <div class="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
      <div class="relative border-b border-gray-300 p-4 py-8 sm:px-8">
        <h3 class="mb-1 inline-block text-3xl font-medium">
          <span class="mr-4">Submit Complaint</span>
          <span class="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">
            Quick Response
          </span>
        </h3>
        <p class="text-gray-600">Contact us for hostel grievance redressal</p>
      </div>
      <div class="p-4 sm:p-8">
        <input
          id="name"
          type="text"
          class="mt-1 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
          placeholder="Enter Complaint name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="email"
          type="text"
          class="peer mt-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
          placeholder="Enter your Room No."
          onChange={(e) => setRoom(e.target.value)}
        />
        <label class="mt-5 mb-2 inline-block max-w-full">
          Tell us about your grievance
        </label>
        <textarea
          id="about"
          class="mb-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          class="w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white"
          // onClick={onSubmitForm}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default complaint;
