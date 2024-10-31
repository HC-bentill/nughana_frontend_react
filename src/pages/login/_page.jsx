import React from "react";
import loginImg from "../..//assets/images/login.jpeg";
import Navbar from "../../components/navbar/_component";
import eye from "../../assets/images/svgs/close.svg";
import google from "../../assets/icons/google.png";
import X from "../../assets/icons/X.png";
import apple from "../../assets/icons/apple.png";
import facebook from "../../assets/icons/facebook.png";
import Button from "../../components/button/_component";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleSubmit = () => {};

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div
        className="relative h-screen brightness-50"
        style={{
          backgroundImage: "url(" + loginImg + ")",
          backgroundSize: "100%",
        }}
      ></div>
      <Navbar />
      <div className="absolute top-0 left-0 grid w-full h-full place-items-center">
        <div className="flex items-center justify-center w-1/4 m-auto border-noneborder-[1px] rounded-3xl text-white p-14 place-items-center text backdrop-blur-lg">
          <form className="w-full" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-3xl">Let's connect you</h3>
              <small>Sign into your account</small>
            </div>
            <div className="w-full mt-8">
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
              <div className="w-full flex border-gray-300 bg-[#00000000] my-3 rounded-lg border-[1px]">
                <div className="flex-grow">
                  <input
                    required
                    placeholder="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="my-3 block bg-[#00000000] w-full mr-2 px-2.5 text-sm text-gray-900 backdrop-blur-lg rounded-lg outline-0"
                  />
                </div>
                <div className="h-[2.7rem] border-l-[1px] border-white"></div>
                <div
                  className="flex items-center justify-center flex-shrink-0 cursor-pointer"
                  style={{ flexBasis: "100px" }}
                  onClick={passwordToggle}
                >
                  <img src={eye} alt="eye" className="w-6 filter invert" />
                  <small>{showPassword ? "hide" : "show"}</small>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-8">
              <Button
                classNames="bg-[#00000000] border-[1px] w-1/2 mr-4"
                name="Sign in"
              />
              <h3 className="cursor-pointer">Forgot password</h3>
            </div>
            <div className="mt-12">
              <hr className="border-t-2 border-[#E7E7E7]" />
              <div className="flex justify-center -mt-3">
                <small className="p-1 bg-black rounded-xl">
                  Or sign in with
                </small>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <img
                className="w-8 h-8 p-2 bg-white rounded-full"
                src={google}
                alt=""
              />
              <img
                className="w-8 h-8 p-2 bg-white rounded-full"
                src={X}
                alt=""
              />
              <img
                className="w-8 h-8 p-2 bg-white rounded-full"
                src={apple}
                alt=""
              />
              <img
                className="w-8 h-8 p-2 bg-white rounded-full"
                src={facebook}
                alt=""
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
