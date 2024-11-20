import { apiAxios } from '../utils';

export const getBusinessCategories = async (p) => await apiAxios().get(`/wp/v2/business-directory-categories`);

export const getBusinessDirectories = async () => await apiAxios().get(`/wp/v2/business-directories?acf_format=standard&_fields=id, title,acf`);

export const getBusinessDirectory = async (p) => await apiAxios().get(`/wp/v2/business-directories/${p}?acf_format=standard&_fields=id,title,acf,date`);

export const GetBusinessDirectoryCategories = async (p) => await apiAxios().get(`/wp/v2/business-directory-categories/${p}`);

export const GetBusinessDirectoriesByCategoryById = async (p) => {
   if (p === 0) {
      return await apiAxios().get(`/wp/v2/business-directories?acf_format=standard&_fields=id,title,acf,date`);
   } else {
      return await apiAxios().get(`/wp/v2/business-directories?business-directory-categories=${p}&acf_format=standard&_fields=id,title,acf,date`);
   }
};

export const CreateBusinessDirectory = async (p) => await apiAxios(p).post(`/wp/v2/business-directories`, p);
