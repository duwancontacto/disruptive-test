import { IContentPayload } from "@/types/Services/ContentInterface";
import { Api, baseUrl } from ".";
import axios from "axios";

export const getThemes = () => {
  return Api({
    endpoint: `/themes`,
    method: "GET",
  });
};

export const getCategories = () => {
  return Api({
    endpoint: `/categories`,
    method: "GET",
  });
};

export const getContents = (
  search?: String,
  theme_id?: String,
  category_id?: String
) => {
  const query = `?search=${search ? search : ""}&theme_id=${
    theme_id ? theme_id : ""
  }&category_id=${category_id ? category_id : ""}`;
  return Api({
    endpoint: `/contents${query}`,
    method: "GET",
  });
};

export const uploadContent = (data: IContentPayload) => {
  const formData = new FormData();

  formData.append("file", data.file[0]);
  formData.append("name", data.name);
  formData.append("theme_id", data.theme_id);

  return axios.post(baseUrl + `/contents/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
};
