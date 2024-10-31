import React from "react";
import { dashboardFeaturedCommunity } from "../../assets/core/data";
import Button from "../../components/button/_component";
import FeaturedCard from "../../components/featured_communities_card/_component";

function FeaturedCommunities() {
  return (
    <>
      <div className="mt-14">
        <div className="flex justify-between">
          <h3 className="font-semibold">Featured Communities</h3>
          <div className="flex">
            <Button classNames="bg-black mr-3" name={"Find community"} />
            <Button classNames="bg-black" name={"Create a community"} />
          </div>
        </div>

        <div className="flex max-w-full gap-4 mt-2 overflow-x-auto">
          {dashboardFeaturedCommunity?.map((df, i) => (
            <div key={i} className="flex-shrink-0" style={{ width: "20%" }}>
              <FeaturedCard
                img={df.img}
                footerImgs={df.footerImgs}
                footerIconsWith={"w-[24px]"}
                header={df.name}
                desc={df.desc}
                footerDesc={"700+ members"}
                footerAction={
                  <Button classNames="-mt-7 text-sm bg-black" name="Join" />
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedCommunities;
