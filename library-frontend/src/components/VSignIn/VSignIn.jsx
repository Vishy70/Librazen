// eslint-disable-next-line no-unused-vars
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { supabase } from '../../client';
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
function VSignIn({ setToken, setIsLoggingIn }) 
{
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      if(error) throw error
      setToken(data)
      navigate('/')
      
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label name="email">Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter valid email" value={formData.email} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label name="password">Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRedirect">
            <Form.Text>
              Don't have an account? Signup <Button className="p-0 m-0 text-blue-500 hover:text-blue-700 align-baseline" variant='link' size='sm' onClick={() => {setIsLoggingIn(false)}}>here</Button>!
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default VSignIn;
