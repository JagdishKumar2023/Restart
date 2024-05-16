import React, { useEffect, useState } from "react";

// This app is working

const LoginFormEff = () => {
  const [username, setUserName] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [validValue, setValidValue] = useState(false);

  useEffect(() => {
    const userValid = username.length >= 5;
    const passwordValid = passwordValue.length >= 6;
    setValidValue(userValid && passwordValid);
  }, [username, passwordValue]);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePassChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validValue) {
      console.log("Submit Form");
    } else {
      console.log("Form Not Valid");
    }
  };

  console.log(username, passwordValue, validValue);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={username}
          onChange={handleNameChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={passwordValue}
          onChange={handlePassChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginFormEff;
