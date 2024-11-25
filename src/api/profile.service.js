import { apiAxios } from '../utils';

export const GetUserProfile = async (id) => {
   let url = `buddyboss/v1/members/${id}`;

   return await apiAxios().get(url);
};

export const UpdateUserProfile = async (first_name, last_name, other_names, date_of_birth, nationality, profile_description, phone_number, email, city, website, snapchat, instagram) => {
   let url =
      `buddyboss/v1/xprofile/update?fields[0][field_id]=1&fields[0][group_id]=1&fields[0][type]=textbox&fields[0][value]=${encodeURIComponent(first_name)}&fields[0][visibility_level]=1` +
      `&fields[1][field_id]=2&fields[1][group_id]=1&fields[1][type]=textbox&fields[1][value]=${encodeURIComponent(last_name)}&fields[1][visibility_level]=1` +
      `&fields[2][field_id]=3&fields[2][group_id]=1&fields[2][type]=textbox&fields[2][value]=${encodeURIComponent(other_names)}&fields[2][visibility_level]=1` +
      `&fields[3][field_id]=4&fields[3][group_id]=1&fields[3][type]=textbox&fields[3][value]=${encodeURIComponent(date_of_birth)}&fields[3][visibility_level]=1` +
      `&fields[4][field_id]=5&fields[4][group_id]=1&fields[4][type]=textbox&fields[4][value]=${encodeURIComponent(nationality)}&fields[4][visibility_level]=1` +
      `&fields[5][field_id]=6&fields[5][group_id]=1&fields[5][type]=textbox&fields[5][value]=${encodeURIComponent(profile_description)}&fields[5][visibility_level]=1` +
      `&fields[6][field_id]=7&fields[6][group_id]=1&fields[6][type]=textbox&fields[6][value]=${encodeURIComponent(phone_number)}&fields[6][visibility_level]=1` +
      `&fields[7][field_id]=8&fields[7][group_id]=1&fields[7][type]=textbox&fields[7][value]=${encodeURIComponent(email)}&fields[7][visibility_level]=1` +
      `&fields[8][field_id]=9&fields[8][group_id]=1&fields[8][type]=textbox&fields[8][value]=${encodeURIComponent(city)}&fields[8][visibility_level]=1` +
      `&fields[9][field_id]=10&fields[9][group_id]=1&fields[9][type]=textbox&fields[9][value]=${encodeURIComponent(website)}&fields[9][visibility_level]=1` +
      `&fields[10][field_id]=11&fields[10][group_id]=1&fields[10][type]=textbox&fields[10][value]=${encodeURIComponent(snapchat)}&fields[10][visibility_level]=1` +
      `&fields[11][field_id]=12&fields[11][group_id]=1&fields[11][type]=textbox&fields[11][value]=${encodeURIComponent(instagram)}&fields[11][visibility_level]=1`;

   return await apiAxios().get(url);
};
