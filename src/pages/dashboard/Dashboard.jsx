import React from "react";
import Button from "../../components/button/_component";
import { dashboardConnectCardFooter } from "../../assets/core/data";
import ConnectCard from "../../components/connect_card/_component";
import FeaturedCommunities from "./FeaturedCommunities";
import FeaturedBusiness from "./FeaturedBusiness";

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <Button classNames="bg-black mr-3" name={"Post an Ad"} />
        <Button classNames="bg-black" name={"Create a community"} />
      </div>
      <div className="flex justify-between mt-8 mb-3 mr-2">
        <h3 className="font-semibold">Find people to connect with</h3>
        <Button classNames="bg-black" name={"Find people"} />
      </div>
      <div className="flex max-w-full gap-4 overflow-x-auto">
        {dashboardConnectCardFooter.map((dc, i) => (
          <div key={i} className="flex-shrink-0" style={{ width: "20%" }}>
            <ConnectCard img={dc.img} name={dc.name} />
          </div>
        ))}
      </div>

      <FeaturedCommunities />
      <FeaturedBusiness />
    </>
  );
}
