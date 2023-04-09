import React from "react";
import service1 from "../../assets/service/service1.png";
import service2 from "../../assets/service/service2.png";
import tick from "../../assets/pageimg/tik2.svg";

const Service = () => {
  return (
    <div className="w-4/5 mx-auto mt-12">
      <div className="bg-blue-500 text-white px-4 md:px-16 py-10 rounded-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center ">
          Why Do You Need Amazon FBA Agency?
        </h2>
        <p className="mt-12  text-lg">
          Expertise and Experience: An Amazon FBA agency can provide you with
          the expertise and experience required to successfully sell your
          products on Amazon. They can help you with everything from product
          listing optimization, inventory management, pricing strategies, and
          advertising campaigns.
        </p>
        <p className="mt-6  text-lg">
          Time Management: Running an Amazon business can be time-consuming, and
          an agency can take some of the workload off of you. By outsourcing
          tasks such as product listing optimization, customer service, and
          inventory management, you can focus on other aspects of your business
          or personal life.
        </p>
        <p className="mt-6  text-lg">
          Sales and Revenue Growth: An Amazon FBA agency can help you increase
          your sales and revenue by optimizing your listings, creating effective
          advertising campaigns, and improving your product visibility on
          Amazon. With their expertise and experience, they can help you reach a
          wider audience and increase your conversion rates.
        </p>
        <p className="mt-6 text-center text-lg">
          Overall, an Amazon FBA agency can help you save time, increase sales
          and revenue, and provide you with the expertise and experience needed
          to successfully sell your products on Amazon.
        </p>
      </div>
      <div className="md:flex md:justify-center items-center mt-24">
        <div className=" mt-10 md:w-1/2  mr-5">
          <img src={service1} alt="" />
        </div>
        <div className="md:w-1/2 text-white text-lg">
          <h2 className="text-4xl font-bold text-center ">
            What is Perfect Launch?
          </h2>
          <p className="mt-6 text-justify text-lg mr-10">
            Speed matters in business. For Amazon sellers, the first 90 days are
            especially critical for establishing marketing, fulfillment, pricing
            and other practices to accelerate performance beyond launch.
            "Perfect Launch" is what Amazon data scientists call the use of five
            selling programs—Brand Registry, A+ Content, Fulfillment by Amazon,
            Automated Pricing, and Advertising—within those first 90 days.
          </p>
          <h3 className="mt-5 text-lg font-semibold">
            {" "}
            On average, sellers achieving Perfect Launch generate 6.3x more
            first-year revenue than other sellers{" "}
          </h3>
          <p className="mt-5">Ready to join them? The playbook is simple:</p>
          <div className="ml-10 mt-12">
            <div className="flex ">
              <img className="mr-5" src={tick} alt="" />
              <p>Enroll your brand in Brand Registry</p>
            </div>
            <div className="flex ">
              <img className="mr-5" src={tick} alt="" />
              <p>Enhance your product detail pages with A+ Content</p>
            </div>
            <div className="flex ">
              <img className="mr-5" src={tick} alt="" />
              <p>Get set up with Fulfillment by Amazon</p>
            </div>
            <div className="flex ">
              <img className="mr-5" src={tick} alt="" />
              <p>Automate pricing on your offers</p>
            </div>
            <div className="flex ">
              <img className="mr-5" src={tick} alt="" />
              <p>
                Create Sponsored Products ad campaigns, Coupons, and/or Deals
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center items-center mt-24">
        <div className="md:w-1/2  mr-5">
          <img src={service2} alt="" />
        </div>
        <div className="md:w-1/2 text-white text-lg mt-10">
          <p>
            As a buy product of our services, you may run a lucrative business
            without worrying about the day-to-day operations. We’ll put together
            a team of Amazon FBA professionals to assist you in setting up and
            running a professional-level Amazon FBA Automation business.
            Meanwhile, we make money for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
