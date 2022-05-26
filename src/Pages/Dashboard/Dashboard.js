import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';
import Loading from '../Shared/Loading';

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (loading || adminLoading) {
    return <Loading />;
  }
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <Outlet />
      </div>
      <div className='drawer-side my-5 mr-5 ml-0 lg:ml-5'>
        <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 w-64 text-base-content bg-secondary rounded-xl'>
          {/* <!-- Sidebar content here --> */}

          <CustomLink to='/dashboard'>My Profile</CustomLink>

          {user && !admin && (
            <>
              <CustomLink to='/dashboard/myOrders'>My Orders</CustomLink>

              <CustomLink to='/dashboard/addReview'>Add A Review</CustomLink>
            </>
          )}
          {admin && (
            <>
              <CustomLink to='/dashboard/manageOrders'>
                Manage All Orders
              </CustomLink>

              <CustomLink to='/dashboard/addProduct'>Add A Product</CustomLink>

              <CustomLink to='/dashboard/makeAdmin'>Make Admin</CustomLink>

              <CustomLink to='/dashboard/manageProducts'>
                Manage Products
              </CustomLink>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
