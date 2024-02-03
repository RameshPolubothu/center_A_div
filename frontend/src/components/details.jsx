import React from "react";
import { maillogo } from "../assets/images";

const details = (props) => {
  const handleEmailClick = () => {
    const emailAddress = `${props.roll_no}@gmail.com`; // Replace with the actual email address
    const subject = "Regarding Center_A_Div"; // Replace with the desired email subject

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="p-4 lg:w-1/5 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg  object-cover object-center mb-4"
          src="https://dummyimage.com/180x200"
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {props.name}
          </h2>
          <h3 className="text-gray-500 mb-3">{props.roll_no}</h3>
          <span class="inline-flex">
            <a class="text-gray-500 cursor-pointer" onClick={handleEmailClick}>
              <img src={maillogo} alt="mail_to" height={20} width={20} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default details;
