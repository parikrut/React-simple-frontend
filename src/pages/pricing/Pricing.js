import React from "react";
import styled from "styled-components";
import Pricingcontainer from "./pricing/pricingcontainer"
import Menu from '../../components/menu/MenuContainer'
function Pricing() {
  return (
    <Wrapper>
      <Menu />

      <Pricingcontainer />
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
export default Pricing;
