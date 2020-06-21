import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import GlobalStyle from './styles.global';

const Main = Loadable({
  loader: () => import('./pages/Main'),
  loading: () => <h1>Carregando...</h1>,
});

const Login = Loadable({
  loader: () => import('./pages/Login'),
  loading: () => <h1>Carregando...</h1>,
});

const Dashboard = Loadable({
  loader: () => import('./pages/Dashboard'),
  loading: () => <h1>Carregando...</h1>,
});


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
