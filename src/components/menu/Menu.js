import React from "react";
import styled from "styled-components/macro";
import { css } from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Menu({ isOpened, handleOpen, links, specialColor }) {
  return (
    <Wrapper>
      <MenuCircle isOpened={isOpened} />
      <div
        css={`
          display: flex;
          align-items: center;
        `}
      >
        <Burger
          onClick={handleOpen}
          isOpened={isOpened}
          specialColor={specialColor}
        ></Burger>
        <TextWrapper isOpened={isOpened} specialColor={specialColor}>
          <h1 className="text">EXP</h1>
          <div className="decoration" />
          <h1 className="text">CON</h1>
        </TextWrapper>
      </div>
      <LinkWrapper isOpened={isOpened}>
        {links.map((link, index) =>
          link.text !== "perks" ? (
            <li key={index} className={link.class}>
              <StyledLink
                to={link.path}
                $isSelected={link.isSelected}
                $specialColor={specialColor}
              >
                {link.text}
              </StyledLink>
            </li>
          ) : (
            <li key={index} className={link.class}>
              <StyledHashLink
                to={`/${link.path}`}
                $isSelected={link.isSelected}
                $specialColor={specialColor}
              >
                {link.text}
              </StyledHashLink>
            </li>
          )
        )}
      </LinkWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  /* border: solid 1px red; */
  position: absolute;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 40px;
  left: 40px;
  color: white;
  z-index: 1000;
`;

const MenuCircle = styled.div`
  position: absolute;
  top: -235px;
  left: -235px;
  width: 500px;
  height: 500px;
  border-radius: 100%;
  transform-origin: center;
  background-color: #0b0b0b;
  transform: scale(0, 0);
  transition: 0.3s;
  z-index: -1;
  ${(props) =>
    props.isOpened &&
    css`
      transform: scale(1, 1);
    `};
`;

const Burger = styled.div`
  position: relative;
  width: 35px;
  height: 23px;
  border: solid 4px
    ${(props) => (props.isOpened ? props.specialColor : "white")};
  border-left: none;
  border-right: none;
  margin-right: 20px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 4px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: ${(props) =>
      props.isOpened ? props.specialColor : "white"};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  .text {
    font-size: 1.8rem;
    font-weight: 100;
    letter-spacing: 0.2rem;
    color: ${(props) => (props.isOpened ? props.specialColor : "white")};
  }
  .decoration {
    width: 2px;
    background-color: ${(props) =>
      props.isOpened ? props.specialColor : "white"};
    margin: 0px 0.4rem 0px 0.2rem;
    transform: translateY(3.5px);
  }
`;

const LinkWrapper = styled.ul`
  margin-top: 25px;
  width: 0px;
  height: 0px;
  transition: 0.2s;
  overflow: hidden;
  ${(props) =>
    props.isOpened &&
    css`
      width: 180px;
      height: 130px;
    `};

  li {
    /* border: solid 1px blue; */
    list-style: none;
    margin-bottom: 10px;
    pointer-events: none;
    cursor: default;
    opacity: 0;
    transition: 0.2s;
    a {
      font-size: 1.6rem;
      font-weight: 600;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
  li.landing {
    width: 175px;
    transform: translateY(10px);
    ${(props) =>
      props.isOpened &&
      css`
        pointer-events: auto;
        cursor: pointer;
        opacity: 1;
        transform: translateY(0px);
      `};
  }
  li.perks {
    width: 110px;
    transition-delay: 0.1s;
    transform: translateY(10px);
    ${(props) =>
      props.isOpened &&
      css`
        pointer-events: auto;
        cursor: pointer;
        opacity: 1;
        transform: translateY(0px);
      `};
  }
  li.pricing {
    width: 135px;
    transition-delay: 0.2s;
    transform: translateY(10px);
    ${(props) =>
      props.isOpened &&
      css`
        pointer-events: auto;
        cursor: pointer;
        opacity: 1;
        transform: translateY(0px);
      `};
  }
`;
// The $ sign is used to tell styled-component that this prop is not passed to the Link tag.
const StyledLink = styled(Link)`
  color: ${(props) => (props.$isSelected ? props.$specialColor : "white")};
`;
const StyledHashLink = styled(HashLink)`
  color: ${(props) => (props.$isSelected ? props.$specialColor : "white")};
`;

export default Menu;
