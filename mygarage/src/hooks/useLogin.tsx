import { useMutation } from "react-query";

const useLogin = () => {
  const loginMutation = useMutation(
    (credentials: { email: string; password: string }) => {
      const csrfToken = (window as any).csrfToken;
      console.log(csrfToken);
      return fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,
        },
        body: JSON.stringify(credentials),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Invalid credentials");
          }
          return response.json();
        })
        .then((data) => data.access_token);
    }
  );

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isLoading,
    error: loginMutation.error,
  };
};

export default useLogin;
