import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const LoginCard = () => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card w-96 bg-base-200 text-base-content'>
        <div className='card-body items-center text-center'>
          <h3>Login</h3>
          <Form>
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
            <div className='d-grid'>
              <button type='submit' className='btn-sm rounded-full btn-primary'>
                Submit
              </button>
            </div>
            <p className='forgot-password text-center pt-2'>
              {/* Forgot <a href='/'>password?</a> */}
              New here? <Link to='/signup'>Sign up</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
