import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import textBg from "../../assets/bg/textbg.svg";
import bg from "../../assets/pageimg/convert-2.png";
import card1 from "../../assets/pageimg/home2.png";
import card2 from "../../assets/pageimg/home3.png";
import card3 from "../../assets/pageimg/home4.png";
import img1 from "../../assets/carousel/img1.jpg";
import img2 from "../../assets/carousel/img2.jpg";
import img3 from "../../assets/carousel/img3.jpeg";
import img4 from "../../assets/carousel/img4.jpg";
import img5 from "../../assets/carousel/img5.jpg";
import img6 from "../../assets/carousel/img6.jpeg";
import img7 from "../../assets/carousel/img7.jpeg";
import img8 from "../../assets/carousel/img8.jpg";
import img9 from "../../assets/carousel/img9.jpg";
import img10 from "../../assets/carousel/img10.jpeg";
import img11 from "../../assets/carousel/img11.jpeg";

import xmark from "../../assets/pageimg/xmark.svg";
import tik from "../../assets/pageimg/tik.svg";
import tik2 from "../../assets/pageimg/tik2.svg";

import ico1 from "../../assets/pageimg/ico1.png";
import ico2 from "../../assets/pageimg/ico2.png";
import ico3 from "../../assets/pageimg/ico3.png";
import ico4 from "../../assets/pageimg/ico4.png";
import ico5 from "../../assets/pageimg/ico5.png";
import ico6 from "../../assets/pageimg/ico6.png";
import ico7 from "../../assets/pageimg/ico7.png";

import buy1 from "../../assets/pageimg/buy1.png";
import buy2 from "../../assets/pageimg/buy2.png";
import buy3 from "../../assets/pageimg/buy3.png";
import home from "../../assets/logo/icon2.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

import { Autoplay, Pagination, Navigation } from "swiper";

