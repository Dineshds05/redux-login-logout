import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Reducers/userReducer";


function LoginForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    function userLogin(){
        const userData = {
            name,
            password
        }
        // console.log(userData)
        dispatch(loginUser(userData))
    }
    return (
      <div className="login-container">
        <h1>Login Page</h1>
        <input
        type="text"
        placeholder="User Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={userLogin}>Login</button>
      </div>
    );
  }
  
  export default LoginForm;