import { apiAxios } from '../utils';

export const CreateAnEvent = async (data) => {
   let url = `wp/v2/events`;
   return await apiAxios().post(url, data);
};

export const GetEvents = async () => {
   let url = `wp/v2/events?acf_format=standard&_fields=id,title,acf`;

   return await apiAxios().get(url);
};

export const GetEvent = async (id) => {
   let url = `wp/v2/events/${id}?acf_format=standard&_fields=id,title,acf`;

   return await apiAxios().get(url);
};

export const GetEventsCategories = async (p) => await apiAxios().get(`wp/v2/events-categories`);
