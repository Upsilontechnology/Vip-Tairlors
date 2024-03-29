import React from "react";
import timg from "../../assets/Group94.png";
const DashBoardTitle = ({ title, subTitle }) => {
  return (
    <>
      <div>
        <div className="flex gap-2 bg-white rounded-md">
          <img src={timg} className="w-48 h-auto pt-2 lg:pl-7 pl-3" alt="" />
          <div className="flex justify-start items-center">
            <div>
              <h1 className="lg:text-lg text-base font-semibold">
                Welcome to {title} Dashboard
              </h1>
              <h1 className="lg:text-base text-sm">{subTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardTitle;
