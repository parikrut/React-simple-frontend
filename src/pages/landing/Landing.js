import React from "react";
import styled from "styled-components";
import Hero from "./heroSection/HeroContainer";
import Red from "./red/RedContainer";
import Yellow from "./yellow/YellowContainer";
import Perks from "./perks/PerksContainer";
import Reviews from "./reviews/ReviewsContainer";
import GetExp from "./getExp/GetExpContainer"
function Landing() {
  return (
    <Wrapper>
      <Hero />
      <Red />
      <Yellow />
      <Perks />
      <Reviews />
      <GetExp/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  margin: 0px;
  padding: 0px; */
`;

export default Landing;
