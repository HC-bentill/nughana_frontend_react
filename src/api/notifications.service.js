import { apiAxios } from '../utils';

export const GetNotifications = async (p) => await apiAxios(p).get(`/buddyboss/v1/notifications?user_id=${p}&is_new=false`);
