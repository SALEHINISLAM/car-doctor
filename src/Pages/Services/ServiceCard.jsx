import React from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {img, title, description, price}=service;
  return (
    <div>
      <div className="card bg-white border rounded-none shadow-xl h-full">
        <figure className="px-10 pt-10 h-2/3">
          <img
            src={img}
            alt={title}
            className="rounded-xl h-full w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black text-2xl font-bold">{title}</h2>
          <div className="flex flow-row justify-between">
          <p className="text-error text-xl font-semibold">Price : ${price}</p>
            <button className="btn bg-transparent border-none btn-circle">
            <FaArrowRight className="size-4 text-error"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {};

export default ServiceCard;
