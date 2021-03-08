import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HoverButton from "../../../components/HoverButton";

function Perks() {
  return <Wrapper id="perks">
    <HoverButton
            text={"TRY IT NOW"}
            size="small"
            customClass={`top: 40px;right:40px`}
            path = {'/pricing'}
          />
    <section class='black'>
      <div id='btn-try-right-mix'>
      </div> 
      <div class='container-black'>
        <div class='title-box'>
          <h1 class='title-box-black' style={{marginBottom: '5rem'}}>PERKS</h1>
        </div>
        <div class='boxes-black'>
          <div class='box-benefits-black'>
            <hr id='bnf-red-line'/>
            <h4 class='box-benefits-black' id='box-benefits-red-black'>Subscription Payment Model</h4>
            <p class='benefits-txt-white'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
          <div class='box-benefits-black'>
            <hr id='bnf-blue-line'/>
            <h4 class='box-benefits-black' id='box-benefits-blue-black'>No Fee Cancelation Policy</h4>
            <p class='benefits-txt-white'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
          <div class='box-benefits-black'>
            <hr id='bnf-yellow-line'/>
            <h4 class='box-benefits-black' id='box-benefits-yellow-black'>Subscription Payment Model</h4>
            <p class='benefits-txt-white'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
        </div>
      </div> 
    </section>
  </Wrapper>;
}

const Wrapper = styled.section`
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
  .black {
    width: 100%;
    background-color: ${(props) => props.theme.black};
    
  }
  .container-black {
    height: 100%;
    width:900px;
    display:block;
    padding-top: 50px;
    padding-left: 180px;
    padding-right: 330px;
    
  }
  
  .title-box {
    display: contents;
    position: relative;
    padding-top: 40px;
    letter-spacing: 3px;
    color:white;
    font-size: 24px;
    font-weight: 700;
    height: 90px;
    text-align: start;
  }
  .title-box-black {
    font-size: 44px;
    padding-left: 50px;
  }
  
  .box-benefits-black {
    padding-left: 0;
    width: 250px;
    justify-content: space-between;
  }
  
  #box-benefits-red-black {
    text-align: start;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-block-start: 10px;
    color: ${(props) => props.theme.red};
  }
  #box-benefits-yellow-black {
    text-align: start;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-block-start: 10px;
    color: ${(props) => props.theme.yellow};
  }
  #box-benefits-blue-black {
    text-align: start;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-block-start: 10px;
    color: ${(props) => props.theme.blue};
  }
  #bnf-blue-line {
    display: block;
    margin-top: 0.5em;
    margin-block-end: 0;
    margin-left: 0;
    margin-right: auto;
    border-style: inset;
    color: rgb(105, 222, 231);
    background-color: ${(props) => props.theme.blue};
    border: 1px solid ${(props) => props.theme.blue};
    width: 1.4cm;
  }
  #bnf-red-line {
    display: block;
    margin-top: 0.5em;
    margin-block-end: 0;
    margin-left: 0;
    margin-right: auto;
    border-style: inset;
    color:rgb(195, 82, 77);
    background-color: ${(props) => props.theme.red};
    border: 1px solid ${(props) => props.theme.red};
    width: 1.4cm;
  }
  
  #bnf-yellow-line {
    display: block;
    margin-top: 0em;
    margin-block-end: 0;
    margin-left: 0;
    margin-right: auto;
    border-style: inset;
    color: rgb(244, 181, 87);
    background-color:${(props) => props.theme.yellow};
    border: 1px solid ${(props) => props.theme.yellow};
    width: 1.4cm;
  }
  
  .benefits-txt-white {
    color:rgb(255, 254, 254);
    font-size: 20px;
    font-weight: 400;
    text-align: start;
    text-justify:inter-word;
    margin-block-start: 0em;
    margin-block-end: 0.3em;
    margin-top:2rem;
    line-height:1.5;
  }
  
  
  
  .boxes-black {
    display: flex;
    justify-content: space-around;
    width: 1050px;
  }
  
  
  
  
  
`;

export default Perks;
