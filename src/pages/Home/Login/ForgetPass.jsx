import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const ForgetPass = () => {
  const { forgetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (successMessage) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Check your email to reset the password",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }, [successMessage]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await forgetPassword(email);
      setSuccessMessage("Password reset email sent successfully.");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-Montserrat w-full">
      <div className="bg-[#e5e4e4] w-full text-center py-12 text-[#403030] flex justify-center items-center">
        <h1 className="text-4xl font-bold mt-10">Log In</h1>
      </div>
      <div className="flex md:bg-white bg-[#F3F3F3] items-center justify-center h-full py-8 rounded-lg">
        <div className=" flex flex-col w-full md:w-[768px] ">
          <div className="bg-[#F3F3F3]  py-[10%] px-[5%]  md:px-[15%]">
            <form onSubmit={handleResetPassword} className="">
              <div className="form-control mb-4 flex justify-center">
                <div className="absolute pl-2"></div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-[#E7E6E6] placeholder-[#444444] py-4 rounded-lg border outline-none pl-8 pr-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control  mt-8">
                <button
                  className="text-xl rounded-md font-semibold  py-4 bg-[#444444] text-white hover:bg-[#292929] "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Reset Password"}
                </button>
              </div>
            </form>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
