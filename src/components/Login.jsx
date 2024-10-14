import React, { useState, useContext } from "react";
import CustomerContext from "../context/CustomerContext";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setCustomer } = useContext(CustomerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomer({ username, password });
  };


  return (
    <div className="App">
      <h2>Login</h2>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <br />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <br />
      <br />


      <Button size="small" variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default Login;
