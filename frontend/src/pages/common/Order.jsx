import React, { useContext } from "react";
import Stepper, { Step } from "../../components/order/Stepper";
import { context } from "../../context/auth/AuthContext";
import Login from "../../pages/users/Login";

const Order = () => {
  const { loggedIn } = useContext(context);

  const priceDetails = {
    itemPrice: 735,
    platformFee: 7,
    totalPayable: 742,
    totalSavings: 357,
  };

  const deliveryAddresses = [
    {
      name: "Prem Maurya",
      type: "HOME",
      phone: "8423845243",
      address: "259, Nai basti railway gang, Hardoi, Uttar Pradesh - 241001",
      isSelected: true,
    },
    {
      name: "Prem Maurya",
      type: "WORK",
      phone: "8423845243",
      address:
        "nai basti railway gang hardoi, Nai basti road, Hardoi, Uttar Pradesh - 241001",
      isSelected: false,
    },
  ];
  return (
    <div>
      <div className="h-full w-full bg-gray-100 text-gray-800">
        <div className="container mx-auto max-w-7xl py-2 md:py-7">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Order Steps */}
            <div className="lg:w-8/12 space-y-4">
              {/* 1. Login Section (Completed) */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    <div className="text-sm font-semibold text-blue-500 flex items-center">
                      <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2">
                        1
                      </span>
                      <span className="uppercase tracking-wider">Login</span>
                      <svg
                        className="w-4 h-4 text-green-500 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div className="text-sm mt-1">
                      <span className="font-semibold">
                        {deliveryAddresses[0].name}
                      </span>
                      <span className="text-gray-500 ml-2">
                        +{deliveryAddresses[0].phone}
                      </span>
                    </div>
                  </div>
                  <button className="text-blue-500 text-sm font-semibold uppercase tracking-wider px-3 py-1 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">
                    Change
                  </button>
                </div>
              </div>

              {/* 2. Delivery Address Section (Active) */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200">
                <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                  <div className="text-sm font-semibold uppercase tracking-wider">
                    <span className="w-5 h-5 bg-white text-blue-600 rounded-full inline-flex items-center justify-center mr-2 font-bold">
                      2
                    </span>
                    DELIVERY ADDRESS
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Address Card 1 (Selected) */}
                  <div className="flex items-start space-x-3 pb-4 border-b border-gray-100">
                    <input
                      type="radio"
                      name="delivery-address"
                      id="address1"
                      checked={deliveryAddresses[0].isSelected}
                      className="mt-1.5 accent-blue-600"
                      readOnly
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <label
                            htmlFor="address1"
                            className="font-semibold text-base"
                          >
                            {deliveryAddresses[0].name}
                          </label>
                          <span className="ml-3 text-xs font-semibold bg-gray-200 text-gray-700 px-2 py-0.5 rounded uppercase tracking-wider">
                            {deliveryAddresses[0].type}
                          </span>
                          <span className="text-sm text-gray-500 ml-3">
                            {deliveryAddresses[0].phone}
                          </span>
                        </div>
                        <button className="text-blue-500 text-sm font-semibold uppercase tracking-wider hover:text-blue-700 transition-colors">
                          Edit
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        {deliveryAddresses[0].address}
                      </p>

                      <button className="mt-4 bg-orange-600 text-white font-semibold py-2 px-8 rounded-sm text-lg uppercase shadow-md hover:bg-orange-700 transition-colors">
                        Deliver Here
                      </button>
                    </div>
                  </div>

                  {/* Address Card 2 */}
                  <div className="flex items-start space-x-3 pb-4 border-b border-gray-100">
                    <input
                      type="radio"
                      name="delivery-address"
                      id="address2"
                      checked={deliveryAddresses[1].isSelected}
                      className="mt-1.5 accent-blue-600"
                      readOnly
                    />
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <label
                          htmlFor="address2"
                          className="font-semibold text-base"
                        >
                          {deliveryAddresses[1].name}
                        </label>
                        <span className="ml-3 text-xs font-semibold bg-gray-200 text-gray-700 px-2 py-0.5 rounded uppercase tracking-wider">
                          {deliveryAddresses[1].type}
                        </span>
                        <span className="text-sm text-gray-500 ml-3">
                          {deliveryAddresses[1].phone}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        {deliveryAddresses[1].address}
                      </p>
                    </div>
                  </div>

                  {/* Add New Address */}
                  <button className="flex items-center text-blue-500 font-semibold text-sm hover:text-blue-700 transition-colors">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                    Add a new address
                  </button>
                </div>
              </div>

              {/* 3. Order Summary Section (Disabled) */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  <span className="w-5 h-5 bg-gray-300 text-white rounded-full inline-flex items-center justify-center mr-2 font-bold">
                    3
                  </span>
                  ORDER SUMMARY
                </div>
              </div>
            </div>

            {/* Right Column: Price Details */}
            <div className="lg:w-4/12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-4">
                <h2 className="text-lg font-semibold border-b border-gray-200 pb-3 mb-4 uppercase tracking-wider">
                  Price Details
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>
                      Price (1 item) <span className="text-gray-400">(i)</span>
                    </span>
                    <span className="font-semibold">
                      ₹{priceDetails.itemPrice}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span className="font-semibold">
                      ₹{priceDetails.platformFee}
                    </span>
                  </div>
                  {/* Total Payable */}
                  <div className="flex justify-between border-t border-gray-200 pt-4 font-bold text-base">
                    <span>Total Payable</span>
                    <span>₹{priceDetails.totalPayable}</span>
                  </div>
                </div>

                {/* Savings Banner */}
                <div className="mt-4 text-green-600 font-semibold text-sm">
                  Your Total Savings on this order{" "}
                  <span className="text-base">
                    ₹{priceDetails.totalSavings}
                  </span>
                </div>

                {/* Safe & Secure Banner */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-start space-x-3 border border-gray-200">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.416A11.955 11.955 0 0112 2.944c-1.393 0-2.753.284-4.004.831C6.745 3.722 5.5 5.55 5.5 8v4c0 1.95 1.05 3.73 2.75 4.87l3 2c.5.33 1.17.33 1.67 0l3-2c1.7-1.14 2.75-2.92 2.75-4.87V8c0-2.45-1.245-4.278-2.746-5.225z"
                    ></path>
                  </svg>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Safe and Secure Payments. Easy returns. 100% Authentic
                    products.
                  </p>
                </div>

                {/* Terms and Policy */}
                <div className="mt-4 text-xs text-gray-500 leading-relaxed">
                  By continuing with the order, you confirm that you are above
                  18 years of age, and you agree to the Flipkart's
                  <a href="#" className="text-blue-500 hover:underline ml-1">
                    Terms of Use
                  </a>{" "}
                  and
                  <a href="#" className="text-blue-500 hover:underline ml-1">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mock Footer (as it was in the original image but slightly simplified) */}
          <div className="mt-12 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
            <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mb-2">
              <a href="#" className="hover:text-blue-500">
                Policies: Returns Policy
              </a>{" "}
              |
              <a href="#" className="hover:text-blue-500">
                Terms of use
              </a>{" "}
              |
              <a href="#" className="hover:text-blue-500">
                Security
              </a>{" "}
              |
              <a href="#" className="hover:text-blue-500">
                Privacy
              </a>
            </div>
            <div className="flex justify-center flex-wrap gap-x-4 gap-y-1">
              <span>&copy; 2007-2025 Flipkart.com</span>
              <span>
                Need help? Visit the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Help Center
                </a>{" "}
                or{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Contact Us
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
