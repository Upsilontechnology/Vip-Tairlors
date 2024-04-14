import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import timg from "../../../assets/Group94.png";
import { Fade } from "react-awesome-reveal";

const EmployeeHome = () => {
  return (
    <div className="">
      <div className="2xl:h-[80vh] lg:h-[85vh] md:h-[82vh] h-[80vh] bg-white mx-4 lg:mx-0 lg:ml-10 rounded-md">
        <div className="flex flex-col-reverse items-center justify-center h-full lg:flex-col">
          <div className="flex justify-center items-center p-10">
            {/* <SectionTitle
              title="Welcome to professional dashboard"
              descrition="Insights, management tools and ad creation - all in one place"
            /> */}
            <Fade direction="down">
            <div className=" flex flex-col gap-1 items-center text-center ">

              <h2 className=" md:text-[1.5rem] text-[1.3rem] font-bold lg:text-[2rem] ">Welcome to professional dashboard</h2>
              <p className=" md:text-base text-sm ">Insights, management tools and ad creation - all in one place</p>

              </div>
              </Fade>
          </div>
          {/* card container */}
          <div className="flex justify-center items-center">
            <img src={timg} className="w-3/4 object-cover pt-2 pl-7" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
