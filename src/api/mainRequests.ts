import { instancseApi } from "./instanse";

export const getReviews = async () => {
  const { data } = await instancseApi.get("reviews");
  console.log(data);
};
