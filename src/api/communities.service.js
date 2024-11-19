import { apiAxios } from '../utils';

export const CreateACommunity = async (data) => {
   let url = `buddyboss/v1/groups?name=${data.name}&description=${data.description}&type=${data.type}`;
   return await apiAxios().post(url);
};

export const GetCommunities = async () => {
   let url = `buddyboss/v1/groups`;

   return await apiAxios().get(url);
};

export const GetCommunity = async (id) => {
   let url = `buddyboss/v1/groups/${id}`;

   return await apiAxios().get(url);
};

export const GetCommunitiesCoverImage = async (id) => {
   let url = `buddyboss/v1/groups/${id}/cover`;

   return await apiAxios().get(url);
};
