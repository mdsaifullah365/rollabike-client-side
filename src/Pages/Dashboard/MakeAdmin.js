import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
  const [user] = useAuthState(auth);
  const { email: adminEmail } = user;
  const navigate = useNavigate();
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery('users', () => axios.get(`/user?email=${adminEmail}`));
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    const status = error.response.status;
    if (status === 401 || status === 403) {
      signOut(auth);
      localStorage.removeItem('accessToken');
      navigate('/');
    }
  }
  return (
    <>
      <div className='bg-neutral p-5 my-5'>
        <div className='uppercase text-3xl mb-5 text-base-200'>
          Make/Remove Admin
        </div>
        <hr />
        <div className='overflow-x-auto py-5'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th></th>
                <th>User Email</th>
                <th>Change RoleRole</th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((user, i) => (
                <UserRow
                  key={user._id}
                  user={user}
                  i={i}
                  refetch={refetch}
                  adminEmail={adminEmail}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
