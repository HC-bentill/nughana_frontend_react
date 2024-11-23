import { apiAxios } from '../utils';

export const GetMessages = async (p) => await apiAxios(p).get(`/buddyboss/v1/messages?user_id=${p}`);
