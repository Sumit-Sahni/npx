import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeContainer} from './styled/Home.styled';
import { AnimationOnbutton, PortfolioImage } from './styled/Animation.styled';
import Avatar from '../Images/avatar4.png';
import BenethHome from './BenethHome';
import FrontEndProjectsLinks from './FrontEndProjects';
const Home = () => {
    return (
         <>
       <HomeContainer>
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-body p-2 my-2">
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
              <div className='container'>
                <div className='row flex-row-reverse my-5'>
                  <div className='col-md-12 col-lg-6'>
                 
                    <PortfolioImage >
                       <figure className="figure d-flex justify-content-center mx-5">
                              <AnimationOnbutton>
                                <img src={Avatar} className="figure-img img-fluid rounded " alt="avatar"/>
                              </AnimationOnbutton>
                             <figcaption className="figure-caption text-centerc"></figcaption>
                        </figure>
                    </PortfolioImage>
                
                  </div>
                  <div className ='col-md-12 col-lg-6 d-flex-row  align-self-center px-3 py-5'>
                  <HomeContainer>
                  <div>
                    <h1>Hi! My name is Sumit.</h1>
                    </div>
                      <div>
                       <p className='py-2'>
                         I’m an <u>Full stack Developer</u>, designer, and UX/UI creator based in India. I love the challenge that creativity brings as I’m constantly inspired to think, create, and design in different ways that are fun, impactful, and innovative. I’m pursuing with a Master degree in Computer Application from Sinhgad Institute of Management (PUNE) and am currently working as a freelance designer. 
                         For the moments I feel stagnant and need to relieve stress, explore new coffee shops, and enjoy creating design. It’s another outlet for me to express myself, document my creative journey, and bring content that I hope is helpful, inspiring, and enjoyable for others.
                       </p>
                       </div>
                       <NavLink to='/login'><button type="button" className="btn btn-dark btn-lg">TALK TO ME</button></NavLink>
                       </HomeContainer>
                       
                    </div>
                </div>

              </div>
        </Fragment>
        </HomeContainer>
         <BenethHome/>
         <FrontEndProjectsLinks/>
        </>
    );
}

export default Home;