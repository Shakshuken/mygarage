import { useDispatch } from "react-redux";
import { logoutSuccess } from "../store/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        dispatch(logoutSuccess());
      } else {
        console.log("Помилка");
      }
    } catch (error) {
      console.log("Помилка з'єднання");
    }
  };

  return { logout };
};

export default useLogout;
