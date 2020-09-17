import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import UserKit from "./data/UserKit";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();
  //Hämtar search params "?uid....&token......"
  const searchString = history.location.search;
  //Inbyggd javascriptmetod
  const urlParameters = new URLSearchParams(searchString);
  //hämtar och sätter uid och token
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const userKit = new UserKit();

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  }

  function handleLogin() {
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        history.push("/home");
      });
  }

  function handleRegister() {
    userKit.register(firstName, lastName, email, password, organisationName, organisationKind);
  }

  function renderInput(index, placeholder, stateVariable, setStateVariable) {
    return (
      <div key={index}>
        <label>{placeholder}</label>
        <input placeholder={placeholder} value={stateVariable} onChange={(e) => setStateVariable(e.target.value)} />
      </div>
    );
  }

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  const inputObjects = [
    ["First Name", firstName, setFirstName],
    ["Last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind (0,1,2)", organisationKind, setOrganisationKind],
  ];

  return (
    <div className="App">
      <h1>Business Project</h1>
      <Switch>
        <Route path="/home">
          <div>
            <h1>Home</h1>
            <button onClick={getCustomerList}>Get customer List</button>
          </div>
        </Route>
        <Route path="/login">
          {uid && token ? (
            <div>
              <h2>Activate account</h2>
              <button onClick={handleActivateUser}>Activate user</button>
            </div>
          ) : (
            <div>
              <h2>Login</h2>
              <label>Email</label>
              <input
                placeholder="Email"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          )}
        </Route>
        <Route path="/">
          <h2>Register</h2>
          <p>Enter details to register</p>
          {inputObjects.map((inputItem, index) => {
            return renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
          })}
          <button onClick={handleRegister}>Register</button>
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
