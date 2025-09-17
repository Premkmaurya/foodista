import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import AuthContext from "./context/auth/AuthContext.jsx";
import NavContext from "./context/nav/NavContext.jsx";
import Stair from "./components/common/Stair.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <NavContext>
      <BrowserRouter>
        <Stair>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
          />
          <App />
        </Stair>
      </BrowserRouter>
    </NavContext>
  </AuthContext>
);