import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Home = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="text-center">
      <div className="text-white max-w-[850px] mx-auto mt-[80px]  container ">
        <h1 data-aos="fade-right" className="text-[50px] font-bold mt-0">
          Passive Income Opportunities with us{" "}
          <span
            style={{ backgroundImage: `url(${textBg})` }}
            className="bg-no-repeat bg-center bg-contain p-3"
          >
            Using Amazon FBA
          </span>{" "}
          Automation.
        </h1>
        <p data-aos="fade-up-left" className="mt-[40px] text-lg">
          We’re ready to do the heavy lifting for investors like you.
        </p>
        <div className="flex mt-7 justify-center">
          <div className="flex mr-12">
            <img className="mr-5" src={home} alt="" />
            <p className="text-lg font-semibold">
              Stress-Free <br /> Business
            </p>
          </div>
          <div className="flex mr-12">
            <img className="mr-5" src={home} alt="" />
            <p className="text-lg font-semibold">
              100% Automated <br /> Investment
            </p>
          </div>
          <div className="flex">
            <img className="mr-5" src={home} alt="" />
            <p className="text-lg font-semibold">
              Recurring Passive <br /> Income
            </p>
          </div>
        </div>
        <h2
          data-aos="fade-up-right"
          className="text-[44px] font-bold mt-[150px]"
        >
          <span className="text-2xl">
            WE GROW AND SCALE CLIENTS THEIR VERY OWN <br />
          </span>
          FBA Completely Automated Amazon Stores
        </h2>
      </div>
      <div className="flex relative  container mx-auto">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="w-1/2"
        >
          <img className="w-4/5 " src={bg} alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-white absolute top-[15%] left-[50%] w-[607px]"
        >
          <p className="text-justify text-[20px] leading-8 font-light mb-8">
            If you want the financial freedom of owning a successful automated
            Amazon FBA Store, let Vertical Ventures take the lead with our White
            Glove Amazon FBA Automation Service.
          </p>
          <p className="text-justify text-[20px] leading-8 font-light mb-8">
            Let us show you how to start and scale your new Amazon Store from $0
            to up to $100k per month, while you sit back and watch as your
            profits roll in. We do all of the work, you just cash the checks.
          </p>

          <p className="text-justify text-[20px]  leading-8 font-semibold mb-8">
            If you want to do it all by yourself, this service is not for you.
          </p>
        </div>
      </div>
      <div data-aos="zoom-in-up" className=" container mx-auto">
        <h2 className="text-[44px] font-bold text-white">
          And given founders dream exits...
        </h2>
      </div>
      <div className="mt-[150px] w-[100%]">
        <>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={2}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} alt="Burger" />
              <div className="p-8 text-left">
                <p className="text-[20px] leading-7 font-light text-[#0e0066]">
                  "With a transparent and straightforward process, we closed the
                  investment in just eight weeks. Tiny has taken us to the next
                  level by giving us access to world-class knowledge and
                  top-tier talent. Amazing network, incredible people."
                </p>
                <p className="text-[22px] leading-7 text-[#0e0066] mt-8">
                  Hector Giner
                </p>
                <p className="text-[14px] leading-7 font-light text-[#0e0066]">
                  Founder of Websterpeace
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div className=" container mx-auto">
        <h2
          data-aos="zoom-in-up"
          className="text-[44px] font-bold mt-[150px] text-white mb-12"
        >
          FIND THE PERFECT PLAN FOR YOU
        </h2>
        <div className="grid grid-cols-3 gap-8 mx-10">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="w-395px bg-[#0e0066] rounded-xl"
          >
            <div className="w-[256px] h-[256px] mx-auto mt-8">
              <img className="w-full" src={card3} alt="" />
            </div>
            <div className="text-left pl-10">
              <h2 className="text-[34px] font-bold  text-white mb-4">
                Venture Capital
              </h2>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4">Huge valuation</p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className="text-white ml-4">3–6 month process</p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className="text-white ml-4">
                  Founders committed to 5+ years
                </p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className="text-white ml-4">
                  Terms could make your equity worthless
                </p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className="text-white ml-4">
                  Pressure to provide 10–100X returns
                </p>
              </div>
              <div className="flex mb-8">
                <img src={xmark} alt="" />
                <p className="text-white ml-4 ">
                  No cash to founders, just money to grow
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="w-395px bg-[#0e0066] rounded-xl"
          >
            <div className="w-[256px] h-[256px] mx-auto mt-8">
              <img className="w-full" src={card1} alt="" />
            </div>
            <div className="text-left pl-10">
              <h2 className="text-[34px] font-bold  text-white mb-4">
                Private Equity
              </h2>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4">Huge valuation</p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className="text-white ml-4">3–6 month process</p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className="text-white ml-4">
                  Founders committed to 5+ years
                </p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className="text-white ml-4">
                  Terms could make your equity worthless
                </p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className="text-white ml-4">
                  Pressure to provide 10–100X returns
                </p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className="text-white ml-4">
                  No cash to founders, just money to grow
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="w-395px bg-white rounded-xl"
          >
            <div className="w-[256px] h-[256px] mx-auto mt-8">
              <img className="w-full" src={card2} alt="" />
            </div>
            <div className="text-left pl-10 text-[#0e0066]">
              <h2 className="text-[34px] font-bold mb-4">Tiny</h2>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4">Huge valuation</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className="ml-4">3–6 month process</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4">Founders committed to 5+ years</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className="ml-4">Terms could make your equity worthless</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className="ml-4">Pressure to provide 10–100X returns</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4">No cash to founders, just money to grow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto">
        <h2
          data-aos="zoom-in-up"
          className="text-[44px] font-bold mt-[150px] text-white"
        >
          Our process is fast,
        </h2>
        <h2 data-aos="zoom-in-up" className="text-[44px] font-bold text-white">
          friendly, and simple
        </h2>
        <div className="flex justify-evenly mt-[150px]">
          <div>
            <p className="text-white">Respond in</p>
            <h2 className="text-[44px] font-bold text-white">
              <Number n={48} /> hours
            </h2>
          </div>
          <div>
            <p className="text-white">Make an offer in</p>
            <h2 className="text-[44px] font-bold text-white">
              {" "}
              <Number n={7} /> days
            </h2>
          </div>
          <div>
            <p className="text-white">Close the deal in</p>
            <h2 className="text-[44px] font-bold text-white">
              {" "}
              <Number n={1} /> month
            </h2>
          </div>
        </div>
        <div className="w-2/5 mx-auto mt-20 text-[18px]">
          <div data-aos="fade-up-right" className="flex justify-center mb-4">
            <img src={tik2} alt="" />
            <p className="text-white ml-4">
              Easy 15-day diligence process focused on what matters
            </p>
          </div>
          <div data-aos="fade-up-left" className="flex justify-center mb-4">
            <img src={tik2} alt="" />
            <p className="text-white ml-4">
              No golden handcuffs — founders can stay or go
            </p>
          </div>
          <div data-aos="fade-up-right" className="flex justify-center mb-4">
            <img src={tik2} alt="" />
            <p className="text-white ml-4">Straightforward all cash payments</p>
          </div>
          <div data-aos="fade-up-left" className="flex justify-center">
            <img src={tik2} alt="" />
            <p className="text-white ml-4">No in-person meetings</p>
          </div>
        </div>
      </div>
      <div className=" mt-[100px]  container mx-auto">
        <h2 data-aos="zoom-in-up" className="text-[44px] font-bold text-white">
          We like to buy businesses that have:
        </h2>

        <div className="grid grid-cols-4 justify-items-center gap-x-4 gap-y-16 mt-[100px]">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={ico1} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={ico2} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={ico3} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={ico4} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={ico5} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={ico6} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={ico7} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
        </div>
      </div>
      <div className=" mt-[100px]  container mx-auto">
        <h2 data-aos="zoom-in-up" className="text-[44px] font-bold text-white">
          The companies we buy usually look like this:
        </h2>
        <div className="grid grid-cols-3 gap-x-[60px] mx-20 mt-28">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <img className="w-full" src={buy1} alt="" />
            <div className="text-white mt-10">
              <p className="text-[22px] font-bold mb-5">
                Growing and Profitable
              </p>
              <p className="font-[400]">
                You've scaled your business with real customers and revenue.
                It's profitable ($500k-$50MM), but you're thinking about your
                next chapter: either handing the reins to someone else, or
                partnering for the next phase.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <img className="w-full" src={buy2} alt="" />
            <div className="text-white mt-10">
              <p className="text-[22px] font-bold mb-5">
                Growing and Profitable
              </p>
              <p className="font-[400]">
                You've scaled your business with real customers and revenue.
                It's profitable ($500k-$50MM), but you're thinking about your
                next chapter: either handing the reins to someone else, or
                partnering for the next phase.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <img className="w-full" src={buy3} alt="" />
            <div className="text-white mt-10">
              <p className="text-[22px] font-bold mb-5">
                Growing and Profitable
              </p>
              <p className="font-[400]">
                You've scaled your business with real customers and revenue.
                It's profitable ($500k-$50MM), but you're thinking about your
                next chapter: either handing the reins to someone else, or
                partnering for the next phase.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up" className="mt-[150px]  container mx-auto">
        <h2 className="text-[44px] font-bold text-white">
          If you're not sure your business fits the bill, send it to us
        </h2>
        <h2 className="text-[44px] font-bold text-white mt-0">
          {" "}
          anyway. We'll let you know within a couple of days.
        </h2>
        <button className="btn mx-auto border-white bg-[#1a21ff] hover:bg-white hover:text-[#1a21ff] mt-10">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Home;
