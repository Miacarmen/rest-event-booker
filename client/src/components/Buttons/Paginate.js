import React from 'react';

const Paginate = () => {
  return (
    <div className='flex justify-center mt-12'>
    <div className='btn-group'>
      <input type='radio' name='options' data-title='1' className='btn bg-base-200 border-none' />
      <input
        type='radio'
        name='options'
        data-title='2'
        className='btn bg-neutral'
        checked
      />
      <input type='radio' name='options' data-title='3' className='btn bg-base-200 border-none' />
      <input type='radio' name='options' data-title='4' className='btn bg-base-200 border-none' />
    </div>
    </div>
  );
};

export default Paginate;
