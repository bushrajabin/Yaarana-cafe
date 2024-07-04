import React from "react";
import { reviewData } from "../../CommonData/Common";
const Reviews = () => {
  return (
    <div className="">
      <div className=" text-center xl:text-center xl:flex xl:flex-col xl:justify-center xl:items-center xl:text-black ">
        <h2 className=" font-bold p-2 xl:w-96 xl:text-xl xl:p-2 xl:m-2 xl:font-extrabold">
          What our customer's are saying about US
        </h2>
        <h3 className=" xl:text-xl xl:font-mono xl:m-3">
          GOOD RESTAURANT, DELICIOUS FOOD,CLASSY ATMOSPHERE
        </h3>
      </div>

      <div className=" xl:flex xl:flex-row xl:justify-center ">
        {reviewData.map((data, index, arr) => {
          const { image } = data;
          return (
            <div className="xl:flex xl:flex-row xl:justify-center ">
              <img
                src={image}
                alt=""
                className="xl:w-80 xl:h-52  xl:object-contain xl:m-3 "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
