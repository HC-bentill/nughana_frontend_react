import React from "react";
import ready from "../../assets/images/ready.png";
import { countryCode } from "../../assets/core/data";
import Select from "react-select";
import Button from "../../components/button/_component";
import Underline from "../../components/underline/_component";

function ReadyToAssist() {
  const [selectCode, setSelectedCode] = React.useState(null);

  const handleCountryCodeChange = (option) => {
    setSelectedCode(option);
  };
  const handleSubmit = () => {};

  return (
    <>
      <section className="bg-white container md:px-0 px-7">
        <div className="mt-16">
          <h3 className="mb-1 text-[30px] md:text-[43px] font-[500] text-center ">
            We are always ready to assist
          </h3>
          <Underline className="flex justify-center m-auto w-44 mb-7" />
        </div>
        <p className="flex justify-center mb-8 md:text-left text-center text-[13px]">
          Do you have a concern you need addressed? Reach out directly to us.
        </p>
        <div className="md:flex justify-center items-cente">
          <div>
            <img src={ready} className="mr-8" alt="" />
          </div>
          <form className="md:mt-0 mt-10" onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                required
                placeholder="Name"
                name="name"
                className="my-3 block w-full p-2.5 mr-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-0"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                required
                placeholder="Email"
                name="email"
                className="my-3 block w-full mr-2 p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-0"
              />
            </div>
            <label>Phone number</label>
            <div className="flex items-center">
              <Select
                className="w-1/3 mr-3"
                defaultValue={selectCode}
                onChange={handleCountryCodeChange}
                options={countryCode}
                placeholder="+233"
              />
              <input
                required
                type="number"
                name="number"
                className="my-3 block w-full mr-2 p-2.5 spin-button-none text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-0"
              />
            </div>
            <label>Message</label>
            <textarea
              rows={12}
              name="message"
              placeholder="Message"
              className="my-3 block w-full mr-2 p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-0"
            />
            <Button classNames="bg-black" name="Send message" />
          </form>
        </div>
      </section>
    </>
  );
}

export default ReadyToAssist;
