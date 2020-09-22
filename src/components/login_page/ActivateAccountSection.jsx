import React from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../../data/UserKit";

export default function ActivateAccountPage(props) {
  const userKit = new UserKit();
  const history = useHistory();
  const { uid, setUid, token, setToken } = props;

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  }
  return (
    <section>
      <h2>Activate your account</h2>
      <button onClick={handleActivateUser}>Activate account</button>
    </section>
  );
}
