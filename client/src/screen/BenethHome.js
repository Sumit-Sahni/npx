import React from "react";
import Design from "../Images/Design.png";
import { Container ,DesignThinkingOvernight, myStyle} from "./styled/BenethHome.styled";


const BenethHome = () => {
   return(
        <>
        <Container style={myStyle}>
            
         <div className="container" >
            <div className="row flex-row-reverse p-4">
                
                    <div className="col-lg-6 col-md-12 ">
               
                         <figure className="figure d-flex justify-content-center ">
                            <img src={Design} className="figure-img img-fluid rounded " alt="avatar"/>

                         </figure>
                         
               </div>
               <div className="col-lg-6 col-md-12 ">
               <DesignThinkingOvernight>
                  <h1>Design</h1>
                  <h1><span style={{color:"#5b66b4"}}>Think</span>ing</h1>
                  <h1 className="mx-3">Overnight</h1>
                  </DesignThinkingOvernight>
             
               </div>
            </div>
         </div>
         </Container>
        </>
   );
}

export default BenethHome;