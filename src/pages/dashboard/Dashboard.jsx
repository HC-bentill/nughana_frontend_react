import React from "react";
import Button from "../../components/button/_component";
import { dashboardConnectCardFooter } from "../../assets/core/data";
import ConnectCard from "../../components/connect_card/_component";
import FeaturedCommunities from "./FeaturedCommunities";
import FeaturedBusiness from "./FeaturedBusiness";
import FeaturedEvents from "./FeaturedEvents";
import FeaturedAd from "./FeaturedAd";

export default function Dashboard() {
  return (
    <>
      <div className="ml-8">
        <div className="flex">
          <Button
            classNames="bg-black !text-[11px] !px-5 !py-2 mr-3 text-xs"
            name={"Post an Ad"}
          />
          <Button
            classNames="bg-black !text-[11px]  !px-5 !py-2 text-xs"
            name={"Create a community"}
          />
        </div>
        <div className="flex items-center justify-between mt-8 mb-2 mr-2">
          <h3 className="font-semibold">Find people to connect with</h3>
          <Button
            classNames="bg-black text-xs !px-5 !py-2"
            name={"Find people"}
          />
        </div>
        <div className=" flex max-w-full gap-2 overflow-x-auto hide-scrollbar">
          {dashboardConnectCardFooter.map((dc, i) => (
            <div key={i} className="flex-shrink-0">
              <ConnectCard img={dc.img} name={dc.name} />
            </div>
          ))}
        </div>

        <FeaturedCommunities />
        <FeaturedBusiness />
        <FeaturedEvents />
        <FeaturedAd />
      </div>
    </>
  );
}
