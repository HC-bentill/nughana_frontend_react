import React from "react";
import Button from "../../components/button/_component";
import { dashboardConnectCardFooter } from "../../assets/core/data";
import ConnectCard from "../../components/connect_card/_component";
import FeaturedCommunities from "./FeaturedCommunities";
import FeaturedBusiness from "./FeaturedBusiness";
import FeaturedEvents from "./FeaturedEvents";
import FeaturedAd from "./FeaturedAd";
import { GetUserDetails } from "../../api/auth.service";
import { useQuery } from "react-query";
import { storeItem } from "../../api/storage.service";

export default function Dashboard() {

  const GetUserDetailsQuery = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ["Mpc"],
    queryFn: () => GetUserDetails().then((res) => res?.data),
    onSuccess: (data) => {
      storeItem("u_id", data?.id);
    }
  });


  return (
    <>
      <div className="md:ml-8 mx-auto md:px-0 px-3">
        <div className="flex md:justify-start justify-center items-center">
          <Button
            classNames="bg-black md:w-auto w-full !text-[11px] !px-5 !py-2 md:!py-2 mr-3 text-xs"
            name={"Post an Ad"}
          />
          <Button
            classNames="bg-black md:w-auto w-full !text-[11px]  !px-5 !py-2 md:!py-2 text-xs"
            name={"Create a community"}
          />
        </div>
        <div className="flex items-center justify-between mt-8 mb-2 mr-2">
          <h3 className="font-semibold">Find people to connect with</h3>
          <Button
            classNames="bg-black text-xs !px-5 !py-2 md:block hidden"
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
        <div className="flex justify-center">
          <Button
            classNames="bg-black w-full mt-5 text-xs !px-5 !py-2 md:hidden block"
            name={"Find people"}
          />
        </div>

        <FeaturedCommunities />
        <FeaturedBusiness />
        <FeaturedEvents />
        <FeaturedAd />
      </div>
    </>
  );
}
