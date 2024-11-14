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
          <p className="mr-4 text-[15px] text-[#AF7E00] md:hidden block">
            View More
          </p>
          <div className="md:flex hidden mr-2">
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

        <div className="flex max-w-full gap-2 mt-2 overflow-x-auto hide-scrollbar">
          {dashboardFeaturedBusiness?.map((df, i) => (
            <div key={i} className="flex-shrink-0">
              <FeaturedCard
                footerDesc=" "
                img={df.img}
                footerIconsWith="w-[15px]"
                footerImgsOverlay={false}
                footerImgs={df.footerImgs}
                header={df.name}
                desc={df.desc}
                footerAction={
                  <a
                    className="text-[8px] text-blue-400 underline font-semibold"
                    href="#"
                  >
                    View in maps
                  </a>
                }
              />
            </div>
          ))}
        </div>
        <div className="md:hidden flex justify-center mt-7 ">
          <Button
            classNames="bg-black w-full !px-5 !py-2 text-xs mr-3"
            name={"Find business"}
          />
          <Button
            classNames="bg-black w-full  !text-xs !px-5 !py-2"
            name={"List a Business"}
          />
        </div>
      </div>
    </>
  );
}

export default FeaturedBusiness;
