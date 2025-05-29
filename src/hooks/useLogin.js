import { useMutation } from "@tanstack/react-query";
import api from "../services/axios";
import LocalStorage from "../services/local-storage";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "react-toastify";
const handleLogin = async (data) => {
  const res = await api.post("/login", data);
  return res.data;
};

const handleOtp = async (data) => {
  const res = await api.post("/verify-otp", data);
  return res.data;
};

export const useLogin = () => {
  const { setUser, setToken } = useAuthStore();
  const notify = () => toast("login Succesfull");
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data) => handleLogin(data),
    onSuccess: async (data) => {
      notify();
      setToken(data?.token);
      setUser(data?._id);
      LocalStorage.save("token", data?.token);
      LocalStorage.save("user", data?._id);
    },
    onError: (error) => {},
  });
};
