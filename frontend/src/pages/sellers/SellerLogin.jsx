import React from "react";
import Lottie from "lottie-react";
import business from "../../assets/business.json";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SellerLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const response = await axios.post(
        "https://backend-3cpr.onrender.com/api/auth/seller/login",
        data,
        { withCredentials: true }
      );
      toast.success("logged in successfully.");
      navigate("/seller/create-food");
    } catch (error) {
      console.log(error);
      toast.error(error.response);
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex text-white">
        <div className="w-0 sm:w-[65%] h-full flex ">
          <div className="w-full h-full flex relative bg-blue-400 overflow-hidden">
            <Lottie
              className="absolute -top-[4rem] -left-[2.3rem] w-full h-full object-cover"
              animationData={business}
              loop={true}
            />
            ;
          </div>
        </div>
        <div className="w-full sm:w-[35%] h-full flex justify-center items-center">
          <div className="w-[90%] h-[50%] sm:h-[65%] bg-white text-black rounded-lg shadow-black shadow-2xl ring ring-gray-300">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="w-full h-full flex flex-col gap-5 px-6 py-4"
            >
              <div>
                <h1 className="text-2xl text-center">Seller Login</h1>
                <h1 className="text-md text-center">
                  Login as a{" "}
                  <button
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() => navigate("/user/login")}
                  >
                    User
                  </button>{" "}
                </h1>
              </div>
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
                  to="/seller/register"
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

export default SellerLogin;
