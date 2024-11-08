import React from "react";
import { dashboardFeaturedCommunity } from "../../assets/core/data";
import Button from "../../components/button/_component";
import FeaturedCard from "../../components/featured_communities_card/_component";

function FeaturedCommunities() {
  return (
    <>
      <div className="mt-14">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Featured Communities</h3>
          <div className="flex">
            <Button
              classNames="bg-black !px-5 !py-2 text-xs mr-3"
              name={"Find community"}
            />
            <Button
              classNames="bg-black  !text-xs !px-5 !py-2"
              name={"Create a community"}
            />
          </div>
        </div>

        <div className="flex max-w-full gap-2 mt-2 overflow-x-auto hide-scrollbar">
          {dashboardFeaturedCommunity?.map((df, i) => (
            <div key={i} className="flex-shrink-0">
              <FeaturedCard
                img={df.img}
                footerImgs={df.footerImgs}
                footerIconsWith={"w-[24px]"}
                footerImgsOverlay={true}
                header={df.name}
                desc={df.desc}
                footerDesc={"700+ members"}
                footerAction={
                  <Button
                    classNames="text-xs bg-black w-full  !py-[9px]"
                    name="Join"
                  />
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
