import React from "react";

const FrontEndProjectsLinks = () => {
    return(

        
            <div className="row">
                <div className="col-md-12 col-lg-12 p-5" >
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div className="carousel-inner text-center p-5">
    <div className="carousel-item active">
      
      <h4 className="title "><a href={"https://sumit-sahni.github.io/dashboard/"}>Dashboard</a></h4>
      <p className="description">This page consist simple front-end of Trade type Dashboard which show's infromation about users and their profile.</p>
    </div>
    <div className="carousel-item">
        <h4 className="title"><a href={"https://sumit-api.herokuapp.com/"}>Random API's</a></h4>
        <p className="description">Based on fetching random users from API'S where you can search about that particular person and their details.</p>
    </div>
    <div className="carousel-item">
        <h4 className="title"><a href={"https://api-react-nasa.herokuapp.com/"}>NASA API'S</a></h4>
        <p className="description">This one is interesting called NASA API'S. Here they upload one photo/video per day of about diffrent Galaxyies and their details. </p>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon text-bg-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>
    
     
        
    );
}

export default FrontEndProjectsLinks;