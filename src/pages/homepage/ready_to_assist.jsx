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
      <section className="bg-white">
        <div className="md:max-w-[1100px] mx-auto">
          <div className="mt-16">
            <h3 className="mb-1 text-[43px] font-[500] text-center ">
              We are always ready to assist
            </h3>
            <Underline className="flex justify-end m-auto w-44 mb-7" />
            <p className="flex justify-center mb-8 text-[14px] font-light">
              Do you have a concern you need addressed? Reach out directly to
              us.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img src={ready} className="mr-8" alt="" />
            </div>
            <form className="w-1/4" onSubmit={handleSubmit}>
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
              <Button bgColor="bg-black" name="Send message" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReadyToAssist;
