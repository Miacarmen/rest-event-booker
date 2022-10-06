import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const SignupCard = () => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card w-96 bg-base-200 text-base-content'>
        <div className='card-body items-center text-center'>
          <h3 className='text-lg '>Login</h3>
          <Form>
            <div className='mb-3'>
              <label>First Name</label>
              <input
                type='firstName'
                className='form-control rounded-full pl-2 py-1'
                placeholder='First Name'
              />
            </div>
            <div className='mb-3'>
              <label>Last Name</label>
              <input
                type='lastName'
                className='form-control rounded-full pl-2 py-1'
                placeholder='Last Name'
              />
            </div>

            <div className='mb-3'>
              <label>Email address</label>
              <input
                type='email'
                className='form-control rounded-full pl-2 py-1'
                placeholder='Enter email'
              />
            </div>
            <div className='mb-3'>
              <label>Password</label>
              <input
                type='password'
                className='form-control rounded-full pl-2 py-1'
                placeholder='Enter password'
              />
            </div>
            <div className='mb-3'>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck1'
                />
                <label
                  className='custom-control-label pl-2'
                  htmlFor='customCheck1'
                >
                  Remember me
                </label>
              </div>
            </div>
           
              <button type='submit' className='btn-sm rounded-full btn-primary'>
                Submit
              </button>
           
            <p className='forgot-password text-center pt-2'>
              Or <Link to='/login'>Login</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
