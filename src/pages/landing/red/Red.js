import React from "react";
import styled from "styled-components";
import HoverButton from "../../../components/HoverButton";
import speaker_a from "../../../styles/images/red/medium17.png";
import speaker_b from "../../../styles/images/red/medium27.png";

function Red({ handlePlayMusic }) {
  return (
    <Wrapper>
      <ContainWrapper speaker_a={speaker_a} speaker_b={speaker_b}>
        <div className="left">
          <h1 className="title">superior sound</h1>
          <p className="subtitle">
            Experience live versions of your <br />
            favourite songs.
          </p>
          <HoverButton text={"see demo"} size="big" />
        </div>
        <div className="right" onClick={handlePlayMusic}>
          <div className="speaker">
            <div className="a"></div>
          </div>
          <div className="speaker">
            <div className="b"></div>
          </div>
        </div>
      </ContainWrapper>

      <HoverButton
        text={"see demo"}
        size="small"
        customClass={`top: 40px;right:40px`}
      />
      <div className="cursor"></div>
    </Wrapper>
  );
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
  background-color: ${(props) => props.theme.red};
  .cursor {
    width: 0px !important;
    height: 0px !important;
    border: none;
    border-radius: 0% !important;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
  }
  
  html, body {
    cursor: pointer !important;
    background-color: trasparent;
  }
`;
const ContainWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    flex-direction: column;
    .title {
      color: white;
      margin-bottom: 15px;
      font-size: 3rem;
      letter-spacing: 0.5rem;
      text-transform: uppercase;
    }
    .subtitle {
      color: black;
      margin-bottom: 15px;
      font-size: 1.8rem;
      font-weight: 100;
      line-height: 2rem;
      letter-spacing: 0.3rem;
    }
  }
  .right {
    display: flex;
    cursor: pointer;
    .speaker {
      position: relative;

      width: 250px;
      height: 500px;
      .a {
        width: 250px;
        height: 350px;
        background: url(${(props) => props.speaker_a});
        background-position: center;
        background-size: cover;
      }
      .b {
        position: absolute;
        bottom: 0px;
        width: 250px;
        height: 350px;
        background: url(${(props) => props.speaker_b});
        background-position: center;
        background-size: cover;
      }
    }
  }
`;

export default Red;
