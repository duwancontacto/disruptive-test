import { Api } from ".";

const getCategories = () => {
  return Api({
    endpoint: `/branchs/categories`,
    method: "GET",
  });
};

const getContents = () => {
  return Api({
    endpoint: `/branchs`,
    method: "GET",
  });
};

export { getCategories, getContents };
