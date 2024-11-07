import React from "react";
import FeaturedEventCard from "../../components/featured_evernts_card/_component";
import { dashboardFeaturedEvents } from "../../assets/core/data";
import { useNavigate } from "react-router-dom";

function AllEvents() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/event-details")}
      className="grid grid-cols-3 gap-3 mt-2 cursor-pointer"
    >
      {dashboardFeaturedEvents?.map((df, i) => (
        <FeaturedEventCard
          otherClassNames={"w-[312px]"}
          key={i}
          img={df.img}
          footerImgs={df.footerImgs}
          footerIconsWith={"w-[24px] mr-2"}
          header={df.name}
          desc={df.desc}
          eventfooterDesc={"700+ members"}
        />
      ))}
    </div>
  );
}

export default AllEvents;
