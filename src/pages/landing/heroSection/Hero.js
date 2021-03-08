import React from "react";
import styled from "styled-components";
import LiquidButton from "../../../components/LiquidButton";

function Hero({ current, handelSwitchSlide }, ref) {
  return (
    <Wrapper>
      <div ref={ref} className="sliderBG" />
      <h1 className="title">INTERACTIVE CONCERT EXPERIENCE</h1>
      <p className="subtitle">
        Experience your favourite artists like never <br />
        before and from the comfort of your own home.
      </p>
      <LiquidButton />
      <DotContainer>
        <Dot
          className="dot"
          onClick={() => handelSwitchSlide(0)}
          isCurrent={current === 0 ? true : false}
        ></Dot>
        <Dot
          className="dot"
          onClick={() => handelSwitchSlide(1)}
          isCurrent={current === 1 ? true : false}
        ></Dot>
        <Dot
          className="dot"
          onClick={() => handelSwitchSlide(2)}
          isCurrent={current === 2 ? true : false}
        ></Dot>
      </DotContainer>
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
  .sliderBG {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    filter: brightness(65%);
  }
  .title {
    color: white;
    margin-bottom: 15px;
    text-align: center;
    font-size: 3rem;
    letter-spacing: 0.2rem;
  }
  .subtitle {
    /* border: solid 1px red; */
    color: white;
    margin-bottom: 15px;
    font-size: 1.3rem;
    width: 50%;
    text-align: center;
    font-weight: 100;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  cursor: pointer;
  background-color: ${(props) => (props.isCurrent ? "white" : "none")};
  border: solid 1px white;
`;

export default React.forwardRef(Hero);
