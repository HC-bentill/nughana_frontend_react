import React from "react";
import ConnectionTray from "../../components/connection_tray/_component";
import { connectionTrayItems } from "../../assets/core/data";
import { GetConnections } from "../../api/connections.service";
import { useQuery } from "react-query";
import { Loader } from "../../components/loader/_component.jsx";

function YourConnections({searchWord}) {
  
  const connections = useQuery({
    retry: (count, err) => count < 3,
    staleTime: Infinity,
    queryKey: ["connections"],
    refetchOnWindowFocus: false,
    queryFn: () => GetConnections("personal", searchWord).then((res) => res?.data),
    // onSuccess: (data) => onProductFetchSuccess(data),
  });

  const groupByFirstLetter = (data) => {
    return data?.reduce((acc, ct) => {
      // Safely get the first and last names, with fallback values if they're undefined
      const firstName = `${
        ct?.xprofile?.groups["1"]?.fields["1"]?.value?.raw || ""
      } ${
        ct?.xprofile?.groups["1"]?.fields["2"]?.value?.raw || ""
      }`.toLowerCase();
      const firstLetter = firstName[0]?.toUpperCase() || "Other"; // Fallback to 'Other' if the name doesn't start with a letter
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(ct);
      return acc;
    }, {});
  };

  const groupedData = groupByFirstLetter(connections?.data);

  return (
    <>
      <div className="">
        <p className="text-[16px] font-semibold md:w-auto w-[94%] mx-auto my-7">People you are connected to</p>

        {connections?.isLoading ? (
          <div className="inset-0 flex justify-center bg-opacity-70 items-center z-[99] min-h-[50vh]">
            <Loader />
          </div>
        ) : (
          <div>
            {Object.keys(groupedData)
              .sort()
              .map((letter) => (
                <div key={letter}>
                  <h3 className="text-[#424242] my-5 ml-4">{letter}</h3>
                  {groupedData[letter].map((ct, i) => (
                    <div key={i}>
                      <ConnectionTray
                        profileImg={ct?.avatar_urls?.thumb}
                        name={`${
                          ct?.xprofile?.groups["1"]?.fields["1"]?.value?.raw ||
                          ""
                        } ${
                          ct?.xprofile?.groups["1"]?.fields["2"]?.value?.raw ||
                          ""
                        }`}
                        username={
                          ct?.xprofile?.groups["1"]?.fields["3"]?.value?.raw ||
                          "Unknown Username"
                        }
                      />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default YourConnections;
