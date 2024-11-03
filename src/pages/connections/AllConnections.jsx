import React from "react";
import { connectionTrayItems } from "../../assets/core/data";
import ConnectionTray from "../../components/connection_tray/_component";

function AllConnections() {
  return (
    <div className="">
      <p className="text-sm font-semibold">Explore connections</p>

      {connectionTrayItems.map((ct, i) => (
        <div key={i}>
          <h3 className="text-[#424242] my-8 ml-6">{ct.section}</h3>
          {ct.tray.map((tray, j) => (
            <ConnectionTray
              key={j}
              profileImg={tray.img}
              name={tray.name}
              username={tray.username}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AllConnections;
