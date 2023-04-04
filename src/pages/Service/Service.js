import React from "react";
import service1 from "../../assets/service/service1.png";
import service2 from "../../assets/service/service2.png";

const Service = () => {
  return (
    <div className="w-4/5 mx-auto mt-12">
      <div className="bg-blue-500 text-white px-5 py-5 rounded-lg">
        <h2 className="text-4xl font-bold text-center ">
          Why Do You Need Walmart Automation Agency?
        </h2>
        <p className="mt-12 text-center text-lg">
          Dropshipping is a relatively simple process to get started with. To
          start your own business, you only need a small amount of work and no
          prior expertise. Your freshly founded eCommerce business, on the other
          hand, may leave you feeling a little overwhelmed consistently. Every
          day, you’ll need to do a slew of tedious duties to ensure the store’s
          smooth functioning. Changing product information and uploading
          products Sales orders are sent to the appropriate vendors.
        </p>
        <p className="mt-6 text-center text-lg">
          To carry out typical business operations, you must do a series of acts
          that must be repeated again and over. They may even begin to irritate
          you in the long run!
        </p>
      </div>
      <div className="flex justify-center items-center mt-24">
        <div className="w-1/2 text-white text-lg mr-5">
          <p>
            As a byproduct of our services, you may run a lucrative business
            without worrying about the day-to-day operations. We’ll put together
            a team of Walmart professionals to assist you in setting up and
            running a professional-level Automation Dropshipping business.
            Meanwhile, we make money for you.
          </p>
        </div>
        <div className="w-1/2">
          <img src={service1} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-24">
        <div className="w-1/2  mr-5">
          <img src={service2} alt="" />
        </div>
        <div className="w-1/2 text-white text-lg">
          <p>
            As a byproduct of our services, you may run a lucrative business
            without worrying about the day-to-day operations. We’ll put together
            a team of Walmart professionals to assist you in setting up and
            running a professional-level Automation Dropshipping business.
            Meanwhile, we make money for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
