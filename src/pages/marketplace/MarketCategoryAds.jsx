import React from "react";
import FeaturedAdCard from "../../components/featured_ad_card/_component";
import { dashboardFeaturedAd } from "../../assets/core/data";

function MarketCategoryAds() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {dashboardFeaturedAd?.map((df, i) => (
          <div key={i} className="flex-shrink-0">
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
    </>
  );
}

export default MarketCategoryAds;
