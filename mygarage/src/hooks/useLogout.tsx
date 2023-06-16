import { useMutation } from "react-query";

const useLogout = () => {
  const logoutMutation = useMutation(() => {
    return fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Logout failed");
      }
    });
  });

  const logout = async (): Promise<boolean> => {
    try {
      await logoutMutation.mutateAsync();
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    logout,
    isLoading: logoutMutation.isLoading,
    error: logoutMutation.error,
  };
};

export default useLogout;
