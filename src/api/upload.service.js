import { apiAxios } from "../utils";

export const GetAds = async () =>
  await apiAxios().get(
    `wp/v2/marketplace-ads?acf_format=standard&_fields=id,title,acf,date`
  );


  export const UploadFile = async (file) => await apiAxios().post('wp/v2/media', file);
