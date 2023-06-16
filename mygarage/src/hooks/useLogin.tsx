import { useMutation } from "react-query";

const useLogin = () => {
  const loginMutation = useMutation(
    (credentials: { email: string; password: string }) => {
      return fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Invalid credentials");
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("sessionId", data.sessionId);
          return data.access_token;
        });
    }
  );

  const login = async (credentials: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      await loginMutation.mutateAsync(credentials);
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    login,
    isLoading: loginMutation.isLoading,
    error: loginMutation.error,
  };
};

export default useLogin;
