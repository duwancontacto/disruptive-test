import {
  ILoginPayload,
  IRegisterPayload,
} from "@/types/Services/AuthInterface";
import { Api } from ".";

export const loginUserService = (loginPayload: ILoginPayload) => {
  return Api({
    endpoint: `/auth/login`,
    method: "POST",
    _data: loginPayload,
  });
};

export const registerUserService = (registerPayload: IRegisterPayload) => {
  return Api({
    endpoint: `/auth/register`,
    method: "POST",
    _data: registerPayload,
  });
};

export const getProfileService = () => {
  return Api({
    endpoint: `/auth/profile`,
    method: "GET",
  });
};
