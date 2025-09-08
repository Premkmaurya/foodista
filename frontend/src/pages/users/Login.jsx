import React from "react";
import Lottie from "lottie-react";
import business from "../../assets/business.json";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import {toast} from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/user/login",
        data,
        { withCredentials: true }
      );
      toast.success("login successfully.");
      navigate("/");
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex text-white">
        <div className="w-[65%] h-full flex ">
          <div className="w-full h-full flex relative bg-blue-400 overflow-hidden">
            <Lottie
              className="absolute -top-[4rem] -left-[2.3rem] w-full h-full object-cover"
              animationData={business}
              loop={true}
            />
            ;
          </div>
        </div>
        <div className="w-[35%] h-full flex justify-center items-center">
          <div className="w-[90%] h-[65%] bg-white text-black rounded-lg shadow-black shadow-2xl ring ring-gray-300">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="w-full h-full flex flex-col gap-5 px-6 py-4"
            >
              <h1 className="text-2xl text-center">Login</h1>
              <label htmlFor="email">
                email:-
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full mt-1 text-black rounded-lg outline-none border-1 border-gray-400 px-2 py-2"
                />
                {errors.email && (
                  <span className="text-red-700 leading-0 text-xs">
                    This field is required
                  </span>
                )}
              </label>
              <label htmlFor="pvssword">
                password:-
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="w-full mt-1 text-black rounded-lg outline-none border-1 border-gray-400 px-2 py-2"
                />
                {errors.password && (
                  <span className="text-red-700 leading-0 text-xs">
                    This field is required
                  </span>
                )}
              </label>
              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-3 hover:rounded-4xl transition-all duration-300"
              >
                Login
              </button>
              <p className="text-sm text-end">
                don't have an account?
                <Link
                  to="/user/register"
                  className="text-blue-800 font-semibold underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
