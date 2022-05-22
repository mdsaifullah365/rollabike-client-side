import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "./Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!admin) {
    return (
      <h2 className="text-3xl text-center font-bold mt-10 text-error">
        Unauthorized Access
      </h2>
    );
  }

  return children;
};

export default RequireAdmin;
