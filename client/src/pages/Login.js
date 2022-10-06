// username, password, email verification
// if none in database, redirect to sign up
// once logged in or signed up, redirect to events page
import React from 'react';
import LoginCard from '../components/Login/LoginCard';

const Login = () => {
  return (
    <div className='wrapper pb-24 flex justify-center items-center'>
      <LoginCard />
    </div>
  );
};

export default Login;
