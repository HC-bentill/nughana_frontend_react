import React from "react";
import loginImg from "../..//assets/images/login.jpeg";
import Navbar from "../../components/navbar/_component";
import eye from "../../assets/images/svgs/close.svg";
import Button from "../../components/button/_component";

function Login() {
  return (
    <>
      <div className="relative">
        <div className="">
          <img
            className="object-fill w-full h-screen brightness-50"
            src={loginImg}
            alt=""
          />
        </div>
        <div className="absolute top-0 w-full ">
          <Navbar />
          <div className="flex items-center justify-center w-1/3 p-10 m-auto text-white text -white mt-60 backdrop-blur-lg">
            <div>
              <div>
                <h3 className="text-3xl">Let's connect you</h3>
                <small>Sign into your account</small>
              </div>
              <div className="mt-8">
                <label>Email</label>
                <input
                  required
                  placeholder="Email"
                  name="email"
                  className="my-3 border-[1px] border-gray-300 bg-[#00000000] block w-full mr-2 p-2.5 text-sm text-gray-900 backdrop-blur-lg rounded-lg outline-0"
                />
              </div>
              <div className="mt-8">
                <label>Password</label>
                <div className="flex border-gray-300 bg-[#00000000] my-3 rounded-lg border-[1px]">
                  <div>
                    <input
                      required
                      placeholder="Password"
                      name="password"
                      type="password"
                      className="my-3 block bg-[#00000000]  w-full mr-2 px-2.5 text-sm text-gray-900 backdrop-blur-lg rounded-lg outline-0"
                    />
                  </div>
                  <div class="w-px h-1/2 bg-gray-300 mx-4"></div>

                  <div className="flex items-center">
                    <img src={eye} alt="" className="w-6 filter invert" />

                    <small>show</small>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-8">
                <Button
                  bgColor="bg-[#00000000] border-[1px] w-1/2 mr-4"
                  name="Sign in"
                />
                <h3>Forgot password</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
