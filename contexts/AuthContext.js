import { createContext, useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(!!user);

  useEffect(() => {
    const token_refresh = localStorage.getItem("refresh");

    const handleRefleshToken = async () => {
      await axios
        .post(`${process.env.BASE_API_URL}/token/refresh`, {
          refresh: token_refresh,
        })
        .then((response) => {
          const { data } = response;
          localStorage.setItem("access", data.access);
        })
        .catch((error) => {
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          setIsAuth(false);
        });
    };

    const handleUserData = async () => {
      const token_access = localStorage.getItem("access");

      await axios
        .get(`${process.env.BASE_API_URL}/GetAuthenticatedUser/1/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token_access}`,
          },
        })
        .then((response) => {
          const { data } = response;
          setIsAuth(true);
          setUser(data);
        })
        .catch((error) => {
          handleRefleshToken();
        });
    };

    handleRefleshToken();
    handleUserData();
  }, [router]);

  const handleSingOut = async () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuth(false);
    router.push('/');
  };

  const contextValue = useMemo(
    () => ({
      user,
      isAuth,
      handleSingOut,
    }),
    [user, isAuth, handleSingOut]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
