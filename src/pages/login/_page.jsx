import React from "react";
import loginImg from "../..//assets/images/login.jpeg";
import Navbar from "../../components/navbar/_component";
import eye from "../../assets/images/svgs/close.svg";
import google from "../../assets/icons/google.png";
import X from "../../assets/icons/X.png";
import apple from "../../assets/icons/apple.png";
import facebook from "../../assets/icons/facebook.png";
import Button from "../../components/button/_component";
import Footer from "../homepage/footer";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleSubmit = () => {};

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div
        className="relative h-screen z-10 flex md:grid place-items-center"
        style={{
          backgroundImage: "url(" + loginImg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="relative !z-30 mt-14 w-full">
          <div className="md:m-auto border-noneborder-[1px] mx-5 px-[55px] py-[42px]  md:w-[420px] rounded-[20px] text-white backdrop-blur-md bg-[#9e9d9d21] shadow-[0px_0px_9px_0.1px_#555252;]">
            <form className="w-full" onSubmit={handleSubmit}>
              <div>
                <h3 className="text-[24px] font-500">Let's connect you</h3>
                <p className="text-[12px] font-light">Sign into your account</p>
              </div>
              <div className="w-full mt-5">
                <label className="text-[11px]">Email</label>
                <div className="w-full flex mt-[1px] px-[9px] py-[12px] rounded-[6px] border-white border-[0.5px]">
                  <input
                    required
                    placeholder="Email"
                    name="email"
                    className=" outline-none block w-full text-[11px] bg-transparent rounded-[6px]"
                  />
                </div>
              </div>
              <div className="mt-3">
                <label className="text-[11px]">Password</label>
                <div className="w-full flex my-3 mt-[1px] rounded-[6px] border-white border-[0.5px]">
                  <div className="flex-grow">
                    <input
                      required
                      placeholder="Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="my-3 w-full px-2.5 text-[11px] rounded-[6px] outline-0 bg-transparent"
                    />
                  </div>
                  <div
                    className="flex border-l-[0.5px] backdrop-blur-2xl  px-3 border-white items-center justify-center flex-shrink-0 cursor-pointer gap-1"
                    onClick={passwordToggle}
                  >
                    <img src={eye} alt="eye" className="w-5 filter invert" />
                    <small className="text-[9px]">
                      {showPassword ? "hide" : "show"}
                    </small>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <Button
                  classNames="bg-[#00000000] border-[1px] w-1/2 !py-[7px] mr-4 !text-[13px]"
                  name="Sign in"
                />
                <h3 className="cursor-pointer text-[13px]">Forgot password</h3>
              </div>
              <div className="mt-12">
                <hr className="border-t-[0.1px] border-[#E7E7E7]" />
                <div className="flex justify-center -mt-3">
                  <small className="p-1 text-[9px] bg-[#251D1C] rounded-xl">
                    Or sign in with
                  </small>
                </div>
              </div>
              <div className="flex justify-between mt-7">
                <img
                  className="w-[49px] h-[49px] p-[14px] bg-white rounded-full"
                  src={google}
                  alt=""
                />
                <img
                  className="w-[49px] h-[49px] p-[14px] bg-white rounded-full"
                  src={X}
                  alt=""
                />
                <img
                  className="w-[49px] h-[49px] p-[14px] bg-white rounded-full"
                  src={apple}
                  alt=""
                />
                <img
                  className="w-[49px] h-[49px] p-[14px] bg-white rounded-full"
                  src={facebook}
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
        <div class="absolute inset-0 bg-black bg-opacity-70 z-20"></div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
