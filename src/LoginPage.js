import React from "react";
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const upperText = {
    flex: 1,
    fontFamily: "Arial",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginRight: 0,
    fontSize: 25,
    paddingLeft: "10px",
    // color:' #33d1ff '
  };

  const labelStyle={

    alignSelf:"flexStart",
    fontFamily: "Arial",
    paddingTop:"30px",
    fontSize:20
  };

  const tfStyle={
      height: "25px",
      width:"400px",
      
  }; 
  const navigate = useNavigate();
   
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        margin: "10px",
      }}
    >
      <h1 style={upperText}>Login To Your Account</h1>
      <label style={labelStyle}>Email </label>
      <input style={tfStyle} type="text" value={email}  onChange={(e) => setEmail(e.target.value)} required />
      <label style= {labelStyle}>Password </label>
      <input style={tfStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button style={{marginTop:"20px",minHeight:"50",width:"150px"}}
      
      onClick={ ()=>
      fetch("http://127.0.0.1:8000/api/verifyUser", {
      method: "POST",
      body: JSON.stringify({ "email": email, "password":password}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        console.log('verified is'+data.verified[0]);
        console.log('user id is'+data.verified[1]);

        // <Link to={{
        //   pathname: '/UserProductsPage"',
        //   state: {user_id:data[1]}
        // }} ></Link>
        if(data.verified[0]==true){console.log("USER VERIFIED : TRUE ,NAVIGATING TO USERPRODUCTSPAGE");navigate('/UserProductsPage',{state:data.verified})}
        if(data.verified[0]==false){alert("INCORRECT EMAIL OR PASSWORD")}
      })
      
      } 
      > LOGIN </button>
    </div>
  );
}
