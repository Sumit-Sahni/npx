import React, { useEffect, Fragment } from "react";
import { useState,  } from "react";
import { NavLink,} from "react-router-dom";
import axios from "axios";
import Loadings from "../Components/Loading";
import { useNavigate } from "react-router-dom";








const LoginScreen = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const navigate = useNavigate();
useEffect(() =>{
  const userInfo  = localStorage.getItem("userInfo");

  if(userInfo){
    navigate("/welcome");
  }
},[navigate]);

const submitHandler =  async(e) => {
  e.preventDefault();
  try{
      setLoading(true);
      const config = {
          headers: {
              "Content-Type": "application/json",
          },
      };
        setLoading(true);
       const {data} = await axios.post("/api/users/login",
        {
            email,
            password
        },
        config
        
        );
          console.log(data);
          localStorage.setItem("userInfo", JSON.stringify(data));
           window.location.href = "/welcome"; 
          setLoading(false);
  } catch(error){
      setLoading(false);
      alert("Check Your Email and Password");
     
  }
  
}



    return (
        <Fragment>
          <Fragment>
            <nav className="navbar navbar-expand-lg  bg-body navbar-fixed-top p-5">
  <div className="container-fluid">
      <NavLink to="/about" className="navbar-brand">Home</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/about" className="nav-link active" aria-current="page">About</NavLink>
        </li>
      </ul>
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className='nav-item'>
        <NavLink className="nav-link"  to="/login">login</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink className="nav-link"  to="/register">Sign up</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <div>
            
        </div>
        </Fragment>

          {loading && <Loadings />}
          <form className="container my-5 py-3 px-5" onSubmit={submitHandler}>
          <div className="row ">
            <div className="col-md-6 offset-md-3">
            <div className="mb-3 ">
                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                 <input className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp"
                     type="email" 
                     value={email}
                     placeholder="Email"
                     onChange={(e)=>setEmail(e.target.value)}
                   />

           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
             </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

               <input  className="form-control w-50" id="exampleInputPassword1"
                   type="password" 
                   value={password}
                   placeholder="password"
                   onChange={(e)=>setPassword(e.target.value)}
               />
            </div>
            
            <button type="submit" className="btn btn-primary"  >Login</button>
            <NavLink to="/register"><button type="submit" className="btn btn-primary mx-2">Sign up</button></NavLink>
       
            </div>
         </div>
       </form>
          
        </Fragment>
        
    );
}

export default LoginScreen;


