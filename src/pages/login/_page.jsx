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
import { useForm } from "react-hook-form";
import { UserLogin } from "../../api/auth.service";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLogin, setUserInformation } from "../../redux/user/userSlice";
import { storeItem } from "../../api/storage.service";
import { useNavigate } from "react-router-dom";
import HtmlRenderer from "../../components/html_renderer/HtmlRendrer";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    UserLogin(data)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          storeItem("u_token", res.data.token);
          dispatch(setLogin(true));
          dispatch(setUserInformation(res.data));
          navigate("/");
        } else {
          setLoading(false);
          toast.error(
            <p className="text-[12px]">
              {res?.data?.message ?? "Unexpected error occurred"}
            </p>
          );
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          <p className="text-[12px]">
            {<HtmlRenderer htmlContent={err.response?.data?.message} /> ??
              "An error occured. Please try again !"}
          </p>
        );
      });
  };

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div
        className="relative z-10 flex h-screen md:grid place-items-center"
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
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h3 className="text-[24px] font-500">Let's connect you</h3>
                <p className="text-[12px] font-light">Sign into your account</p>
              </div>
              <div className="w-full mt-5">
                <label className="text-[11px]">Email/Username</label>
                <div className="w-full flex mt-[1px] px-[9px] py-[12px] rounded-[6px] border-white border-[0.5px]">
                  <input
                    placeholder="Email/Username"
                    className=" outline-none block w-full text-[11px] bg-transparent rounded-[6px]"
                    {...register("username", { required: true })}
                  />
                </div>
                {errors.username && (
                  <span className="text-red-500 text-[11px]">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-3">
                <label className="text-[11px]">Password</label>
                <div className="w-full flex mt-[1px] rounded-[6px] border-white border-[0.5px]">
                  <div className="flex-grow">
                    <input
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      className="my-3 w-full px-2.5 text-[11px] rounded-[6px] outline-0 bg-transparent"
                      {...register("password", { required: true })}
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
                {errors.password && (
                  <span className="text-red-500 text-[11px]">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between mt-6">
                <Button
                  classNames="bg-[#00000000] border-[1px] w-1/2 !py-[7px] mr-4 !text-[13px]"
                  name="Sign in"
                  type="submit"
                  isLoading={loading}
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
