import React from "react";
import Button from "../../components/button/_component";
import FeaturedCard from "../../components/featured_communities_card/_component";
import { dashboardFeaturedCommunity } from "../../assets/core/data";
import { GetCommunities } from "../../api/communities.service";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader/_component";

function AllCommunities() {
  const navigate = useNavigate();
  const communities = useQuery({
    retry: (count, err) => count < 3,
    // staleTime: Infinity,
    queryKey: ["communities"],
    queryFn: () => GetCommunities().then((res) => res),
    // onSuccess: (data) => onProductFetchSuccess(data),
  });

  let allCommunities = communities && communities.data && communities.data.data;

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-2 max-sm:grid-cols-1">
        {communities?.isLoading || communities?.isFetching ? (
          <div className="flex justify-center items-center z-[99]">
            <Loader />
          </div>
        ) : (
          <>
            {allCommunities?.map((ac, i) => (
              <div key={i} className="flex items-center justify-center">
                <FeaturedCard
                  img={ac.cover_url}
                  // footerImgs={ac.footerImgs}
                  footerIconsWith={"w-[24px]"}
                  header={ac.name}
                  desc={ac.description.raw}
                  footerDesc={"700+ members"}
                  footerActionLink={ac.link}
                  footerAction={
                    <Button
                      classNames="-mt-7 !px-4 !py-1 text-xs bg-black"
                      name="Join"
                    />
                  }
                />
              </div>
            ))}
          </>
        )}

        {/* {dashboardFeaturedCommunity?.map((df, i) => (
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
                  onClick={navigate(df.link)}
                  classNames="-mt-7 !px-4 !py-1 text-xs bg-black"
                  name="Join"
                />
              }
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default AllCommunities;
