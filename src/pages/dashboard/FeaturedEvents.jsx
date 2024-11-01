import React from "react";
import { dashboardFeaturedEvents } from "../../assets/core/data";
import Button from "../../components/button/_component";
import FeaturedEventCard from "../../components/featured_evernts_card/_component";

function FeaturedEvents() {
  return (
    <>
      <div className="mt-14">
        <div className="flex justify-between">
          <h3 className="font-semibold">Featured events</h3>
          <div className="flex">
            <Button
              classNames="bg-black !px-5 !py-2 text-xs mr-3"
              name={"Find events"}
            />
            <Button
              classNames="bg-black !text-xs !px-5 !py-2"
              name={"Find events"}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-2 overflow-x-scroll hide-scrollbar">
          {dashboardFeaturedEvents?.map((df, i) => (
            <div key={i} className="flex-shrink-0 w-[25%]">
              <FeaturedEventCard
                img={df.img}
                footerImgs={df.footerImgs}
                footerIconsWith={"w-[24px]"}
                header={df.name}
                desc={df.desc}
                footerDesc={"700+ members"}
                footerAction={
                  <Button
                    classNames="-mt-7 !px-4 !py-1 text-xs bg-black"
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

export default FeaturedEvents;
