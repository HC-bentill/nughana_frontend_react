import { apiAxios } from "../utils";

export const GetAds = async () =>
  await apiAxios().get(
    `/wp/v2/marketplace-ads?acf_format=standard&_fields=id,title,acf,date`
  );

export const GetAd = async (p) =>
  await apiAxios().get(
    `/wp/v2/marketplace-ads/${p}?acf_format=standard&_fields=id,title,acf,date`
  );

export const GetMarketplaceCategories = async (p) =>
  await apiAxios().get(`/wp/v2/marketplace-ads-categories`);

export const GetMarketplaceCategory = async (p) =>
  await apiAxios().get(`/wp/v2/marketplace-ads-categories/${p}`);

export const GetAdsByCategoryById = async (p) =>
  await apiAxios().get(
    `/wp/v2/marketplace-ads?marketplace-ads-categories=${p}&acf_format=standard&_fields=id,title,acf,date`
  );

export const CreateMarketplaceAd = async (p) =>
  await apiAxios(p).post(`/wp/v2/marketplace-ads`, p);
