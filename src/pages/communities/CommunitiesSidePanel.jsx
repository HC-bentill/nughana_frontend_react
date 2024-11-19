import React from "react";
import { GetCommunities } from "../../api/communities.service";
import { useQuery } from "react-query";

function CommunitiesSidePanel() {
  const communities = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ["communities"],
    queryFn: () => GetCommunities().then((res) => res),
  });

  let allCommunities = communities && communities.data && communities.data.data;

  return (
    <div>
      {" "}
      {allCommunities?.map((ac, i) => (
        <div key={i} className="flex items-center">
          <img
            className="w-[32px] rounded-full h-[32px] mr-3 my-3"
            src={ac.avatar_urls.thumb}
            alt="image"
          />
          <p className="text-[12px] font-normal">{ac.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CommunitiesSidePanel;
