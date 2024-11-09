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

        <div className="flex gap-2 mt-2 overflow-x-scroll hide-scrollbar">
          {dashboardFeaturedEvents?.map((df, i) => (
            <div key={i} className="flex-shrink-0">
              <FeaturedEventCard
                otherClassNames={"w-[240px]"}
                img={df.img}
                footerImgs={df.footerImgs}
                footerIconsWith={"w-[24px]"}
                header={df.name}
                desc={df.desc}
                dashboardfooterDesc={"700+ registered"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedEvents;
