import { apiAxios } from '../utils';

export const GetUserProfile = async (id) => {
   let url = `buddyboss/v1/members/${id}`;

   return await apiAxios().get(url);
};
