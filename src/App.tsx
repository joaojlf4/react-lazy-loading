import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import getLoadableComponent from './utils/getLoadableComponent';

import GlobalStyle from './styles.global';

const Main = getLoadableComponent('Main');

const Login = getLoadableComponent('Login');

const Dashboard = getLoadableComponent('Dashboard');


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
