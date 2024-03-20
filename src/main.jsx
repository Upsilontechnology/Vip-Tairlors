import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="font-Montserrat">
          <RouterProvider router={router} />
          <ToastContainer />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
