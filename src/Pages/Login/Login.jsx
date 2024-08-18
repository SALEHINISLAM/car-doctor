import React from "react";
import PropTypes from "prop-types";
import SignNav from "../SharedComponents/SignNav";

const Login = (props) => {
    const handleLogin=(e)=>{
        e.preventDefault();

    }
  return (
    <div className="bg-white text-black">
      <SignNav />
      <div className="hero min-h-screen container mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:w-1/2 lg:mr-12">
            <img
              src="https://raw.githubusercontent.com/SALEHINISLAM/car-doctor/main/public/assets/images/login/login.svg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="card text-black lg:w-1/2 w-full max-w-sm  shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <h2 className="text-5xl font-semibold text-center">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered bg-white"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error text-white" type="submit">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
