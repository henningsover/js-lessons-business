import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StartPage from './pages/StartPage';
import SimpleLayout from './components/header/SimpleLayout';
import GlobalStyle from './theme/globalStyles';
import CustomerDetailsPage from './pages/CustomerDetailsPage';
function App() {
  const [customerList, setCustomerList] = useState(null);
  const [shouldLoadCustomerList, setShouldLoadCustomerList] = useState(true);
  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider
        value={{ customerList, setCustomerList, shouldLoadCustomerList, setShouldLoadCustomerList }}
      >
        <Switch>
          <Route
            path="/customer/:customerId"
            render={(props) => {
              return <SimpleLayout mainContent={<CustomerDetailsPage {...props} />} />;
            }}
          ></Route>
          <Route path="/home">
            <SimpleLayout mainContent={<HomePage />} />
          </Route>
          <Route path="/login">
            <SimpleLayout mainContent={<LoginPage />} />
          </Route>
          <Route path="/register">
            <SimpleLayout mainContent={<RegisterPage />} />
          </Route>
          <Route path="/">
            <SimpleLayout mainContent={<StartPage />} />
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
