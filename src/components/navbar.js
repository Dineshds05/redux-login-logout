import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Reducers/userReducer";


function Navbar() {
    const {name} = useSelector(state=>state.userInfo.data)
    const dispatch = useDispatch()
    // console.log(name)
    return (
      <div className="nav-container">
        <h2>{name}</h2>
        <button onClick={()=>dispatch(logoutUser())}>Logout</button>
      </div>
    );
  }
  
  export default Navbar;