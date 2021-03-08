import React from "react";
import styled from "styled-components";
import LiquidButton from "../../../components/LiquidButton";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function GetExp() {
  return (
    <Wrapper>
       <section class='black-scnd'>
      <div class='boxes-container-black-scnd'>
        <div class='title-box-black-scnd'>
          <h1 class='title-box-red'>Get exp|con now</h1>
          <p id='txt-black'>Purchase and download the app.</p>
        </div>
        <div id='btn-try-center-mix' style={{marginTop:'7rem'}}>
          <LiquidButton/>
        </div> 
      </div>
       
    </section>
    <section className='landing blue'>
      <div class='container-botton'>
        <div class='contact-box' id='contact'>
          <p id='contact'><FontAwesomeIcon icon={faEnvelope} /><span  style={{marginLeft:'1rem', fontSize:'20px'}}> support@experienceconcerts.co</span></p>
        </div>
        <div id='brand-footer'>
        
          <p id='brand-footer-link'>EXP <span style={{fontWeight:'100'}}>|</span> CON</p>
          
        </div>
        <p id='footer-f'>2019 © All Rights Reserved | Speer Technologies Incorporated</p> 
      </div>
      
    </section>
    
    </Wrapper>
  );
}

const Wrapper = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;
padding: 10px;
height: 100vh;
width: 100%;
background-color: ${(props) => props.theme.black};

.black-scnd{
  width: 100%;
  height: 500px;
  
}

.boxes-container-black-scnd {
  display:flex;
  justify-content: space-around;
  padding-top: 90px;
}


.title-box-black-scnd {
  display: block;
  padding-left: 50px;
  color:white;
  letter-spacing: 4px;
  font-size: 44px;
  font-weight: 500;
  height: 90px;
  text-align: start;
}


.title-box-red {
  padding-left: 50px;
  padding-top: 90px;
  color:${(props) => props.theme.red};
  letter-spacing: 1px;
  font-size: 48px;
  font-weight: 600;
  height: 90px;
  
  text-transform: uppercase;
  margin-bottom:2rem;
}

#txt-black{
  font-size: 34px;
  font-weight: 300;
  letter-spacing: 1px;
  padding-left: 50px;
  padding-top: 45px;
}
.blue {
  width: 100%;
  height: 200px;
  background-color: rgb(87, 60, 201);
  
}

#contact {
  display:flex;
  font-size: 20px;
  color: white;
  font-weight: 400;
  padding-left: 90px;
  padding-top: 20px;
  font-stretch: expanded;
  
}
#brand-footer {
  text-decoration:none;
  text-align: center;
  color: white;
  font-size: 30px;
  padding-top: 35px;
  margin-block-end: 0;
  background-color: rgb(87, 60, 201);
}
#brand-footer-link {
  
  text-align: center;
  color: white;
  font-size: 30px;
  padding-top: 35px;
  margin-block-end: 0;
  background-color: rgb(87, 60, 201);
}

#footer-f {
  position: relative;
  color: white;
  margin-top: 0;
  bottom: 0px;
  height: 100%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: rgb(87, 60, 201);
}

#mail {
  height: 16px;
  width: auto;
}
  `;

export default GetExp;
