import React from 'react';

import { Container } from './styles';
import Card from '../../components/Card';

const Login: React.FC = () => {
  return (
    <Container> 
      <h1>Login</h1>
      <Card>
        <a href="/dashboard">Login for what? Go straight to the Dashboard {'>'}</a>
      </Card>
    </Container>
  );
}

export default Login;