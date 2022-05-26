import React from 'react';

const NotFound = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] bg-accent container py-28 flex justify-center items-center'>
      <div className='grid grid-cols-2 gap-16 items-end uppercase text-base-200'>
        <div className='text-8xl'>
          <p>Error |</p>
        </div>
        <div className='text-4xl'>
          <p>404 Not Found</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
