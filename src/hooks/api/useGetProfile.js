import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getTokenFromLocalStorage } from "../../utils/localstorage";

export const useGetProfile = () => {
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => await getProfile(),
  });
  const token = getTokenFromLocalStorage();
  const getProfile = async () => {
    return await axios.get("http://localhost:3000/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return [data, isLoading, isSuccess, error];
};
