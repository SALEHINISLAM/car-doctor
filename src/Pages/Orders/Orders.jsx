import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import SignNav from "../SharedComponents/SignNav";
import { AuthContext } from "../../Providers/AuthProviders";
import OrderRow from "./OrderRow";
import axios from "axios";

const Orders = (props) => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:3000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials:true})
    .then(res=>{
      setBookings(res.data)
    })
  }, [url, user]);
  return (
    <div>
      <SignNav />
      <div className="overflow-x-auto container mx-auto text-black">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service</th>
              <th>Price</th>
              <th>Customer Name & Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking=><OrderRow booking={booking} key={booking._id}/>)
            }
            

          </tbody>
          
        </table>
      </div>
    </div>
  );
};

Orders.propTypes = {};

export default Orders;
