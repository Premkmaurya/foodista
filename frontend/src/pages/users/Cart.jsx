import React, { useState, useReducer, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};

const initialCart = [
  {
    id: 1,
    name: "Cartle Watch",
    price: 600,
    quantity: 1,
    image: "https://placehold.co/100x100/966FEE/FFFFFF?text=Cartle+Watch",
  },
  {
    id: 2,
    name: "Modern Chair",
    price: 500,
    quantity: 1,
    image: "https://placehold.co/100x100/A2D0C5/FFFFFF?text=Modern+Chair",
  },
  {
    id: 3,
    name: "Beats Headset",
    price: 200,
    quantity: 1,
    image: "https://placehold.co/100x100/7864D7/FFFFFF?text=Beats+Headset",
  },
  {
    id: 4,
    name: "Blue Shoes",
    price: 99,
    quantity: 1,
    image: "https://placehold.co/100x100/1E90FF/FFFFFF?text=Blue+Shoes",
  },
];

const CartItem = ({ item, dispatch }) => (
  <div className="relative flex items-center p-4 bg-gray-100 rounded-2xl shadow-sm mb-4">
    <div className="w-20 h-20 bg-white rounded-xl overflow-hidden mr-4 shadow-sm">
      <video
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <button
          onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
          className="text-red-500 transition-colors"
          aria-label="Delete item"
        >
          <MdOutlineDelete className="absolute right-0 top-3" />
        </button>
      </div>
      <p className="text-sm font-medium text-gray-600">
        ${item.price.toFixed(2)}
      </p>
    </div>
    <div className="flex items-center space-x-2 text-gray-600">
      <button
        onClick={() => dispatch({ type: "DECREMENT_QUANTITY", id: item.id })}
        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        aria-label="Decrease quantity"
      >
        <FiMinus />
      </button>
      <span className="font-semibold">{item.quantity}</span>
      <button
        onClick={() => dispatch({ type: "INCREMENT_QUANTITY", id: item.id })}
        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        aria-label="Increase quantity"
      >
        <FaPlus />
      </button>
    </div>
  </div>
);

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const calculatedSubtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, [cart]);

  return (
    <div className="flex flex-col h-screen w-full max-w-sm mx-auto bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <header className="relative z-3 w-full p-4 flex border-b-1 shadow-lg shadow-black/40 justify-center items-center">
        <h1 className="text-xl font-bold">Cart</h1>
      </header>

      {/* Cart Items */}
      <main className="relative z-1 flex-grow overflow-y-auto p-3">
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id} item={item} dispatch={dispatch} />
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10">
            Your cart is empty.
          </div>
        )}
      </main>

      {/* Footer and Checkout */}
      <footer className="w-full p-4 bg-white border-t border-gray-200">
        <div className="flex justify-between items-center mb-4 text-xl font-semibold">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full px-6 py-3 capatalize border-1 backdrop-blue-lg border-black/80 outline-none text-black/80 font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-[#357ae8] hover:shadow-xl transform hover:-translate-y-0.5"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="black"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Creating...</span>
              </div>
            ) : (
              "Checkout"
            )}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
