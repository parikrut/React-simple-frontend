import React from "react";
import styled from "styled-components";
import HoverButton from "../../../components/HoverButton";
import soundBox1 from "../../../styles/images/reviews/SmallSpeaker1-03.png"
import soundBox2 from "../../../styles/images/reviews/SmallSpeaker2-03.png"

function Reviews() {
  return <Wrapper>
     <HoverButton
            text={"TRY IT NOW"}
            size="small"
            customClass={`top: 40px;right:40px`}
            path = {'/pricing'}
          />
    <section className='landing blue-marine'> 
      <div id='btn-try-right'>
      </div> 
      <div class='big-container'>
        <div class='img-box'>
          <img id='sound-1' src={soundBox1} alt='sound'/>
          <img id='sound-2' src={soundBox2} alt='sound'/>
        </div>
        <div class='container-blue-marine'>
          <div class='title-box-marine'>
            <h1 class='title-box-white' style={{marginLeft: '2rem'}}>reviews</h1>
          </div>
          <div class='boxes'>
            <div class='box-benefits'>
              <h4 id='stars'>★★★★★</h4>
              <h4 class='box-benefits' id='box-benefits'>ARTIST</h4>
              <p class='benefits-txt'>"Love it. It's the Best! I can't live without it!"</p>
            </div>
            <div class='box-benefits'>
              <h4 id='stars'>★★★★★</h4>
              <h4 class='box-benefits' id='box-benefits'>PRODUCER</h4>
              <p class='benefits-txt'>"Love it. It's the Best! I can't live without it!"</p>
            </div>
            <div class='box-benefits'>
              <h4 id='stars'>★★★★★</h4>
              <h4 class='box-benefits' id='box-benefits'>MUSIC FAN</h4>
              <p class='benefits-txt'>"Love it. It's the Best! I can't live without it!"</p>
            </div>
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
  background-color: ${(props) => props.theme.blue};
  #sound-1 {
    height: 400px;
    width: auto;
    object-fit: none;
  }
  #sound-2 {
    height: 400px;
    width: auto;
    object-fit: none;
  }
  
  #stars{
    color:black;
    font-size: 22px;
    letter-spacing: 5px;
    margin-block-start:0;
    margin-block-end:0;
  }
  .title-box-white {
    margin-block-start:0;
    margin-block-end:0;
    padding-top: 0px;
    color:rgb(255, 255, 255);;
    letter-spacing: 1px;
    font-size: 48px;
    font-weight: 600;
    padding-left: 0;
    
    text-transform: uppercase;
    text-align: start;
  }
  .img-box {
    display: block;
    padding-left: 130px;
    margin-right: 1.5cm;
    margin-top: 5rem;
  }
  .big-container{
    display: flex;

  }
.container-blue-marine{
  margin-top: 20rem;
}
  
  .title-box-marine {
    
    color:white;
    letter-spacing: 4px;
    font-size: 44px;
    font-weight: 500;
    height: 50px;
  }
  
  #sel-white-blue-float {
    width: 120px;
    top:0;
    right:0;
    position:relative;
    font-weight: 700;
    background-color: white;
    border-color: white;
    color:rgb(105, 222, 231);
  }

  
  
  .boxes {
    display: flex;
    justify-content: space-around;
    width: 800px;
  }
  .title-box {
    padding-left: 50px;
    color:white;
    letter-spacing: 4px;
    font-size: 44px;
    font-weight: 500;
    height: 90px;
  }
  .box-benefits {
    padding-top: 3px;
    display: block;
    width: 195px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-block-start: 0.3em;
    margin-block-end: 0.3em;
    text-align: start;
  }
  
  .benefits-txt {
    color:rgb(25, 25, 25);
    font-size: 18px;
    font-weight: 500;
    text-align: start;
    margin-block-start: 0.1em;
    margin-block-end: 0.3em;
  }

`;

export default Reviews;
