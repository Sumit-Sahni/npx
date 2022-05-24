import React, { Fragment} from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import { NavLink} from "react-router-dom";



const RegisterScreen = () => {
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conform, setConform] = useState("");
    const [loading, setLoading] = useState(false);
    const [pic, setpic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [describe, setDescribe] = useState("");
    const [phone, setPhone] = useState("");
    
    const postDetail = (pic) =>{
      if(!pic){
         return alert("Please Select an Image");
      }if( pic.type === "image/png" || pic.type === "image/jpeg"){
         
     const data = new FormData();
     data.append("file", pic);
     data.append("upload_preset", "sumitsahni");
     data.append("cloud_name", "djznye1yd");
     fetch("https://api.cloudinary.com/v1_1/djznye1yd/image/upload",{
       method: "post",
       body: data
     })
     .then(res => res.json())
     .then(data => {
       console.log(data);
       setpic(data.url);
       console.log(data);
     })
     .catch(err => {
       console.log(err);
       console.log("error");
      })
      }else{
           alert("Please Select an Image");
      }
      }
         
  

    const submitHandler =  async(e) => {
          e.preventDefault();
        if (password !== conform) {
            alert("Password does not match");
        }
        else{

          try{
            setLoading(true);
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
              setLoading(true);
             const {data} = await axios.post("/api/users",
              {
                  email,
                  password,
                  name,
                  pic,
                  describe,
                  phone,
              },
              config
              
              );
        
                console.log(data);
                localStorage.setItem("userInfo", JSON.stringify(data));
                setLoading(false);
                alert("Registration Successful");
               
                
      }catch(error){
            setLoading(false);
            alert("Check Your Email and Password"); 
        }
        
      }
        setName("");
        setEmail("");
        setPassword("");
        setConform("");
        setpic("");
        setDescribe("");
       
      
        

        
    }

     
     
    return (

    <Fragment>
        <Fragment>
            <nav className="navbar navbar-expand-lg  bg-body navbar-fixed-top p-5">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">

          <NavLink to="/" className="nav-link active" aria-current="page">About</NavLink>
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
    {loading && <Loading />}
    <form className="container my-5 py-1 px-4" onSubmit={submitHandler}>
    <div className="row ">
      <div className="col-md-6 offset-md-3">
          
      <div className="mb-3 ">
           <label htmlFor="name" className="form-label">Name</label>
           <input className="form-control w-50" id="name" aria-describedby="emailHelp"
              type="name" 
                value={name}
                placeholder="Full Name"
                onChange={(e)=>setName(e.target.value)}
             
             />
       </div>

       <div className="mb-3 ">
           <label htmlFor="email" className="form-label">Email address</label>

           <input className="form-control w-50" id="email" aria-describedby="emailHelp"
               type="email" 
               value={email}
               placeholder="Email"
               onChange={(e)=>setEmail(e.target.value)}
             />

          <div id="emailHelp" className="form-text">We'll never share your email and password with anyone else.</div>
       </div>

       <div className="mb-3">
          <label htmlFor="file" className="form-label">Profile picture</label>
          <input className="form-control w-50" id="file"
           onChange={(e)=> postDetail(e.target.files[0])}
            type="file"
            placeholder="Upload Image"
            
          />
          {/* <button onClick={()=>postDetail()}>upload</button> */}
      </div>

      <div className="mb-3">
          <label htmlFor="current-password" className="form-label">Password</label>
          <input  className="form-control w-50" id="current-password"
             type="password" 
             value={password}
             placeholder="password"
             onChange={(e)=>setPassword(e.target.value)}
            />
      </div>

      <div className="mb-3">
          <label htmlFor="confpassword" className="form-label">Password</label>
          <input  className="form-control w-50" id="confpassword"
               type="password" 
               value={conform}
               placeholder="conform password"
               onChange={(e)=>setConform(e.target.value)}
            />
      </div>
      <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone No.</label>
          <input  className="form-control w-50" id="phoneNumber"
               type="text" 
               value={phone}
               placeholder="Phone No."
               onChange={(e)=>setPhone(e.target.value)}
            />
      </div>
      <div className="form-group mb-3">
             <label htmlFor="exampleFormControlTextarea1" className="mb-3">Describe Yourself in detail <span></span></label>
             <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  
               type="text"
                value={describe}
                placeholder="Describe Yourself "
                onChange={(e)=>setDescribe(e.target.value)}
             ></textarea>
      </div>

      
      <button type="submit" className="btn btn-primary">Register</button>
      <NavLink to="/login"><button  className="btn btn-primary mx-2">Login</button></NavLink>
 
      </div>
   </div>
 </form>
    
  </Fragment>
    );
}

export default RegisterScreen;