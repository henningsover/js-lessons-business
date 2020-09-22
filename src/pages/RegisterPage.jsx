import React, { useState } from "react";
import UserKit from "../data/UserKit";
import BuildKit from "../data/BuildKit";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const userKit = new UserKit();
  const buildKit = new BuildKit();
  const inputObjects = [
    ["First Name", firstName, setFirstName],
    ["Last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind (0,1,2)", organisationKind, setOrganisationKind],
  ];
  function handleRegister() {
    userKit
      .register(firstName, lastName, email, password, organisationName, organisationKind)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <main>
      <h2>Register</h2>
      <p>Enter details to register</p>
      {inputObjects.map((inputItem, index) => {
        return buildKit.renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}
      <button onClick={handleRegister}>Register</button>
    </main>
  );
}
