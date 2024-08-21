import React, { useContext } from "react";
import PropTypes from "prop-types";
import SignNav from "../SharedComponents/SignNav";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";

const Login = (props) => {
    const {userSignIn}=useContext(AuthContext)
    const location=useLocation();
    const navigate=useNavigate();
    console.log(location)
    const handleLogin=async(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        //const name=form.name.value
        const email=form.get('email');
        const password=form.get('password');
        console.log('form', email, password);
        try{
          const response=await userSignIn(email, password)
          console.log(response);
          Swal.fire(`Hi ${response.user.displayName}`)
          .then(res=>{
            if (res.isConfirmed) {
              //window.open(`${location.state}`, self)
              //navigate(`${location?.state? location?.state : '/'}`, {replace:true});
              //access token
              axios.post('http://localhost:3000/jwt', response.user , {withCredentials: true})
              .then(data=>{
                console.log(data.data)
                if (data.data.success) {
                  navigate(`${location?.state? location?.state : '/'}`, {replace:true});
                }
              })
            }
          })
        }catch(err){
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
            <form className="card-body" onSubmit={handleLogin}>
              <h2 className="text-5xl font-semibold text-center">Login</h2>
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
                <button className="btn btn-error text-white" type="submit">Login</button>
              </div>
            </form>
            <p className="text-center">
                New to Car Doctors? <Link to={'/signup'} className="text-error font-bold">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
