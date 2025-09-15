import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import business from "../../assets/business.json";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function Register() {
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [profilePreview, setProfilePreview] = useState()
  const [profile, setProfile] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    setProfile(file)
    const insideImageUrl =
      typeof file === "string"
        ? file
        : URL.createObjectURL(file);
    setProfilePreview(insideImageUrl)
  };

  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profileImg", profile)
    try {
      const response = await axios.post(
        "https://backend-3cpr.onrender.com/api/auth/user/register",
        formData,
        { withCredentials: true }
      );
      toast.success("register successfully.");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  return (
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
        <div className="w-[90%] h-[70%] sm:h-[90%] bg-white text-black rounded-lg shadow-black shadow-2xl ring ring-gray-300">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="w-full h-full flex flex-col gap-2 px-6 py-4"
          >
            <div>
              <h1 className="text-2xl text-center">Register</h1>
              <h1 className="text-md text-center">
                Register as a{" "}
                <button
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => navigate("/seller/register")}
                >
                  Selller
                </button>{" "}
              </h1>
            </div>
            <div className="relative w-full flex justify-center mt-3">
              <input
                {...register("profileImg")}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUploadClick}
                ref={fileRef}
              />
              <button
                onClick={() => fileRef.current.click()}
                className=" w-14 h-14 flex items-center border-1 justify-center cursor-pointer rounded-full"
              >
                {profilePreview ? <img src={profilePreview} alt="Profile" className="w-full h-full object-cover rounded-full" /> : <FaRegUser size={24} />}
              </button>
              <div className="absolute bottom-1 right-[38%] w-7 h-7 flex items-center justify-center cursor-pointer rounded-full">
                <MdEdit size={18} />
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-1 mt-5">
              <label htmlFor="name">
                Name:-
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full mt-1 text-black outline-none border-1 border-gray-400 rounded-lg px-2 py-2"
                />
                {errors.name && (
                  <span className="text-red-700 text-xs">
                    This field is required
                  </span>
                )}
              </label>
              <label htmlFor="email">
                email:-
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full mt-1 text-black outline-none border-1 border-gray-400 rounded-lg px-2 py-2"
                />
                {errors.email && (
                  <span className="text-red-700 text-xs">
                    This field is required
                  </span>
                )}
              </label>
              <label htmlFor="password">
                password:-
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="w-full mt-1 text-black outline-none border-1 border-gray-400 rounded-lg px-2 py-2"
                />
                {errors.password && (
                  <span className="text-red-700 text-xs">
                    This field is required
                  </span>
                )}
              </label>
              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-3 hover:rounded-4xl mt-8 transition-all duration-300"
              >
                Register
              </button>
              <p className="text-sm text-end">
                already have an account?
                <Link
                  to="/user/login"
                  className="text-blue-800 font-semibold underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
