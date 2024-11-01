import React from "react";
import { dashboardFeaturedAd } from "../../assets/core/data";
import Button from "../../components/button/_component";
import FeaturedAdCard from "../../components/featured_ad_card/_component";

function FeaturedAd() {
  return (
    <>
      <div className="mt-14">
        <div className="flex justify-between">
          <h3 className="font-semibold">Featured ads</h3>
          <div className="flex">
            <Button
              classNames="bg-black !px-5 !py-2 mr-3 text-xs"
              name={"Find business"}
            />
            <Button
              classNames="bg-black !px-5 !py-2 text-xs"
              name={"Create a business"}
            />
          </div>
        </div>

        <div className="flex max-w-full gap-4 mt-2 overflow-x-auto hide-scrollbar">
          {dashboardFeaturedAd?.map((df, i) => (
            <div key={i} className="flex-shrink-0" style={{ width: "21%" }}>
              <FeaturedAdCard
                footerDesc=" "
                img={df.img}
                footerIconsWith="w-[20px]"
                footerImgs={df.footerImgs}
                header={df.name}
                desc={df.desc}
                footerAction={
                  <a className="text-sm text-blue-500 underline" href="#">
                    View in maps
                  </a>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedAd;
