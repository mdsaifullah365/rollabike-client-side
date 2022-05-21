import React from 'react';

const Loading = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex items-center justify-center '>
      <div className='w-20 h-20 border-b-2 border-primary rounded-full animate-spin'></div>
    </div>
  );
};

export default Loading;
