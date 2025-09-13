import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { toast } from 'react-toastify';
import axios from "axios";
import {useNavigate} from "react-router-dom"

const CreateFood = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isVegetarian: 'true',
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
       setPreviewUrl(URL.createObjectURL(file));

        setBase64Image(file);
    } else {
      setBase64Image(null);
    }
  };


  const onSubmit = async (data) => {
    setIsLoading(true)
    const fileData = new FormData();
    fileData.append("name",data.dishName)
    fileData.append("video",base64Image)
    fileData.append("ingredients",data.ingredients)
    fileData.append("description",data.description)
    fileData.append("price",data.price)
    try {
        const response = await axios.post("http://localhost:3000/api/food",fileData,
        {
          withCredentials:true,
          headers: {
        "Content-Type": "multipart/form-data",
        }},)
        setIsLoading(false)
        toast.success(response.data.message)
        navigate(`/seller/profile/${response.data.food.seller}`)
    } catch (error) {
        console.log(error)
        setIsLoading(false)
        toast.error(error.message);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#fff] text-black p-4 font-sans overflow-hidden">
      {/* Background blobs for a dynamic, modern feel */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#32235E] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#1D3A5D] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-[#1A5B4D] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl transition-all duration-700 ease-in-out transform scale-100 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-black">Create Your Dish</h1>
          <p className="text-sm text-gray-400 mb-8 text-center">
            Enter your dish name,ingredients,video and instructions, and create your reel.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="dishName" className="block text-sm font-medium text-black/80 mb-2">
                Dish Name
              </label>
              <input
                type="text"
                id="dishName"
                {...register("dishName", { required: "Dish name is required" })}
                className="w-full p-3 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20 focus:ring-1 focus:black/50 focus:border-transparent outline-none transition-all duration-300"
                placeholder="e.g., Spicy Tomato Pasta"
              />
              {errors.dishName && <p className="text-red-400 text-sm mt-1">{errors.dishName.message}</p>}
            </div>
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-black/80 mb-2">
                Ingredients
              </label>
              <textarea
                id="ingredients"
                {...register("ingredients", { required: "Ingredients are required" })}
                rows="4"
                className="w-full p-3 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20 focus:ring-1 focus:black/50 focus:border-transparent outline-none transition-all duration-300"
                placeholder="e.g., Pasta, Tomatoes, Garlic, Chili Flakes"
              ></textarea>
              {errors.ingredients && <p className="text-red-400 text-sm mt-1">this field is required </p>}
            </div>
            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-black/80 mb-2">
                Description
              </label>
              <textarea
                id="instructions"
                {...register("description", { required: "Instructions are required" })}
                rows="6"
                className="w-full p-3 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20 focus:ring-1 focus:black/50 focus:border-transparent outline-none transition-all duration-300"
                placeholder="e.g., Boil pasta. Sauté garlic and chili. Add tomatoes and simmer. Combine with pasta."
                ></textarea>
              {errors.description && <p className="text-red-400 text-sm mt-1">this field is required</p>}
            </div>
             <div>
              <label htmlFor="price" className="block text-sm font-medium text-black/80 mb-2">
                Price
              </label>
              <div className="relative">
                <span className="absolute text-xl left-2 top-[21%] text-black/75 mr-2">₹</span>
                <input
                type="number"
                {...register("price", { required: "price is required" })}
                className="w-full p-3 pl-6 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20 focus:ring-1 focus:black/50 focus:border-transparent outline-none transition-all duration-300"
                placeholder="e.g., ₹249/-"
                onWheel={e => e.target.blur()}
              />
              </div>
              {errors.price && <p className="text-red-400 text-sm mt-1">{errors.dishName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-black/80 mb-2">
                Dish Photo
              </label>
              <input
                type="file"
                id="dishPhoto"
                accept="video/*"
                {...register("video")}
                onChange={handleImageChange}
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#1D3A5D] file:text-white hover:file:bg-[#2A4D74]"
                />
              {previewUrl && (
                  <div className="mt-4 w-32 h-32 overflow-hidden rounded-xl border border-white border-opacity-20">
                  <video muted src={previewUrl} alt="Dish Preview" className="w-full h-full object-cover" />
                </div>
              )}
              {errors.video && <p className="text-red-400 text-sm mt-1">this field is required</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-black/80 mb-2">
                Dietary Type
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="true"
                    {...register("isVegetarian")}
                    className="form-radio text-green-700 bg-white bg-opacity-10 border border-white border-opacity-20 focus:ring-1 focus:black/50"
                  />
                  <span className="text-black/80 text-md flex gap-2 justify-center items-center">Veg </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="false"
                    {...register("isVegetarian")}
                    className="form-radio text-red-500 bg-white bg-opacity-10 border border-white border-opacity-20 focus:ring-1 focus:black/50"
                  />
                  <span className="text-black/80 text-md flex gap-2 justify-center items-center">Non-Veg</span>
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full px-6 py-3 capatalize border-1 backdrop-blue-lg border-black/80 outline-none text-black/80 font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-[#357ae8] hover:shadow-xl transform hover:-translate-y-0.5"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Creating...</span>
                  </div>
                ) : (
                  'Create Dish'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFood;