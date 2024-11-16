import { apiAxios } from "../utils";

export const CreateACommunity = async (data) => {
  let url = `buddyboss/v1/groups?name=${data.name}&description=${data.description}&type=${data.type}`;
  return await apiAxios().post(url);
};

export const GetCommunities = async () => {
  let url = `buddyboss/v1/groups`;

  return await apiAxios().get(url);
};
