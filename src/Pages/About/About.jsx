import React from "react";
import PropTypes from "prop-types";
const About = (props) => {
  return (
    <div className="container mx-auto">
      {/* https://i.ibb.co/bzVwX6L/parts.jpg
https://i.ibb.co/MBfGQTs/person.jpg */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col h-full lg:flex-row gap-20 md:gap-32">
          <div className="lg:w-1/2 relative">
          <img
            src="https://i.ibb.co/MBfGQTs/person.jpg"
            className="w-5/6 rounded-lg shadow-2xl"
          />
          <img
            src="https://i.ibb.co/bzVwX6L/parts.jpg"
            className="w-3/5 absolute right-1 top-1/2 border-4 lg:border-8 border-white rounded-lg shadow-2xl"
          />
          </div>
          <div className="lg:w-1/2 space-y-6">
          <h3 className="text-error text-xl font-bold">
          About Us
          </h3>
            <h1 className="lg:text-5xl font-bold text-black text-4xl">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="text-[#737373]">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn btn-error text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
