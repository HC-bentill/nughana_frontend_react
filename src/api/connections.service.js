import { apiAxios, extractUsername } from "../utils";

export const GetConnections = async (scope) =>
   await apiAxios().get(
     `buddyboss/v1/members?scope=${scope}`
   );
 