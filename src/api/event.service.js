import { apiAxios } from "../utils";

export const CreateEvent = async (data) => {
  let url = `buddyboss/v1/groups?name=${data.name}&description=${data.description}&type=${data.type}`;
  return await apiAxios().post(url);
};

export const GetEvents = async () => {
  let url = `wp/v2/events?acf_format=standard&_fields=id,title,acf`;

  return await apiAxios().get(url);
};

export const GetEvent = async (id) => {
  let url = `wp/v2/events/${id}`;

  return await apiAxios().get(url);
};
