import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";

const OrderRow = ({ booking }) => {
  const [edit, setEdit] = useState(false);
  const { service, img, price, date, customerName, email, _id, title } =booking;
  const handleDelete = (id) => {
    Swal.fire("Are you sure to delete?").then((res) => {
      fetch(`http://localhost:3000/booking/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((datum) => {
          if (datum.deletedCount > 0) {
            Swal.fire("Deleted Successfully...").then((response) => {
              if (response.isConfirmed) {
                window.open("/orders", self);
              }
            });
          } else {
            Swal.fire("Something went wrong...");
          }
        });
    });
  };
  const handleUpdate = (id) => {
    const newDate=document.getElementById('newDate')?.value;
    console.log(newDate)
    
    fetch(`http://localhost:3000/booking/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({newDate})
    })
    .then(res=>res.json())
    .then(datum=>{
        console.log(datum)
        if (datum.modifiedCount>0) {
            Swal.fire('updated successful')
            .then(result=>{
                if (result.isConfirmed) {
                    window.open('/orders', self);
                }
            })
        }
    })
    setEdit(!edit);
  };
  return (
    <tr>
      <th>
        <button
          className="btn btn-circle btn-sm"
          onClick={() => handleDelete(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={
                  img
                    ? img
                    : "https://img.daisyui.com/images/profile/demo/3@94.webp"
                }
                alt="service"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {title}
              <br />
              <Link to={`/service/${service}`}>Service Details</Link>
            </div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>
        {customerName}
        <br />
        {email}
      </td>
      <th>
        {edit ? (
          <input
            type="date"
            defaultValue={date}
            className="input input-bordered w-full max-w-xs text-black bg-white"
            id="newDate"
            style={{ colorScheme: "light" }}
          />
        ) : (
          <button className="btn btn-ghost btn-xs">{date }</button>
        )}
      </th>
      <th>
        {
            !edit?<button className="btn btn-ghost" onClick={()=>setEdit(!edit)}>
            <FaEdit />
          </button>:<button className="btn btn-ghost" onClick={()=>handleUpdate(_id)}>
            Update
          </button>
        }
        
      </th>
    </tr>
  );
};

OrderRow.propTypes = {};

export default OrderRow;
