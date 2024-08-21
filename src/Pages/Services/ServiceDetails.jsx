import React from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import Facility from "./Facility";
import { LuPlayCircle } from "react-icons/lu";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = useLoaderData();
  const { title, img, price, description, facility } = service;
  return (
    <div className="container mx-auto text-black">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 space-y-8">
          <div className=" p-2 md:p-5 lg:p-8 ">
            <img src={img} alt="" className="rounded-xl w-full " />
          </div>
          <div className="p-2 md:p-5 lg:p-8 space-y-8">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p>{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              {facility.map((facility, index) => (
                <Facility facility={facility} key={index} />
              ))}
            </div>
            <h2 className="text-4xl font-bold">3 Simple Steps to Process</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
              <div className="card shadow-xl w-full border">
                <div className="card-body text-center items-center space-y-3">
                  <div className="bg-[#ff391121] w-[83px] h-[83px] rounded-full justify-center items-center flex">
                    <div className="bg-[#FF3811] w-[55px] h-[55px] rounded-full justify-center items-center flex text-white font-bold text-lg">
                      01
                    </div>
                  </div>
                  <h2 className="card-title">STEP ONE</h2>
                  <p>
                    It uses a dictionary <br /> of over 200 .
                  </p>
                </div>
              </div>

              <div className="card shadow-xl w-full border">
                <div className="card-body text-center items-center space-y-3">
                  <div className="bg-[#ff391121] w-[83px] h-[83px] rounded-full justify-center items-center flex">
                    <div className="bg-[#FF3811] w-[55px] h-[55px] rounded-full justify-center items-center flex text-white font-bold text-lg">
                      02
                    </div>
                  </div>
                  <h2 className="card-title">STEP TWO</h2>
                  <p>
                    It uses a dictionary <br /> of over 200 .
                  </p>
                </div>
              </div>

              <div className="card shadow-xl w-full border">
                <div className="card-body text-center items-center space-y-3">
                  <div className="bg-[#ff391121] w-[83px] h-[83px] rounded-full justify-center items-center flex">
                    <div className="bg-[#FF3811] w-[55px] h-[55px] rounded-full justify-center items-center flex text-white font-bold text-lg">
                      03
                    </div>
                  </div>
                  <h2 className="card-title">STEP THREE</h2>
                  <p>
                    It uses a dictionary <br /> of over 200 .
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex justify-center items-center min-h-96 text-[#FF3811] rounded-xl"
              style={{
                backgroundImage: `url('https://i.ibb.co/gMszxqT/2.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <LuPlayCircle className="size-40" />
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-12">

          <div className="bg-[#151515] text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl">
            <h3 className="text-2xl ">Download</h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between">
                <div className="flex items-center gap-3">
                  <IoDocumentTextSharp className="inline" />
                  <div>
                    <h3 className="text-lg">Our Brochure</h3>
                    <h4 className="text-base">Download</h4>
                  </div>
                </div>
                <div className="bg-[#FF3811] h-11 w-11 flex items-center justify-center">
                  <FaArrowRight />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex items-center gap-3">
                  <IoDocumentTextSharp className="inline" />
                  <div>
                    <h3 className="text-lg">Company Details</h3>
                    <h4 className="text-base">Download</h4>
                  </div>
                </div>
                <div className="bg-[#FF3811] h-11 w-11 flex items-center justify-center">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
{/* need help? */}
          <div className="bg-[#151515] text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl space-y-6">
            <div className="flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/SALEHINISLAM/car-doctor/main/public/assets/logo.svg"
                alt=""
                className="bg-white rounded-xl"
              />
            </div>
            <h2 className="text-white text-xl font-bold text-center">
              Need Help? We Are Here <br />
              To Help You
            </h2>
            <div className="relative items-center justify-center flex">
              <div className="bg-white text-black text-xl font-bold text-center w-56 h-24 rounded-xl flex flex-col items-center justify-center">
                <h3>
                  <span className="text-[#FF3811]">Car Doctor</span>  Special
                </h3>
                <h4 className=" font-bold text-base text-black text-center">
                Save up to <span className="text-[#FF3811]">60% off</span>
                </h4>
              </div>
              <div className="absolute btn border-none text-white bg-[#FF3811] hover:btn-outline -bottom-8">
              Get A Quote
              </div>
            </div>
            <div className="pb-4"></div>
          </div>
          <div className="text-4xl font-bold">
            <h2>
                Price: ${price}
            </h2>
          </div>
          <button className="bg-[#FF3811] btn w-full border-none text-white text-lg font-semibold">
          Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceDetails.propTypes = {};

export default ServiceDetails;
