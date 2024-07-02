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

const createCustomer = (payload: { email: string; password: string }) => {
  return Api({
    endpoint: `/orders/customers`,
    method: "POST",
    _data: payload,
  });
};
const createOrder = (payload: any) => {
  return Api({
    endpoint: `/orders`,
    method: "POST",
    _data: payload,
  });
};

export { getCategories, getContents, createCustomer, createOrder };
