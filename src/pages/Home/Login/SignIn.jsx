import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useUserRoll from "../../../hooks/useUserRoll";

const SignIn = () => {
  const { signInUser, googleSignIn } = useAuth();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.toLowerCase();
    const password = form.password.value;

    setError("");

    try {
      const user1 = await signInUser(email, password);
      //   console.log(user1.user.email);

      const loggedUser = await useUserRoll(user1.user.email);
      console.log(loggedUser);

      if (loggedUser === "employee") {
        navigate("/employeeHome");
      } else if (loggedUser === "admin") {
        navigate("/adminHome");
      } else {
        navigate("/");
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully logged in",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="font-Montserrat w-full  ">
      {/* <Helmet>
                <title>JobsWorld | Login </title>
            </Helmet> */}
      <div className="bg-[#e5e4e4] text-center mt-14 md:mt-20 lg:mt-16 py-3 md:py-8 w-full text-[#403030] flex justify-center items-center">
        <h1 className="text-4xl font-bold">Sign In</h1>
      </div>
      <div className="flex md:bg-white bg-[#F3F3F3] items-center mt-10 mb-16 mx-6  justify-center rounded-lg">
        <div className=" flex flex-col w-full md:w-3/4 lg:w-[768px] ">
          <div className="bg-[#F3F3F3]  py-[15%] px-[5%]  md:px-[15%]">
            <form onSubmit={handleLogin} className="">
              <div className="form-control mb-4 flex justify-center">
                <div className="absolute pl-2"></div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-[#E7E6E6] placeholder-[#444444] py-4 rounded-lg border outline-none pl-5 pr-2"
                  required
                />
              </div>
              <div className="form-control  relative flex justify-center">
                <div className="absolute pl-2"></div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full bg-[#E7E6E6] placeholder-[#444444] py-4 rounded-lg border outline-none pl-5 pr-10 "
                  required
                />
                <span
                  className="absolute right-2 cursor-pointer mr-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
              <div>{error ? <p className="text-red-600">{error}</p> : ""}</div>

              <div className="form-control  mt-8">
                <button className="text-xl rounded-md font-semibold  py-4 bg-[#444444] text-white hover:bg-[#292929] ">
                  Sign In
                </button>
              </div>

              <div className="mt-7 text-center ">
                <p>
                  Do not have an account?{" "}
                  <Link className="font-semibold text-[#6486FD]" to="/register">
                    Register Now
                  </Link>
                </p>
                <p className="mt-1">
                  Are you Forgot the Password?{" "}
                  <Link
                    className="font-semibold text-[#6486FD]"
                    to="/forgetpassword"
                  >
                    Forgot Password
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
