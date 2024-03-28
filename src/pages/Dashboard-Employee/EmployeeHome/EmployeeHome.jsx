import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import timg from "../../../assets/Group94.png";
const EmployeeHome = () => {
  return (
    <div className="mt-4 h-screen bg-white max-w-[90%] mx-auto rounded-md">
      <div>
        <div className="flex justify-center items-center p-10">
          <SectionTitle
            title="Welcome to professional dashboard"
            descrition="Insights, management tools and ad creation - all in one place"
          />
        </div>
        {/* card container */}
        <div className="flex justify-center items-center">
          <img src={timg} className="w-2/4 pt-2 pl-7" alt="" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
