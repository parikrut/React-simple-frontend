import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { Link } from 'react-router-dom'
import HoverButton from "../../../components/HoverButton";
import image4 from "../../../styles/images/yellow/Image 4.png";

function Yellow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const yellowSection = useRef();
  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const handleLinkHoverEvents = () => {
    yellowSection.current.querySelectorAll("div").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const addEventListeners = () => {
    yellowSection.current.addEventListener("mousemove", onMouseMove);
    yellowSection.current.addEventListener("mouseenter", onMouseEnter);
    yellowSection.current.addEventListener("mouseleave", onMouseLeave);
    yellowSection.current.addEventListener("mousedown", onMouseDown);
    yellowSection.current.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    yellowSection.current.removeEventListener("mousemove", onMouseMove);
    yellowSection.current.removeEventListener("mouseenter", onMouseEnter);
    yellowSection.current.removeEventListener("mouseleave", onMouseLeave);
    yellowSection.current.removeEventListener("mousedown", onMouseDown);
    yellowSection.current.removeEventListener("mouseup", onMouseUp);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const cursorClasses = classNames(
    'cursor',
    {
      'cursor--clicked': clicked,
      'cursor--hidden': hidden,
      'cursor--link-hovered': linkHovered
    }
  );
  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Wrapper ref={yellowSection}>
      <div className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }} />
        <section className='yellow'>
          <div id='btn-try-right'>
            <Link to="/plans">
              <form action="/tryit" method="get" target="_blank">
              </form>
            </Link>
          </div>
          <div class='img-bckgrnd'>
            <div class='front-row-container'>
              <div class='front-box' id='front-box-double-img'>

              </div>
              <div class='front-box' id='front-box-double-img-scd'>

              </div>
              <div class='front-box'>
                <h1 id='front-ttl'>front row seats</h1>
                <p id='front-txt'>Experience concerts up close and personal.</p>
                <HoverButton text={"see demo"} size="big" />
              </div>
              <div class='front-box' id='front-box-single-img'>
              </div>
            </div>
          </div>
          <HoverButton
            text={"TRY IT NOW"}
            size="small"
            customClass={`top: 40px;right:40px`}
          />
        </section>
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
  z-index: 1;
  background-color: ${(props) => props.theme.yellow};
  .cursor {
    width: 100px;
    height: 100px;
    border: 2px solid #fefefe;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: all 150ms ease;
    transition-property:  opacity, background-color, transform, mix-blend-mode;
  }
  .cursor--hidden {
    opacity: 0;
  }
  .cursor--clicked {
    transform: translate(-50%, -50%) scale(0.9);
    background-color: #fefefe;
  }
  .cursor--link-hovered {
    transform: translate(-50%, -50%) scale(1.25);
    background-color: #fefefe;
  }
  .img-bckgrnd{
    background-image: url('${image4}');
    z-index: 100;
  }
  
  .front-row-container{
    display:flex;
    justify-content: flex-end;
    align-content: flex-end;
    padding-left: 100px;
    padding-top: 100px;
    width: 100%;
    height: 600px;
    background-color: ${(props) => props.theme.yellow};
    
  }
  .front-box{
    padding: 20px;
    width:700px;
  }
  #front-box-double-img {
    background-color: r${(props) => props.theme.yellow};
    background-image: url('${image4}');
    background-size: 67%;
    background-position: 25% 25% !important;
    background-attachment: fixed;
    height: 350px;
    width: 350px;
    border-radius: 100%;
    margin-bottom: 100px;
    margin-right: 100px;
    margin-top: 90px;
    overflow:hidden;
    position:relative;
  }
  #front-box-double-img-scd {
    background-color: transparent;
    background-image: url('${image4}');
    background-size: 67%;
    background-position: 25% 25% !important;
    background-attachment: fixed;
    height: 210px;
    width: 210px;
    border-radius: 50%;
    margin-bottom: 200px;
    right:65%;
    
    position:absolute;
  }
  #front-box-single-img {
    background-color: transparent;
    background-image: url('${image4}');
    background-size: 450%;
    background-position: 90% 67% ;
    background-attachment: relative;
    background-repeat: no-repeat;
    height: 300px;
    width: 300px;
    border-top-left-radius: 95%;
    margin-left: 0;
    margin-bottom:0;
    margin-top: 24.7%;
    
  }
  #front-ttl {
    margin-top: 5rem;
    color: rgb(255, 255, 255);
    font-size: 44px;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: start;
  }
  
  #front-txt {
    display: block;
    width: auto;
    color: rgb(0, 0, 0);
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 3px;
    text-align: start;
    
  }
`;
export default Yellow;
