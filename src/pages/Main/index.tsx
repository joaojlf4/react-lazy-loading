import React from 'react';

import { Container } from './styles';
import Card from '../../components/Card';

const Main: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <h1>Code Splitting/Lazy Loading with React Relodable</h1>
        <Card>
          <a href="/login">Login {'>'}</a>
        </Card>
      </div>
    </Container>
  );
}

export default Main;