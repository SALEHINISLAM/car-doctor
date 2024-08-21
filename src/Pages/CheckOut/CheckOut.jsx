import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const CheckOut = (props) => {
  const service = useLoaderData();
  const {_id, title, price,img } = service;
  const {user}=useContext(AuthContext);
const handleCheckOut=(e)=>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const name=form.get('name');
    const email=form.get('email');
    const date=form.get('date');
    const price=form.get('price');
    console.log(name, email, date, price);
    const order={
        customerName:name,
        email,
        img:img,
        date,
        service:title,
        service:_id,
        price,
        title
    }
    console.log(order);
    fetch('http://localhost:3000/bookings',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if (data.insertedId) {
            Swal.fire('Order placed successfully')
        }
    })
}
  return (
    <div className="container mx-auto">
      <h2>Check Out{title}</h2>
      <div className="">
        <form className="card-body space-y-12 bg-[#F3F3F3] rounded-lg" onSubmit={handleCheckOut}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered bg-white text-black"
              name="name"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="date"
              name="date"
              className="input input-bordered outline-black bg-white text-black"
              required
              style={{colorScheme:"light"}}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered bg-white text-black"
              defaultValue={user?.email}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="due amount"
              name="price"
              defaultValue={'$ '+price}
              className="input input-bordered bg-white text-black"
              readOnly
            />
          </div>

            </div>
            
          <div className="form-control mt-6">
            <button className="btn btn-error text-white" type="submit">Confirm Order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

CheckOut.propTypes = {};

export default CheckOut;
