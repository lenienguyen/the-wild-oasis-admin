import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useSignup = () => {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (loginData) => {
      toast.success(
        "Account sucessfully created! Please verify the new account from the user's email address."
      );
    },
  });

  return { signup, isPending };
};
