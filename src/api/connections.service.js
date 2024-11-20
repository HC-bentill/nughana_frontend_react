import { apiAxios, extractUsername } from '../utils';

export const GetConnections = async (scope, search) => {
   let url = `buddyboss/v1/members?scope=${scope}`;

   if (search) {
      url += `&search=${encodeURIComponent(search)}`;
   }
   return await apiAxios().get(url);
};

export const GetMemberDetails = async (id) => {
   let url = `buddyboss/v1/members/${id}`;
   return await apiAxios().get(url);
};

export const GetMembers = async (id) => {
   let url = `buddyboss/v1/members`;
   return await apiAxios().get(url);
};
