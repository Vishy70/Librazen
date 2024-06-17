import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { supabase } from '../../client';

import '../../tailwind.css'

// eslint-disable-next-line react/prop-types, no-unused-vars
function VSignUp({ setToken, setIsLoggingIn }) 
{
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: ''
  })

  function handleChange(event)
  {
    setFormData((prevFormData) => (
      {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    ))
  }

  async function handleSubmit(event)
  {
    event.preventDefault();

    try 
    {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              username: formData.username,
            }
          }
        }
      )
      if(error) throw error
      alert('Please check your email for the verification link and click on it!')
      
    } 
    catch (error)
    {
      alert(error);
    }
  }

  return (
    <div className="min-h-screen bg-cyan-900 flex items-center justify-center">
      <div className='bg-white text-black p-8 rounded shadow-lg'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label name="username">Username</Form.Label>
            <Form.Control type="username" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label name="email">Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter valid email" value={formData.email} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label name="password">Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRedirect">
            <Form.Text>
              Already have an account? Signin <Button className="p-0 m-0 text-blue-500 hover:text-blue-700 align-baseline" variant='link' size='sm' onClick={() => {setIsLoggingIn(true)}}>here</Button>!
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default VSignUp;
