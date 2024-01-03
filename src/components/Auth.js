import React, { useContext } from "react";

import Card from "./UI/Card";
import { AuthContext } from "../context/auth-context";
import "./Auth.css";

const Auth = (props) => {
  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.login();
  };

  return (
    <div className="auth">
      <Card>
        <h2>
          You are <span style={{ color: "red" }}>not</span> authenticated!
        </h2>
        <p>Please Authentication in to continue.</p>
        <button onClick={loginHandler}>Authentication</button>
      </Card>
    </div>
  );
};

export default Auth;
