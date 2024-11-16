import { apiAxios } from "../utils";

export const UploadImage = async (data) => {
  let url = `wp/v2/media`;

  return await apiAxios().post(url, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
