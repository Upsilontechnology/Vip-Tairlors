import React from "react";
import timg from "../../assets/titleImg.png";
const DashBoardTitle = ({ title, subTitle }) => {
  return (
    <>
      <div>
        <div className="flex gap-2 bg-white rounded-md py-2">
          <img src={timg} className="w-40 pt-2 pl-7" alt="" />
          <div className="flex justify-start items-center">
            <div>
              <h1 className="text-lg font-semibold">
                Welcome to {title} Dashboard
              </h1>
              <h1 className="text-base">{subTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardTitle;
