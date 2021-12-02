import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const Favourite = () => {
  const [email, setEmail] = useState("");
  const [authFail, setAuthFail] = useState(null);

  const sessionAuthDataObject = JSON.parse(
    sessionStorage.getItem("session_auth_data")
  );

  useEffect(() => {
    if (sessionAuthDataObject !== null) {
      let email = sessionAuthDataObject.email;
      let token = sessionAuthDataObject.token;

      console.log(email, token);

      setEmail(email);
    } else {
      setAuthFail(<Redirect to="/" />);
      console.log("Please login");
    }
  }, []);

  return (
    <React.Fragment>
      {/* {authFail}
      <div className="container">
        <h1>Favourite</h1>
        <p>{email}</p>
      </div> */}

      <p>Favourite</p>
    </React.Fragment>
  );
};

export default Favourite;
