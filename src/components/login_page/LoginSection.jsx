import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import UserKit from "../../data/UserKit";

export default function LoginSection() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const userKit = new UserKit();
  const history = useHistory();
  function handleLogin() {
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        history.push("/home");
      });
  }
  return (
    <section>
      <h2>Login</h2>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="john.doe@mail.com"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <Link to="/register">Register new user</Link>
    </section>
  );
}
