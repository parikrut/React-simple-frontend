import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { css } from "styled-components";

function HoverButton({ text, size = "big", path = "/", customClass }) {
  const [coordinate, setCoordinate] = React.useState({ x: 0, y: 0 });

  const buttonRef = React.useRef();
  const handleListener = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    setCoordinate({ x, y: e.offsetY });
  };
  React.useEffect(() => {
    // Need to copy the ref here. Otherwise the ref will not exist while performing cleanup.
    const copiedRef = buttonRef.current;

    copiedRef.addEventListener("mousemove", handleListener);
    return () => {
      return copiedRef.addEventListener("mousemove", handleListener);
    };
  }, []);

  return (
    <Link id="parent" to={path}>
      <Button
        ref={buttonRef}
        $coordinate={coordinate}
        $size={size}
        className="button"
        css={customClass}
      >
        <span>{text}</span>
      </Button>
    </Link>
  );
}

const Button = styled.button`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: white;
  padding: ${(props) => (props.$size !== "big" ? "0.8em 2.7em" : "1em 3em")};
  border: none;
  color: ${(props) => props.theme.red};
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 100px;

  span {
    position: relative;
    pointer-events: none;
    font-size: ${(props) => (props.$size !== "big" ? "0.7em" : "1em")};
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  &::before {
    --size: 0;
    position: absolute;
    content: "";
    width: var(--size);
    height: var(--size);
    left: ${(props) => props.$coordinate.x}px;
    top: ${(props) => props.$coordinate.y}px;
    background: radial-gradient(
      circle closest-side,
      #4405f7,
      #3ed4e7,
      transparent
    );
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }

  &:hover::before {
    --size: 400px;
  }
`;

export default HoverButton;
