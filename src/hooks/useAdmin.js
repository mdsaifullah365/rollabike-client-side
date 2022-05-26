import axios from 'axios';
import { useEffect, useState } from 'react';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`/admin?email=${user?.email}`)
      .then((res) => {
        setAdmin(res.data.admin);
        setAdminLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setAdminLoading(false);
        }
      });
  }, [user?.email]);

  return [admin, adminLoading];
};

export default useAdmin;
