import React from "react";
import timg from "../../assets/Group94.png";
const DashBoardTitle = ({ title, subTitle }) => {
  return (
    <>
      <div>
        <div className="flex gap-2 bg-white rounded-md">
          <img src={timg} className="w-48 pt-2 pl-2 md:pl-7" alt="" />
          <div className="flex justify-start items-center">
            <div>
              <h1 className="text-sm md:text-lg font-semibold">
                Welcome to {title} Dashboard
              </h1>
              <h1 className="text-xs md:text-base">{subTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardTitle;
