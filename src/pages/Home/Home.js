import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import textBg from "../../assets/bg/textbg.svg";
import bg from "../../assets/pageimg/convert-2.png";
import card1 from "../../assets/pageimg/packege.png";
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

import createStore from "../../assets/pageimg/createShop.png";
import competition from "../../assets/pageimg/competition.svg";
import volume from "../../assets/pageimg/volume.svg";
import margin from "../../assets/pageimg/margin.svg";
import demand from "../../assets/pageimg/demand.svg";
import amazon from "../../assets/pageimg/amazon.svg";

import home from "../../assets/logo/icon2.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

import { Autoplay, Pagination, Navigation } from "swiper";

import { useSpring, animated } from "react-spring";
import Result from "../../components/Result/Result";

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
      <div className="text-white w-4/5 mx-auto md:mt-[80px]  container ">
        <div className="bg-blue-500 w-full p-5 md:p-16 rounded-lg">
          <h1 data-aos="fade-right" className=" md:text-[50px] font-bold mt-0">
            Passive Income Opportunities with us{" "}
            <span
              style={{ backgroundImage: `url(${textBg})` }}
              className="bg-no-repeat bg-center bg-contain p-3"
            >
              Using Amazon FBA
            </span>{" "}
            Automation.
          </h1>
          <p data-aos="fade-up-left" className="mt-5 md:mt-[40px]  text-lg">
            We’re ready to do the heavy lifting for investors like you.
          </p>
          <div className="md:flex mt-7 md:justify-center hidden md:block">
            <div className="flex mr-12 mb-4">
              <img className="mr-5" src={home} alt="" />
              <p className="md:text-lg md:font-semibold">
                Stress-Free <br /> Business
              </p>
            </div>
            <div className="flex mr-12 mb-4">
              <img className="mr-5" src={home} alt="" />
              <p className="md:text-lg md:font-semibold">
                100% Automated <br /> Investment
              </p>
            </div>
            <div className="flex">
              <img className="mr-5" src={home} alt="" />
              <p className="md:text-lg md:font-semibold">
                Recurring Passive <br /> Income
              </p>
            </div>
          </div>
        </div>
        <h2
          data-aos="fade-up-right"
          className=" mt-10 md:text-[44px] font-bold md:mt-[150px] "
        >
          <span className="md:text-2xl">
            WE GROW AND SCALE CLIENTS THEIR VERY OWN <br />
          </span>
          FBA Completely Automated Amazon Stores
        </h2>
      </div>
      <div className="md:flex md:relative  w-4/5 mx-auto mt-12">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="w-1/2"
        >
          <img className="w-full md:w-4/5 " src={bg} alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-white md:absolute md:top-[15%] md:left-[50%] md:w-[550px]"
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

          <p className="text-justify md:text-[20px]  leading-8 font-semibold mb-8">
            If you want to do it all by yourself, this service is not for you.
          </p>
        </div>
      </div>
      <div data-aos="zoom-in-up" className=" container mx-auto mt-12">
        <h2 className="md:text-[44px] font-bold text-white">
          And given founders dream exits...
        </h2>
      </div>
      <div className="mt-10 md:mt-[150px] w-[100%]">
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
              <img className="hidden" src={img1} alt="Burger" />
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
              <div className="p-8 text-left  hidden md:block">
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
          className="md:text-[44px] font-bold mt-10 md:mt-[150px] text-white mb-12"
        >
          AMAZON FBA PACKAGES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="w-395px bg-[#0e0066] rounded-xl"
          >
            <div className="w-[256px] h-[256px] mx-auto mt-8">
              <img className="w-full" src={card1} alt="" />
            </div>
            <div className="text-left pl-10 text-white">
              <h2 className="text-[34px] font-bold mb-4">SILVER / 20K</h2>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className=" ml-4">$20,000 </p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className=" ml-4">50 / 50. Profit split</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="ml-4">Customer Service</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className=" ml-4">Fully managed store</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="ml-4">Inventory Management</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="ml-4">Profit/Revenue spreadsheet</p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className=" ml-4">VA access</p>
              </div>
              <div className="flex mb-4">
                <img src={xmark} alt="" />
                <p className=" ml-4">Appeal Service</p>
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
                GOLD / 25K
              </h2>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4">$25,000</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4"> 60/40. profit split</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4">Customer Service</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4">Fully Manage store</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4">Inventory Mangement</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4">Profit / Revenue spreadsheet</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4">Limited VA Access</p>
              </div>
              <div className="flex mb-4">
                <img src={tik2} alt="" />
                <p className="text-white ml-4">One round of Appeal service</p>
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
              <img className="w-full" src={card1} alt="" />
            </div>
            <div className="text-left pl-10 text-[#0e0066]">
              <h2 className="text-[34px] font-bold   mb-4">PLATINUM / 30K</h2>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4">$30,000 </p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4"> 70 / 30. profit split</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4">Customer service</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4">Fully managed store</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4">Inventory Management</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4">Profit / Revenue spreadsheet</p>
              </div>
              <div className="flex mb-4">
                <img src={tik} alt="" />
                <p className=" ml-4">VA Access</p>
              </div>
              <div className="flex mb-8">
                <img src={tik} alt="" />
                <p className=" ml-4 ">Unlimited Appeal Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto">
        <h2
          data-aos="zoom-in-up"
          className="md:text-[44px] font-bold mt-10 md:mt-[150px] text-white"
        >
          Our process is fast,
        </h2>
        <h2
          data-aos="zoom-in-up"
          className=" mb-3 md:text-[44px] font-bold text-white"
        >
          friendly, and simple
        </h2>
        <div>
          <h2
            data-aos="zoom-in-up"
            className="md:text-2xl font-medium md:mt-[60px] text-white"
          >
            We believe in being honest, transparent, goal oriented and customer
            centric which are some of the beliefs that bring us together as
            entrepreneurs to bring you the best AMZ FBA Automation.
          </h2>
        </div>
        <div className="mt-10 md:flex md:justify-evenly md:mt-[80px]">
          <div>
            <h2 className="text-[44px] font-bold text-white flex justify-center">
              <Number n={120} /> +
            </h2>
            <h2 className="md:text-[30px] font-bold text-white">
              Stores Being Managed
            </h2>
          </div>
          <div>
            <h2 className="text-[44px] font-bold text-white flex justify-center">
              <Number n={150} /> +
            </h2>
            <h2 className="md:text-[30px] font-bold text-white">
              Vertical Ventures Team
            </h2>
          </div>
          <div>
            <h2 className="text-[44px] font-bold text-white flex justify-center">
              $<Number n={75738329} />
            </h2>
            <h2 className="md:text-[30px] font-bold text-white">
              Customer Sales
            </h2>
          </div>
        </div>
        <div className="w-2/5 mx-auto mt-10 md:mt-20 text-[18px]">
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
      <div className="mt-12 md:mt-[100px]  container mx-auto">
        <h2
          data-aos="zoom-in-up"
          className="md:text-[44px] text-2xl font-bold text-white"
        >
          HOW AMAZON FBA WORKS
        </h2>

        <div className="grid md:grid-cols-3 justify-items-center grid-cols-2 gap-x-4 gap-y-16 md:mt-[100px]">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px] rounded-full" src={createStore} alt="" />
            <p className="text-[18px] text-white font-medium">Set up</p>
            <p className="text-white">FBA store</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={demand} alt="" />
            <p className="text-[18px] text-white font-medium">
              A product with <br /> sufficient demand to <br /> generate high
              sales volume
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[85px]" src={competition} alt="" />
            <p className="text-[18px] text-white font-medium">
              Low <br /> Competition
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={margin} alt="" />
            <p className="text-[18px] text-white font-medium">
              A product with <br /> good profit margins
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[150px] " src={amazon} alt="" />
            <p className="text-[18px] text-white font-medium">
              Send to <br /> Amazon warehouse
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="flex flex-col	justify-center items-center pt-8 pb-8"
          >
            <img className="w-[120px]" src={volume} alt="" />
            <p className="text-[18px] text-white font-medium">
              Sells like a Rocket
            </p>
            <p className="text-white"></p>
          </div>
        </div>
      </div>
      <Result></Result>
      <div data-aos="zoom-in-up" className="md:mt-[150px]  container mx-auto">
        <h2 className="md:text-[44px] font-bold text-white">
          If you're interested to build your business with us.
        </h2>
        <button className="btn mx-auto border-white bg-[#1a21ff] hover:bg-white hover:text-[#1a21ff] mt-10">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Home;
