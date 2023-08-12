/* eslint-disable react/prop-types */
import axios from 'axios';
import { toast } from 'react-toastify';

const UserRow = ({ user, i, refetch, adminEmail }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    axios.put(`/api/v1/admin/add/${email}?email=${adminEmail}`).then((res) => {
      if (res.status === 200) {
        toast.success(`${email} is made an Admin!`);
        refetch();
      }
    });
  };
  const removeAdmin = () => {
    axios
      .put(`/api/v1/admin/remove/${email}?email=${adminEmail}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success(`${email} is removed from Admin!`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{email}</td>
      <td>
        {role === 'admin' ? (
          <button onClick={removeAdmin} className='btn btn-error btn-xs'>
            Remove Admin
          </button>
        ) : (
          <button onClick={makeAdmin} className='btn btn-xs'>
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
