import React from "react";
import PropTypes from "prop-types";

const Facility = ({ facility }) => {
  const { name, details } = facility;
  return (
    <div>
      <div className="card shadow-xl bg-[#F3F3F3] border-t-4 border-t-red-400">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

Facility.propTypes = {};

export default Facility;
