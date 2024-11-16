import { apiAxios } from "../utils";

export const UploadImage = async (data) => {
  let url = `wp/v2/media`;

  return await apiAxios().post(url, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const GetAds = async () =>
  await apiAxios().get(
    `wp/v2/marketplace-ads?acf_format=standard&_fields=id,title,acf,date`
  );


  export const UploadFile = async (file) => await apiAxios().post('wp/v2/media', file);
