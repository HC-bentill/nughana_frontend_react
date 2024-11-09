import React from "react";
import { dashboardBusiness } from "../../assets/core/data";
import { useNavigate } from "react-router-dom";
import BusinessCard from "../../components/business_card/_component";

function AllBusinesses() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/business-details")}
      className="grid grid-cols-3 gap-3 mt-2 cursor-pointer"
    >
      {dashboardBusiness?.map((df, i) => (
        <BusinessCard
          otherClassNames={"w-[312px]"}
          key={i}
          img={df.img}
          footerImgs={df.footerImgs}
          footerIconsWith={"w-[18px] mr-2"}
          header={df.name}
          desc={df.desc}
          eventfooterDesc={"View in google maps"}
        />
      ))}
    </div>
  );
}

export default AllBusinesses;
