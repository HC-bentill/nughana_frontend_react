import React from "react";
import { messages } from "../../assets/core/data";
import MessagesCard from "../../components/messages_card/_component";
import kite from "../../assets/images/kite.png";

function Messages() {
  return (
    <div>
      <div className="p-7 bg-white -mt-[18px] rounded-[12px]">
        <h3 className="font-semibold text-[17px] mt-4 mb-4">Messages</h3>
        {messages.map((msg, i) => (
          <MessagesCard
            key={i}
            msg={msg.message}
            // otherClassNames={msg.otherClassNames}
            name={msg.name}
            noOfMsg={"5"}
            img={msg.img}
          />
        ))}
      </div>
      <div className="w-[361px] h-[150px] rounded-[10px] mt-3 flex items-center justify-center bg-black">
        <img src={kite} className="w-[64px] h-[64px] mr-3" alt="" />
        <h3 className="text-[14px] text-white">Events AD</h3>
      </div>
    </div>
  );
}

export default Messages;
