import React from "react";
import result1 from "../../assets/pageimg/results1.jpg";
import result2 from "../../assets/pageimg/results2.jpg";
import result3 from "../../assets/pageimg/results3.jpg";
import result4 from "../../assets/pageimg/results4.jpg";
import result5 from "../../assets/pageimg/results5.jpg";
import result6 from "../../assets/pageimg/results6.jpg";

const Result = () => {
  return (
    <div>
      <div className=" md:mt-[100px]  container mx-auto">
        <h2
          data-aos="zoom-in-up"
          className="md:text-[44px] text-center font-bold text-white"
        >
          Previous Results
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-[60px] mx-10 md:mx-20 mt-5 md:mt-28">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <img className="w-full" src={result1} alt="" />
            <div className="text-white mt-10"></div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <img className="w-full" src={result2} alt="" />
            <div className="text-white mt-10"></div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <img className="w-full" src={result6} alt="" />
            <div className="text-white mt-10">
              <p className="text-[22px] font-bold mb-5"></p>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <img className="w-full" src={result3} alt="" />
            <div className="text-white mt-10"></div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <img className="w-full" src={result4} alt="" />
            <div className="text-white mt-10"></div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <img className="w-full" src={result5} alt="" />
            <div className="text-white mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
