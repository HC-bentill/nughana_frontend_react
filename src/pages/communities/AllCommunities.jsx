import React from "react";
import Button from "../../components/button/_component";
import FeaturedCard from "../../components/featured_communities_card/_component";
import { GetCommunities } from "../../api/communities.service";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

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
        <>
          {allCommunities?.map((ac, i) => (
            <div
              onClick={() => navigate(`/community-details/${ac.id}`)}
              key={i}
              className="flex items-center justify-center cursor-pointer"
            >
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
      </div>
    </div>
  );
}

export default AllCommunities;
