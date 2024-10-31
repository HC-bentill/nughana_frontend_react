import React from "react";
import { dashboardFeaturedBusiness } from "../../assets/core/data";
import Button from "../../components/button/_component";
import FeaturedCard from "../../components/featured_communities_card/_component";

function FeaturedBusiness() {
  return (
    <>
      <div className="mt-14">
        <div className="flex justify-between">
          <h3 className="font-semibold">Featured Business</h3>
          <div className="flex">
            <Button classNames="bg-black mr-3" name={"Find business"} />
            <Button classNames="bg-black" name={"Create a business"} />
          </div>
        </div>

        <div className="flex max-w-full gap-4 mt-2 overflow-x-auto">
          {dashboardFeaturedBusiness?.map((df, i) => (
            <div key={i} className="flex-shrink-0" style={{ width: "20%" }}>
              <FeaturedCard
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

export default FeaturedBusiness;
