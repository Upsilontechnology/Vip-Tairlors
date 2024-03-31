import React from "react";
import timg from "../../assets/Group94.png";
const DashBoardTitle = ({ title, subTitle }) => {
  return (
    <>
      <div>
        <div className="flex lg:flex-row flex-col lg:justify-start justify-center items-center gap-2 bg-white rounded-md">
          <div>
            <img
              src={timg}
              className="lg:w-48 w-32 h-auto pt-2 lg:pl-7 pl-3"
              alt=""
            />
          </div>
          <div className="flex lg:justify-start justify-center items-center text-center lg:text-start">
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
