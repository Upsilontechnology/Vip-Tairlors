import React from "react";
import timg from "../../assets/Group94.png";
const DashBoardTitle = ({ title, subTitle }) => {
  return (
    <>
      <div>
        <div className="flex lg:flex-row flex-col lg:justify-start justify-center items-center gap-5 bg-white rounded-md px-12 pt-6">
          <div>
            <img
              src={timg}
              className="lg:w-44 w-32 h-auto pt-2 lg:pl-7 pl-3"
              alt=""
            />
          </div>
          <div className="flex lg:justify-start justify-center lg:pb-0 pb-7 items-center text-center lg:text-start">
            <div>
              <h1 className="lg:text-xl text-base font-bold">
                Welcome to {title} Dashboard
              </h1>
              <h1 className="lg:text-base font-medium text-sm">{subTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardTitle;
