import React from "react";
import { Details } from "../components/components";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-semibold title-font mb-4 text-gray-900">
            OUR TEAM -{" "}
            <span className="font-palanquin font-bold text-orange-600 text-4xl">
              Center_A_Div
            </span>
          </h1>
        </div>
        {/* Contributors / Developed by */}
        <div className="flex flex-wrap -m-4">
          {/* Persons */}
          <Details name="Rahul Cheryala" roll_no="210010012" />
          <Details name="Sanjana Mittapally" roll_no="210030020" />
          <Details name="Ritvik Koduri" roll_no="210020018" />
          <Details name="Ramesh Polubothu" roll_no="210010039" />
          <Details name="Praneeth Karthikeya" roll_no="210020014" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
