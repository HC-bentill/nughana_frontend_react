import React from "react";
import mic from "../../assets/icons/mic.png";
import send from "../../assets/icons/send.png";
import gallery from "../../assets/icons/gallery.png";
import addon from "../../assets/icons/addon.png";
import NuGhanaLogo from "../../assets/images/svgs/logo.svg?react";

function Chat() {
  const [messages, setMessages] = React.useState([
    {
      sender: "bot",
      text: "Tell us what you want to do and we will assist you!",
    },
  ]);
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="w-full mt-4 rounded-lg">
      <div className="flex rounded-t-[10px] md:p-8  bg-white h-80">
        <div className="flex p-5 w-full overflow-y-auto rounded-[15px] bg-[#F5F5F5]">
          <img
            className="w-[44px] mr-3 h-[45px]"
            src={NuGhanaLogo}
            alt="logo"
          />
          <div>
            <h3 className="font-medium text-[14px]">NuGhana</h3>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 flex flex-col my-2 rounded-lg ${
                  msg.sender === "bot"
                    ? "bg-white text-gray-800 flex justify-end"
                    : "bg-yellow-200 flex justify-end text-right text-yellow-900 "
                }`}
              >
                <p className="text-[13px] flex font-light">{msg.text}</p>
                <span className="block mt-2 text-[12px] text-right text-gray-500">
                  16:55
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center rounded-b-[10px] p-3 bg-white">
        <img className="w-[w-20px] mr-3 h-[w-20px]" src={addon} />
        <img className="w-[w-20px] mr-3 h-[w-20px]" src={gallery} />
        <img className="w-[w-20px] mr-3 h-[w-20px]" src={mic} alt="" />
        <input
          type="text"
          placeholder="Tell us what you want to do"
          className="flex-1 p-2 mx-2 text-[#404040] text-[13px] font-light border rounded-lg outline-none"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="text-xl text-yellow-600" onClick={handleSend}>
          <span role="img" aria-label="send">
            <img className="w-[21px]" src={send} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Chat;
