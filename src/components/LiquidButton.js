import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LiquidButton() {
  return (
    <Button>
      <Link to='/pricing'>
        <div className="btn-mix-noborder" data-text="try it now">
          try it now
      </div>
      </Link>
    </Button>
  );
}

const Button = styled(Link)`
  text-decoration: none;
  text-align: center;
  [class*="btn-"] {
    outline: 0;
    border-radius: 50px;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 3px;
    overflow: hidden;
    position: relative; //absolute
    padding: 1.5em 3.5em;
    text-transform: uppercase;
    -webkit-tap-highlight-color: transparent;
    transition: all 500ms ease-in-out;
    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 100%;
    }
    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  [class*="btn-mix"] {
    &::after {
      background: white;
      border-radius: 120px;
      content: attr(data-text);
      color: #fff;
      -moz-user-select: none;
      user-select: none;
      user-drag: none;
    }
    &::before {
      background: transparent;
      border-radius: 100%;
      top: 50%;
      left: 50%;
      box-shadow: 0 1em 2em 3em rgba(255, 50, 0, 0.9),
        4em 0em 2em 2em rgba(155, 50, 0, 0.8),
        -4em -2em 2em 2em rgba(255, 0, 150, 0.9),
        -4em 2em 2em 4em rgba(0, 0, 150, 0.9),
        0 -3em 2em 3em rgba(120, 250, 0, 0.9),
        2em -1em 2em 2em rgba(50, 10, 200, 0.9);
      width: 0;
      height: 0;
      animation: mix 5s linear infinite;
    }
  }

  @keyframes mix {
    30% {
      box-shadow: 0 -1em 2em 3em rgba(255, 0, 200, 0.9),
        4em -1em 2em 3em rgba(255, 50, 0, 0.9),
        -4em 2em 3em 2em rgba(155, 200, 0, 0.9),
        -4em -2em 2em 2em rgba(200, 0, 150, 0.8),
        0 3em 2em 2em rgba(20, 250, 0, 0.9),
        2em 1em 2em 2em rgba(50, 10, 250, 0.9);
    }

    60% {
      box-shadow: 2em 1em 2em 3em rgba(55, 0, 200, 0.9),
        3em 1em 2em 3em rgba(25, 150, 0, 0.8),
        3em -2em 3em 3em rgba(155, 200, 0, 0.9),
        -4em 2em 2em 3em rgba(200, 0, 50, 0.8),
        0 -3em 2em 3em rgba(200, 250, 0, 0.9),
        -2em 1em 2em 3em rgba(50, 210, 250, 0.8);
    }
  }

  .btn-mix-noborder {
    &::after {
      background: transparent !important;
      color: white !important;
    }
  }
`;

export default LiquidButton;
