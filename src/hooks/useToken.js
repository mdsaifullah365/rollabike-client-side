import axios from "axios";
import { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const userInfo = { email: email };
    if (email) {
      axios
        .put(`http://localhost:5000/user/${email}`, userInfo)
        .then((data) => {
          console.log(data);
          const accessToken = data.data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user?.user?.email]);

  return [token];
};
export default useToken;
