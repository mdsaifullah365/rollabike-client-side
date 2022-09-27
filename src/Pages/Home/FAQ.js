import React from 'react';

const FAQ = ({ qna, i }) => {
  const { question, answer } = qna;
  return (
    <div
      tabIndex={i}
      className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm text-secondary mb-6'>
      <input type='checkbox' />
      <div className='collapse-title text-xl font-medium'>{question}</div>
      <div className='collapse-content'>
        <hr className='mb-2' />
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
