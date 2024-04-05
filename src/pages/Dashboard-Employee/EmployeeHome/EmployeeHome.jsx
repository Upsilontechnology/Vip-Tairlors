import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import timg from "../../../assets/Group94.png";
const EmployeeHome = () => {
  return (
    <div className="">
      <div className="xl:overflow-scroll 2xl:h-[80vh] xl:h-[84vh] lg:ml-10 ml-0 mx-3 bg-white">
        <div className="flex flex-col-reverse lg:flex-col ">
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
    </div>
  );
};

export default EmployeeHome;
