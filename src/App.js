import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StartPage from './pages/StartPage';
import SimpleLayout from './components/header/SimpleLayout';
import GlobalStyle from './theme/globalStyles';
import CreateCustomerPage from './pages/CreateCustomerPage';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/home/create-customer">
          <SimpleLayout>
            <CreateCustomerPage />
          </SimpleLayout>
        </Route>
        <Route path="/home">
          <SimpleLayout>
            <HomePage />
          </SimpleLayout>
        </Route>
        <Route path="/login">
          <SimpleLayout>
            <LoginPage />
          </SimpleLayout>
        </Route>
        <Route path="/register">
          <SimpleLayout>
            <RegisterPage />
          </SimpleLayout>
        </Route>
        <Route path="/">
          <SimpleLayout>
            <StartPage />
          </SimpleLayout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

/* 
  email: nackademin@willandskill.se
  password: js-fend-19
*/
