// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function VHero({ token }) 
{
  // eslint-disable-next-line react/prop-types
  const userName = token.user.user_metadata.username
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center">
      <Container className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Librazen</h1>
        <p className="text-lg mb-8">
          {`This is placeholder ${userName}, until I get in some cool animations for the vault/zen theme.`}
        </p>
        <Button variant="primary" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2">
          Get Started
        </Button>
      </Container>
    </div>
  );
}

export default VHero;
