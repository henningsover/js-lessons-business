import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StartPage from './pages/StartPage';
import SimpleLayout from './components/header/SimpleLayout';
import GlobalStyle from './theme/globalStyles';
function App() {
  const [customerList, setCustomerList] = useState(null);
  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={{ customerList, setCustomerList }}>
        <Switch>
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
      </UserContext.Provider>
    </div>
  );
}

export default App;

/* 
  email: nackademin@willandskill.se
  password: js-fend-19
*/
