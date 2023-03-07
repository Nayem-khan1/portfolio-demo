import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import textBg from "../../assets/bg/textbg.svg";
import bg from "../../assets/pageimg/home1.png";
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

import footer1 from "../../assets/pageimg/footer1.png";
import logo from "../../assets/logo/5f69042c3080b1195a9a5c91_tiny-logo.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

import { Pagination, Navigation } from "swiper";

const Home = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="text-center">
      <div className="text-white max-w-[850px] mx-auto mt-[150px]  container ">
        <h1 className="text-[72px] font-bold mt-0">
          We buy{" "}
          <span
            style={{ backgroundImage: `url(${textBg})` }}
            className="bg-no-repeat bg-center bg-contain p-3"
          >
            wonderful
          </span>{" "}
          businesses.
        </h1>
        <p className="mt-[40px] text-lg">
          For over a decade, we've been partnering with founders to give them
          quick, straightforward exits that protect their team and culture and
          keep their businesses operating for the longterm.
        </p>
        <h2 className="text-[44px] font-bold mt-[150px]">
          Selling your company can be brutal…
        </h2>
      </div>
      <div className="flex relative  container mx-auto">
        <div className="md:ml-[-170px]">
          <img className="w-[1174px] h-[786px]" src={bg} alt="" />
        </div>
        <div className="text-white absolute top-[15%] left-[50%] w-[607px]">
          <p className="text-justify text-[20px] leading-8 font-light mb-8">
            After months of negotiation you're usually left with a bunch of
            legal fees and no deal.
          </p>
          <p className="text-justify text-[20px] leading-8 font-light mb-8">
            If you're really lucky and your deal closes, your bank balance gets
            a whole lot bigger... then you get to watch the new owners wreck the
            business you spent your life building.
          </p>
          <p className="text-justify text-[20px] leading-8 font-light mb-8">
            After going through it way too many times ourselves, we started Tiny
            to become the buyer we wish we could have sold to.
          </p>
          <p className="text-justify text-[20px] leading-8 font-light mb-8">
            That means fair, fast, and founder friendly deals.
          </p>
          <Link>
            <button className="btn border-white bg-[#1a21ff] hover:bg-white hover:text-[#1a21ff] ml-[-265px]">
              Read more about why we started Tiny
            </button>
          </Link>
        </div>
      </div>
      <div className=" container mx-auto">
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
            spaceBetween={10}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
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
        <h2 className="text-[44px] font-bold mt-[150px] text-white mb-12">
          Why sell to us?
        </h2>
        <div className="grid grid-cols-3 gap-8 mx-10">
          <div className="w-395px bg-[#0e0066] rounded-xl">
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
          <div className="w-395px bg-[#0e0066] rounded-xl">
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
          <div className="w-395px bg-white rounded-xl">
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
        <h2 className="text-[44px] font-bold mt-[150px] text-white">
          Our process is fast,
        </h2>
        <h2 className="text-[44px] font-bold text-white">
          friendly, and simple
        </h2>
        <div className="flex justify-evenly mt-[150px]">
          <div>
            <p className="text-white">Respond in</p>
            <h2 className="text-[44px] font-bold text-white">48 hours</h2>
          </div>
          <div>
            <p className="text-white">Make an offer in</p>
            <h2 className="text-[44px] font-bold text-white">7 days</h2>
          </div>
          <div>
            <p className="text-white">Close the deal in</p>
            <h2 className="text-[44px] font-bold text-white">1 month</h2>
          </div>
        </div>
        <div className="w-2/5 mx-auto mt-20 text-[18px]">
          <div className="flex justify-center mb-4">
            <img src={tik2} alt="" />
            <p className="text-white ml-4">
              Easy 15-day diligence process focused on what matters
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <img src={tik2} alt="" />
            <p className="text-white ml-4">
              No golden handcuffs — founders can stay or go
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <img src={tik2} alt="" />
            <p className="text-white ml-4">Straightforward all cash payments</p>
          </div>
          <div className="flex justify-center">
            <img src={tik2} alt="" />
            <p className="text-white ml-4">No in-person meetings</p>
          </div>
        </div>
      </div>
      <div className=" mt-[100px]  container mx-auto">
        <h2 className="text-[44px] font-bold text-white">
          We like to buy businesses that have:
        </h2>

        <div className="grid grid-cols-4 justify-items-center gap-x-4 gap-y-16 mt-[100px]">
          <div className="flex flex-col	justify-center items-center pt-8 pb-8">
            <img className="w-[120px]" src={ico1} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div className="flex flex-col	justify-center items-center pt-8 pb-8">
            <img className="w-[120px]" src={ico2} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div className="flex flex-col	justify-center items-center pt-8 pb-8">
            <img className="w-[120px]" src={ico3} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div className="flex flex-col	justify-center items-center pt-8 pb-8">
            <img className="w-[120px]" src={ico4} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div className="flex flex-col	justify-center items-center pt-8 pb-8">
            <img className="w-[120px]" src={ico5} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div className="flex flex-col	justify-center items-center pt-8 pb-8">
            <img className="w-[120px]" src={ico6} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
          <div className="flex flex-col	justify-center items-center pt-8 pb-8">
            <img className="w-[120px]" src={ico7} alt="" />
            <p className="text-[18px] text-white font-medium">High margins</p>
            <p className="text-white">Healthy and sustainable</p>
          </div>
        </div>
      </div>
      <div className=" mt-[100px]  container mx-auto">
        <h2 className="text-[44px] font-bold text-white">
          The companies we buy usually look like this:
        </h2>
        <div className="grid grid-cols-3 gap-x-[60px] mx-20 mt-28">
          <div>
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
          <div>
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
          <div>
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
      <div className="mt-[150px]  container mx-auto">
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
      <div className=" bg-white flex justify-between  container mx-auto  px-10 pt-20 rounded-xl mt-[200px] box-border">
        <div className="w-1/2 text-[#0e0066]">
          <h2 className="text-[30px] font-bold mb-6">
            Know someone we should talk to?
          </h2>
          <p className="text-[18px] font-[400] mb-8">
            Scout a deal for us and we'll make it worth your while! We pay
            finders fees of $25,000 to $200,000+, all you have to do is intro
            us.
          </p>
          <button className="btn border-[#1a21ff]  hover:bg-[#1a21ff] bg-white text-[#1a21ff] hover:text-white">
            Send us a lead
          </button>
        </div>
        <div className="">
          <img className="w-[250px]" src={footer1} alt="" />
        </div>
      </div>
      <div className="w-2/3 mx-auto">
        <div className="text-white grid grid-cols-3 mt-[150px]">
          <div>
            <img className="w-[58px] h-[34px]" src={logo} alt="" />
          </div>
          <div className="list-none">
            <p className="text-[18px] font-bold text-left mb-4">Tiny </p>
            <div className="flex text-left">
              <div className="mr-[50px]">
                <li className="mb-3">
                  <Link>Companies</Link>
                </li>
                <li className="mb-3">
                  <Link>About</Link>
                </li>
                <li className="mb-3">
                  <Link>Contact</Link>
                </li>
                <li className="mb-3">
                  <Link>Podcast</Link>
                </li>
              </div>
              <div>
                <li className="mb-3">
                  <Link>Writing</Link>
                </li>
                <li className="mb-3">
                  <Link>Newsletter</Link>
                </li>
                <li className="mb-3">
                  <Link>The Tiny Foundation</Link>
                </li>
              </div>
            </div>
          </div>
          <div className="text-left ml-10 list-none">
            <p className="text-[18px] font-bold text-left mb-4">Work With us</p>
            <li className="mb-3">
              <Link>Work for a Tiny company</Link>
            </li>
            <li className="mb-3">
              <Link>Become a Tiny scout</Link>
            </li>
          </div>
          <div></div>
        </div>
        <div className="mt-[100px]">
          <p className="text-[20px]  text-left text-white">
            Sign up for the Tiny Dispatch, a monthly digest of what we're
            thinking, learning, and looking to do next.
          </p>
          <input
            className="w-full bg-[#1a21ff] text-[22px] font-bold mt-16 outline-none text-white border-b"
            type="email"
            placeholder="Email address"
          />
        </div>
        <div className="py-[100px] flex justify-between ">
          <p className="text-white">© 2022 Tiny</p>
          <Link to="/">
            <button className="btn btn-active btn-link text-white">
              BACK TO TOP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
