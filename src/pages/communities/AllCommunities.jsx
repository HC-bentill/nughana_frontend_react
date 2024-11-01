import React from "react";
import Button from "../../components/button/_component";
import FeaturedCard from "../../components/featured_communities_card/_component";
import { dashboardFeaturedCommunity } from "../../assets/core/data";

function AllCommunities() {
  return (
    <div>
      <div className="flex w-[1080px] gap-4 mt-2 overflow-x-auto hide-scrollbar">
        {dashboardFeaturedCommunity?.map((df, i) => (
          <div key={i} className="flex-shrink-0" style={{ width: "24%" }}>
            <FeaturedCard
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
  );
}

export default AllCommunities;
