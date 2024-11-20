import React from "react";
import FeaturedAdCard from "../../components/featured_ad_card/_component";
import { dashboardFeaturedAd } from "../../assets/core/data";
import call from "../../assets/icons/call.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import mail from "../../assets/icons/mail.png";
import featuredAdd from "../../assets/images/featured-ad.png";

function MarketCategoryAds({ads, category}) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
        {ads?.map((df, i) => (
            <FeaturedAdCard
              img={df?.acf?.ad_image}
              footerIconsWith="w-[20px]"
              header={df?.acf?.ad_name}
              desc={df?.acf?.description}
              otherClassNames="w-full"
              price={df?.acf?.ad_pricing}
              category={category}
              id={df?.id}
              createdAt={df?.date}
              location={df?.acf?.location}
            />
        ))}
      </div>
    </>
  );
}

export default MarketCategoryAds;
