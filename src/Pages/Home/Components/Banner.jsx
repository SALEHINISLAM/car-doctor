import React from "react";
import PropTypes from "prop-types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const Banner = (props) => {
  return (
    <div>
      <div className="carousel w-full rounded-xl lg:h-[600px]">
        {/* slide-1 start */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/gMszxqT/2.jpg"
            className="w-full"
          />
          <div className="absolute left-0 top-0 flex gap-5 h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151530]">
            <div className=" text-white lg:w-1/2 lg:pl-12 px-2 pb-2 md:w-2/3 md:pl-6 sm:space-y-2 md:space-y-6 lg:space-y-8">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
            Your Car, Our Care
            </h2>
            <p className="text-xs md:text-base lg:text-lg">
            Experience top-notch car servicing from our certified technicians, ensuring optimal performance and longevity for your vehicle.
            </p>
            <div className="flex flex-col md:flex-row w-1/2 gap-1 md:gap-5">
            <button className="btn btn-error text-white ">Discover More</button>
            <button className="btn text-white btn-outline hover:bg-gray-600 hover:text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide6" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowLeft/>
            </a>
            <a href="#slide2" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowRight/>
            </a>
          </div>
        </div>
        {/* slide-2 start */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/51BJMDJ/3.jpg"
            className="w-full"
          />
          <div className="absolute left-0 top-0 flex gap-5 h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151530]">
            <div className=" text-white lg:w-1/2 lg:pl-12 px-2 pb-2 md:w-2/3 md:pl-6 sm:space-y-2 md:space-y-6 lg:space-y-8">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
            Keep Your Car Purring
            </h2>
            <p className="text-xs md:text-base lg:text-lg">
            Prevent unexpected breakdowns with our comprehensive car servicing packages tailored to your vehicle's specific needs.
            </p>
            <div className="flex flex-col md:flex-row w-1/2 gap-1 md:gap-5">
            <button className="btn btn-error text-white ">Discover More</button>
            <button className="btn text-white btn-outline hover:bg-gray-600 hover:text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a href="#slide1" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowLeft/>
            </a>
            <a href="#slide3" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowRight/>
            </a>
          </div>
        </div>
        {/* slide-3 start */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/NxMvZpj/4.jpg"
            className="w-full"
          />
          <div className="absolute left-0 top-0 flex gap-5 h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151530]">
            <div className=" text-white lg:w-1/2 lg:pl-12 px-2 pb-2 md:w-2/3 md:pl-6 sm:space-y-2 md:space-y-6 lg:space-y-8">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
            Revitalize Your Ride
            </h2>
            <p className="text-xs md:text-base lg:text-lg">
            Restore your car's peak performance through our expert diagnostics, quality parts, and meticulous workmanship.
            </p>
            <div className="flex flex-col md:flex-row w-1/2 gap-1 md:gap-5">
            <button className="btn btn-error text-white ">Discover More</button>
            <button className="btn text-white btn-outline hover:bg-gray-600 hover:text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a href="#slide2" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowLeft/>
            </a>
            <a href="#slide4" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowRight/>
            </a>
          </div>
        </div>
        {/* slide-4 start */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/KNZhS1C/5.jpg"
            className="w-full"
          />
          <div className="absolute left-0 top-0 flex gap-5 h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151530]">
            <div className=" text-white lg:w-1/2 lg:pl-12 px-2 pb-2 md:w-2/3 md:pl-6 sm:space-y-2 md:space-y-6 lg:space-y-8">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
            Car Care, Guaranteed
            </h2>
            <p className="text-xs md:text-base lg:text-lg">
            Enjoy peace of mind with our reliable car servicing, backed by our customer satisfaction guarantee and warranty on all services.
            </p>
            <div className="flex flex-col md:flex-row w-1/2 gap-1 md:gap-5">
            <button className="btn btn-error text-white ">Discover More</button>
            <button className="btn text-white btn-outline hover:bg-gray-600 hover:text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a href="#slide3" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowLeft/>
            </a>
            <a href="#slide5" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowRight/>
            </a>
          </div>
        </div>
        {/* slide-5 start */}
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/0httzMb/6.jpg"
            className="w-full"
          />
          <div className="absolute left-0 top-0 flex gap-5 h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151530]">
            <div className=" text-white lg:w-1/2 lg:pl-12 px-2 pb-2 md:w-2/3 md:pl-6 sm:space-y-2 md:space-y-6 lg:space-y-8">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
            Service Your Car, Save Money
            </h2>
            <p className="text-xs md:text-base lg:text-lg">
            Regular car maintenance can help prevent costly repairs and improve your vehicle's fuel efficiency, saving you money in the long run.
            </p>
            <div className="flex flex-col md:flex-row w-1/2 gap-1 md:gap-5">
            <button className="btn btn-error text-white ">Discover More</button>
            <button className="btn text-white btn-outline hover:bg-gray-600 hover:text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a href="#slide4" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowLeft/>
            </a>
            <a href="#slide6" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowRight/>
            </a>
          </div>
        </div>
        {/* slide-6 start */}
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/zVqRgjh/1.jpg"
            className="w-full"
          />
          <div className="absolute left-0 top-0 flex gap-5 h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151530]">
            <div className=" text-white lg:w-1/2 lg:pl-12 px-2 pb-2 md:w-2/3 md:pl-6 sm:space-y-2 md:space-y-6 lg:space-y-8">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
            Fast, Reliable Car Service
            </h2>
            <p className="text-xs md:text-base lg:text-lg">
            Get back on the road quickly with our efficient service, convenient booking options, and prompt turnaround times.
            </p>
            <div className="flex flex-col md:flex-row w-1/2 gap-1 md:gap-5">
            <button className="btn btn-error text-white ">Discover More</button>
            <button className="btn text-white btn-outline hover:bg-gray-600 hover:text-white">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a href="#slide5" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowLeft/>
            </a>
            <a href="#slide1" className="btn btn-circle hover:bg-error text-white border-none bg-opacity-50 hover:bg-opacity-100">
              <FaArrowRight/>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
