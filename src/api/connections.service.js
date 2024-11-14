import { apiAxios, extractUsername } from "../utils";

export const GetConnections = async (scope, search) => {
  let url = `buddyboss/v1/members?scope=${scope}`;

  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }
  return await apiAxios().get(url);
};
