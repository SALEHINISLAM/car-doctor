import React, { useContext } from "react";
import PropTypes from "prop-types";
import SignNav from "../SharedComponents/SignNav";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = (props) => {
    const {createUser}=useContext(AuthContext)
    const handleSignUp=async(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget)
        const name=form.get('name');
        const email=form.get('email');
        const password=form.get('password')
        console.log(name, email, password)
        try{
          const response=await createUser(email, password, name)
          console.log(response.json())
          Swal.fire('Registration successful...')
        }catch (err){
          throw err;
        }
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
            <form className="card-body" onSubmit={handleSignUp}>
              <h2 className="text-5xl font-semibold text-center">SignUp</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered bg-white"
                  required
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
                  name="password"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error text-white" type="submit">Sign In</button>
              </div>
            </form>
            <p className="text-center">
                Already have an account ? <Link to={'/login'} className="font-bold text-error">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
