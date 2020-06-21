import React from 'react';

import { Container, Board } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Board>
        <h1>Dashboard</h1>
        <a href="/"> {`<`} Back to Home</a>
      </Board>
    </Container>
  );
}

export default Dashboard;