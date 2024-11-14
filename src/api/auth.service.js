import { apiAxios, extractUsername } from "../utils";

export const UserLogin = async (p) =>
  await apiAxios().post(
    `/jwt-auth/v1/token?username=${p?.username}&password=${p?.password}`
  );


export const UserSignup = async (p) =>
  await apiAxios().post(
    `/buddyboss/v1/signup?signup_email=${p?.email}&signup_password=${p?.password}&signup_email_confirm=${p?.email}&signup_password_confirm=${p?.password}&field_3=${extractUsername(p.email)}&legal_agreement=agreed`
  );
