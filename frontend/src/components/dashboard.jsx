import React from "react";
import { Categories, MajorIssues, Navbar2 } from "./components";

// RETRIEVE DATA FROM DATABASE AND SHOW IT HERE
// MOST UPVOTED COMMUNITY COMPLAINT IN THE PAST 3 or 2 DAYS

const dashboard = () => {
  return (
    <>
      <Navbar2 />
      <div className="flex flex-col lg:flex-row">
        <section className="text-gray-600 overflow-hidden w-full lg:w-3/4">
          <div className="container px-10 py-24 mx-auto">
            <div className="m-4 divide-y-2 divide-newpurple">
              <MajorIssues
                roll_no="210010012"
                timestamp=""
                category="FOOD"
                heading="Regarding the maintenance of mess and cleanliness"
                description="Hey everyone, noticed some utensils haven't been cleaned thoroughly
          lately. Let's make sure we give them a good wash to keep our shared
          spaces clean and hygienic. Your cooperation is much appreciated! 🍽️🧼
          #CleanUpCrew"
              />
              <MajorIssues
                roll_no="210020014"
                timestamp=""
                category="WATER"
                heading="Regarding the maintenance of mess and cleanliness"
                description="Hey everyone, noticed some utensils haven't been cleaned thoroughly
          lately. Let's make sure we give them a good wash to keep our shared
          spaces clean and hygienic. Your cooperation is much appreciated! 🍽️🧼
          #CleanUpCrew"
              />
              <MajorIssues
                roll_no="210020018"
                timestamp=""
                category="ELECTRICITY"
                heading="Regarding the maintenance of mess and cleanliness"
                description="Hey everyone, noticed some utensils haven't been cleaned thoroughly
          lately. Let's make sure we give them a good wash to keep our shared
          spaces clean and hygienic. Your cooperation is much appreciated! 🍽️🧼
          #CleanUpCrew"
              />
            </div>
          </div>
        </section>

        <section className="text-orange-600 body-font w-full lg:w-1/4 pt-28">
          <div className=" font-medium text-xl px-2 py-3 hover:underline hover:underline-offset-3 pt-24">
            Complaint Status & New Complaints ?
          </div>
          <Categories category="Track your Complaints" />
          <Categories category="Register a Complaint" />
          {/* <Categories category="Electricity" />
          <Categories category="Hostel Affairs" /> */}
        </section>
      </div>
    </>
  );
};

export default dashboard;
