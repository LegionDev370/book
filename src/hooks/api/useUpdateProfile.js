import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getTokenFromLocalStorage } from "../../utils/localstorage";
import { toast } from "react-toastify";

export const useUpdateProfile = () => {
  const token = getTokenFromLocalStorage();
  const { data, isSuccess, error, isPending, mutateAsync } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: async (formData) => await updateProfile(formData),
    onSuccess: () => toast.success("profile updated"),
  });
  async function updateProfile(formData) {
    return await axios.put("http://localhost:3000/api/users/me", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return { data, isSuccess, error, isPending, mutateAsync };
};
