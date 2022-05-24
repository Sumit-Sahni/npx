
import React, {Fragment} from "react";
import { UserImage } from "./styled/Welcome.styled";


const Welcome = () => {

 const auth = localStorage.getItem("userInfo");
 
    return (
     <Fragment>
      <nav className="navbar navbar-expand-lg bg-body p-5">
  <div className="container-fluid">
  <li className="nav-link">{(JSON.parse(auth).name)}</li>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto  mb-lg-0">
        <li className='nav-item'>
        <button className="nav-link   bg-body" style={{border:"none"}} onClick={()=>{
           localStorage.removeItem("userInfo");
               window.location.href = "/";
           }}>Sign out</button> 
        </li>
      </ul>
    </div>
  </div>
      </nav>
       <div className="container">
         <div className="row p-5">
             <div className="col-lg-4 ">
                <figure className="figure d-flex justify-content-center">
                  <UserImage>
                       <img src={(JSON.parse(auth).pic)} className="figure-img img-fluid rounded " alt="avatar"/>
                  </UserImage>
                    <figcaption className="figure-caption text-centerc"></figcaption>
                 </figure>
                </div>
             <div className="col-lg-8">
             <div className="jumbotron">
                          <h1 className="display-4">Hello, {JSON.parse(auth).name}</h1>
                          <p className="lead">{JSON.parse(auth).describe}</p>
                          <hr className="my-4"/>
                          <p className="lead">
                          <footer className="blockquote-footer  d-flex justify-content-start my-2">
                            <small className="text-muted ">
                              <cite title="Source Title">{JSON.parse(auth).name}</cite>
                            </small>
                       </footer>
                          </p>
               </div>
             </div>
         </div>
       </div>
           <div className="container">
              <div className="row">
                <div className="col-lg-12">
                   <div className="jumbotron jumbotron-fluid">
                               <div className="container">
                                 <h1 className="display-4">Site under continuation</h1>
                                 <p className="lead">Thanks for Connecting.({JSON.parse(auth).name})</p>
                               </div>
                   </div>
                   </div>
              </div>
           </div>
      </Fragment>
    )
}

export default Welcome;