import React from "react";
import { allMarketPlace } from "../../assets/core/data";
import MarketPlaceCard from "../../components/marketplace_card/_component";
import { useNavigate } from "react-router-dom";

function AllMarketPlace() {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {allMarketPlace?.map((am, i) => (
          <MarketPlaceCard
            key={i}
            onClick={() => navigate(am.route)}
            img={am.img}
          />
        ))}
      </div>
    </>
  );
}

export default AllMarketPlace;
