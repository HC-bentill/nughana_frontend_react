import React from "react";
import ready from "../../assets/images/ready.png";
import { countryCode } from "../../assets/core/data";
import Select from "react-select";
import Button from "../../components/button/_component";

function ReadyToAssist() {
  const [selectCode, setSelectedCode] = React.useState(null);

  const handleCountryCodeChange = (option) => {
    setSelectedCode(option);
  };
  const handleSubmit = () => {};

  const handleMenuOpen = () => {};

  return (
    <>
      <section className="bg-white">
        <h3 className="flex justify-center mb-3 text-4xl mt-14">
          We are always ready to assist
        </h3>
        <p className="flex justify-center mb-8">
          Do you have a concern you need addressed? Reach out directly to us.
        </p>
        <div className="flex justify-center items-cente">
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
            <div className="flex items-center">
              <Select
                className="w-full"
                defaultValue={selectCode}
                onChange={handleCountryCodeChange}
                options={countryCode}
                onMenuOpen={handleMenuOpen}
                placeholder="+233"
              />
              <input
                required
                type="number"
                name="number"
                className="my-3 block w-full mr-2 p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-0"
              />
            </div>
            <textarea
              rows={12}
              name="message"
              className="my-3 block w-full mr-2 p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-0"
            />
            <Button bgColor="bg-black" name="Send message" />
          </form>
        </div>
      </section>
    </>
  );
}

export default ReadyToAssist;
