import React from "react";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Pricing() {
    return <Wrapper>
        <section class='plans-container'>
            <div class='container'>
                <div id='pricing'>
                    <h1 id='pricing-ttl'>PRICING</h1>
                    <p class='pricing-txt'>Test our app today! Choose from three subscription</p>
                    <p class='pricing-txt'>Based payment models.</p>
                </div>
                <div class='boxes-plans'>
                    <div class='box'>
                        <div class='plan-ttl-box'>
                            <h4 class='plan-ttl'>BASIC</h4>
                            <hr id='red-line' />
                            <h4 class='plan-ttl-period'>MONTHLY</h4>
                        </div>
                        <p class='plan-ttl-price'>$9</p>
                        <ul id='fnt-white'>
                            <li> Very good</li>
                            <li> Amazing</li>
                            <li> Perfect Job</li>
                            <li> Love this</li>
                            <li> It's so good</li>
                            <li> Features</li>
                        </ul>
                        <button class='select-btn' id='sel-red'> SELECT</button>
                    </div>
                    <div class='box'>
                        <div class='plan-ttl-box'>
                            <h4 class='plan-ttl' id='fnt-yellow'>ADVANCED</h4>
                            <hr id='yellow-line' />
                            <h4 class='plan-ttl-period' id='fnt-yellow'>YEARLY</h4>
                        </div>
                        <p class='plan-ttl-price' id='fnt-yellow'>$99</p>
                        <ul id='fnt-white'>
                            <li> Very very good</li>
                            <li> Even Amazing</li>
                            <li> Perfect Job</li>
                            <li> Love this more</li>
                            <li> It's so so good</li>
                            <li> More Features</li>
                        </ul>
                        <button class='select-btn' id='sel-yellow'> SELECT</button>
                    </div>
                    <div class='box'>
                        <div class='plan-ttl-box'>
                            <h4 class='plan-ttl' id='fnt-blue'>PRO</h4>
                            <hr id='blue-line' />
                            <h4 class='plan-ttl-period' id='fnt-blue'>YEARLY</h4>
                        </div>
                        <p class='plan-ttl-price' id='fnt-blue'>$120</p>
                        <ul id='fnt-white'>
                            <li> Very very good</li>
                            <li> Even more</li>
                            <li> Perfect Job</li>
                            <li> Love this more</li>
                            <li> It's so so good</li>
                            <li> More Features</li>
                        </ul>
                        <button class='select-btn' id='sel-blue'> SELECT</button>
                    </div>
                </div>
            </div>
        </section>
        <section class='red'>
            <div class='container'>
                <div class='title-box-perks'>
                    <h1 class='title-box-perks' >PERKS</h1>
                </div>
                <div class='boxes-perks'>
                    <div class='box-benefits-perks'>
                        <hr id='white-line' />
                        <h4 class='box-benefits-ttl'>Subscription Payment Model</h4>
                        <p class='benefits-txt-perks'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>

                    <div class='box-benefits-perks'>
                        <hr id='white-line' />
                        <h4 class='box-benefits-ttl'>No Fee Cancelation Policy</h4>
                        <p class='benefits-txt-perks'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>

                    <div class='box-benefits-perks'>
                        <hr id='white-line' />
                        <h4 class='box-benefits-ttl'>Subscription Payment Model</h4>
                        <p class='benefits-txt-perks'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
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
    </Wrapper>;
}
const Wrapper = styled.section`
background-color: ${(props) => props.theme.black};
.plans-container {
  width: 100%;
  height: 100vh;
  font-family: 'Work Sans', sans-serif;
}
.container {
  height: 100%;
  display:block;
  padding-top: 50px;
  padding-left: 210px;
  padding-right: 330px;
  font-family: 'Work Sans', sans-serif;
  padding-top: 10rem;
}
#pricing {
  display: block;
  color: white;
}
#pricing-ttl {
  
  font-size: 40px;
  font-weight: 600;
  text-align: start;
  margin-block-end: 0.5rem;
  
}
.pricing-txt {
  
  font-size: 24px;
  text-align: start;
  margin-block-end: 0;
  margin-block-start: 0.5rem;

}
.boxes-plans {
  display: flex;
  justify-content: space-between;
  padding-top: 70px;
  height: 100%;
  width:1000px
  
}

.boxes-perks {
  display: flex;
  justify-content: space-between;
  padding-top: 70px;
  height: 100%;
  width: 1000px
}
.box {
  display:block;
  justify-content: flex-start;
  align-content: flex-start;
}

.plan-ttl {
  color: ${(props) => props.theme.red};
  font-size: 22px;
  margin-block-start: 0.3em;
  margin-block-end: 0.3em;
  text-align: start;
  padding-left: -10px;
}
.plan-ttl-period {
  text-align: start;
  color: ${(props) => props.theme.red};
  font-size: 28px;
  margin-block-start: 0.3em;
  margin-block-end: 0.02em;

}
.plan-ttl-price {
  text-align: start;
  color: ${(props) => props.theme.red};
  font-size: 72px;
  font-weight: 600;
  padding: 0;
  height: 38px;
  margin-block-start: 0.1em;
  
}
#red-line {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 0;
  margin-right: auto;
  border-style: inset;
  border: 1px solid ${(props) => props.theme.red};
  color: ${(props) => props.theme.red};
  background-color: ${(props) => props.theme.red};
  width: 1.8cm;
}
#yellow-line {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 0;
  margin-right: auto;
  border-style: inset;
  border: 1px solid ${(props) => props.theme.yellow};
  width: 1.8cm;
  color:${(props) => props.theme.yellow};
}
#blue-line {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 0;
  margin-right: auto;
  border-style: inset;
  border: 1px solid ${(props) => props.theme.blue};
  width: 1.8cm;
  color:${(props) => props.theme.blue};
  
}
#fnt-yellow {
  color:${(props) => props.theme.yellow};
}
#fnt-blue {
  color:${(props) => props.theme.blue};
}
#fnt-white {
margin-top: 4rem;
  color: rgb(218,218,218);
  font-size: 26px;
  font-weight: 400;
}
.select-btn {
  border-radius: 2.5rem;
  border: 0;
  font-size: 13px;
  height: 45px;
  line-height: 1.2rem;
  margin-right: 1rem;
  width: 9rem;
  border-width: 2px;
  border-style: solid;
  color: white;
}
#sel-red {
  background-color: ${(props) => props.theme.red};
  border-color: ${(props) => props.theme.red};
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
}
#sel-yellow {
  background-color: ${(props) => props.theme.yellow};
  border-color: ${(props) => props.theme.yellow};
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
}
#sel-blue {
  background-color: ${(props) => props.theme.blue};
  border-color: ${(props) => props.theme.blue};
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
}
.red {
  width: 100%;
  height: 794px;
  background-color: ${(props) => props.theme.red};
  font-family: 'Work Sans', sans-serif;
}
#white-line {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 0;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  color: ${(props) => props.theme.red};
  background-color: ${(props) => props.theme.red};
  width: 1.4cm;
}

.title-box-perks {
  display: flex;
  position: relative;
  padding-top: 40px;
  letter-spacing: 3px;
  color:white;
  font-size: 44px;
  font-weight: 700;
  height: 90px;
  text-align: start;
}
.box-benefits-ttl {
  display: block;
  width: 205px;
  color: white;
  font-size: 27px;
  font-weight: 700;
  letter-spacing: 3px;
  text-align: start;
  margin-block-start: 0.3em;
  margin-block-end: 0.3em;
}
.box-benefits-perks {
  padding-top: 50px;
  width: 270px;
  justify-content: space-around;
}

.box-benefits-red {
  color: ${(props) => props.theme.red};
}
ul {
  text-align: start;
  list-style-type: "♪ ";
  margin-left: 0;
  padding-left: 18px;
  padding-right: 3px;
  font-size: 16px;
}

li {
  list-style-type: "♪ ";
  font-size: 26px;
  font-weight: 500;
  margin-block-end: 0.1em;
  letter-spacing: 2px;
}

.benefits-txt-perks {
  color:rgb(25, 25, 25);
  font-size: 22px;
  font-weight: 400;
  text-align: start;
  letter-spacing: 1px;
  margin-block-start: 0.1em;
  margin-block-end: 0.3em;
}
.blue {
  width: 100%;
  height: 200px;
  background-color: rgb(87, 60, 201);
  font-family: 'Work Sans', sans-serif;
}

#contact {
  font-size: 20px;
  color: white;
  font-weight: 400;
  padding-left: 90px;
  padding-top: 20px;
  font-stretch: expanded;
  font-family: 'Work Sans', sans-serif;
}
#brand {
  display: block;
  align-self: flex-end;
  justify-self: center;
  color: white;
  font-size: 30px;
  padding-left: 25%;
  bottom: 0;
  padding-top: 35px;
  margin-block-end: 0.3em;
}

#footer {
  position: relative;
  color: white;
  padding-left: 35%;
  bottom: 0px;
  height: 100%;
  
  padding-bottom: 40px;
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
`

export default Pricing;