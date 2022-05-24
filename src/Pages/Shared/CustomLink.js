import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li
      className={`${
        match ? 'bg-accent text-primary' : 'text-base-100'
      } hover:bg-accent hover:text-primary`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default CustomLink;
