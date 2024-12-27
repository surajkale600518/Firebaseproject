import React from 'react'
export const Login = () => {
  return (

<div style={{ backgroundColor: " rgb(191, 221, 191)", padding: "50px", width: "400px", borderRadius: "8px", border: "1px solid green", margin: "auto", marginTop: "5%" }}>
      <form >

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>UserName / Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <a href="#" style={{ fontSize: "12px", float: "right", marginTop: "5px" }}>Forget ?</a>
        </div>
       <div><span style={{display:"flex"}}>
       <input type="checkbox" style={{width:"15px", margin:"5px"}} />Remember me  ?</span>
       </div>
        
        
        
       
        <button
          type="submit"
          style={{
            border: "none",
            padding: "10px",
            width: "100%",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"

          }}
        >
          Log In
        </button>
        <p style={{ textAlign: "center", marginTop: "15px", fontSize: "12px" }}>
          Not a member  ? <a href="#">Sign up</a>
        </p>
      </form>
    </div>



  );
} 
