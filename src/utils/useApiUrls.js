import { useSelector } from "react-redux";
import { createApiUrls } from "./constants";

export const useApiUrls = () => {
  const { lat, long } = useSelector((state) => state.location);
  return createApiUrls(lat, long);
};
