// username, password, email verification
// if none in database, redirect to sign up
// once logged in or signed up, redirect to events page
import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <div className='grid flex justify-items-center grid-cols-2'>
      <img
        src='https://images.pexels.com/photos/13441143/pexels-photo-13441143.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt='flowers'
      />

      <Form>
        <Row className='mb-3'>
          <Form.Group as={Col} size='lg' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
        </Row>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          className='btn-sm rounded-full bg-neutral border-none text-base-300 hover:bg-neutral-focus'
        >
          Login
        </Button>
      </Form>
      {/* </div> */}
    </div>
  );
};

export default Login;
