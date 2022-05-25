import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';
import { FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  // useAuthState
  const [user] = useAuthState(auth);

  // DropdownStates
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [hamburgerDropdown, setHamburgerDropdown] = useState(false);

  // Path
  const location = useLocation();
  const path = location.pathname;

  // Event Handlers
  // Log Out
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  // Toggle dropdown
  const toggleAvatarDropdown = () => {
    setAvatarDropdown(!avatarDropdown);
  };
  const toggleHamburgerDropdown = () => {
    setHamburgerDropdown(!hamburgerDropdown);
  };

  // NavLinks
  const navLinks = (
    <>
      <CustomLink onClick={toggleHamburgerDropdown} to='/'>
        Home
      </CustomLink>

      <CustomLink onClick={toggleHamburgerDropdown} to='/blogs'>
        Blogs
      </CustomLink>

      <CustomLink onClick={toggleHamburgerDropdown} to='/myPortfolio'>
        My Portfolio
      </CustomLink>

      {user ? (
        <>
          <CustomLink onClick={toggleHamburgerDropdown} to='/dashboard'>
            Dashboard
          </CustomLink>

          {/* Avatar Dropdown */}
          <div className='dropdown'>
            <label
              onClick={toggleAvatarDropdown}
              tabIndex='2'
              class='avatar my-1 ml-4 mr-6 cursor-pointer'>
              <div class='w-10 rounded-full bg-accent hover:ring ring-primary ring-offset-base-100 ring-offset-2'>
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user?.displayName} />
                ) : (
                  <p className='uppercase text-white text-2xl text-center mt-1'>
                    {user?.displayName[0]}
                  </p>
                )}
              </div>
            </label>

            <ul
              tabIndex='2'
              className={`${
                avatarDropdown && 'hidden'
              } menu menu-compact dropdown-content mt-3  p-2 shadow bg-secondary text-white rounded-box w-52 right-0`}>
              <div className='avatar mx-auto mt-2 mb-3'>
                <div class='w-28 rounded-full bg-accent'>
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt={user?.displayName} />
                  ) : (
                    <p className='text-white text-7xl text-center mt-3'>
                      {user?.displayName[0]}
                    </p>
                  )}
                </div>
              </div>
              <p className='text-center text-md mb-1'>{user?.displayName}</p>

              <Link
                onClick={toggleAvatarDropdown}
                className='mx-auto btn btn-primary btn-sm mb-3'
                to='dashboard'>
                View Profile
              </Link>
              <hr />
              <br />
              <li className='ml-auto'>
                <button className='hover:text-primary' onClick={logOut}>
                  Log Out{' '}
                  <span>
                    <FiLogOut />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <CustomLink onClick={toggleHamburgerDropdown} to='/login'>
            Login
          </CustomLink>

          <CustomLink onClick={toggleHamburgerDropdown} to='/signup'>
            Sign Up
          </CustomLink>
        </>
      )}
    </>
  );

  return (
    <div className='navbar justify-between bg-secondary sticky top-0 z-50'>
      <div>
        <div className='dropdown'>
          <label
            onClick={toggleHamburgerDropdown}
            tabIndex='0'
            className='btn btn-accent lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>

          <ul
            tabIndex='0'
            className={`${
              hamburgerDropdown && 'hidden'
            } menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-white rounded-box w-52`}>
            {navLinks}
          </ul>
        </div>
        <Link to='/' className='btn btn-secondary normal-case text-2xl'>
          RollaBike
        </Link>
      </div>

      {/* {user && <p className='text-primary'>{user?.displayName}</p>} */}

      <div className='hidden lg:flex'>
        <ul className='menu menu-horizontal text-white p-0'>{navLinks}</ul>
      </div>

      {path.includes('/dashboard') && (
        <label
          tabIndex='1'
          className='btn btn-accent drawer-button lg:hidden'
          htmlFor='dashboard-drawer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </label>
      )}
    </div>
  );
};

export default Navbar;
