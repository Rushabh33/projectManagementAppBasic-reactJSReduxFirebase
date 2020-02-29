import React from "react";
import styled from "styled-components";

import NavLink from "../core/NavLink";

const NavWrapper = styled.div``;

const Container = styled.div``;

const Navbar = () => {
  return (
    <NavWrapper>
      <Container>
        <NavLink to="/homepage" />
      </Container>
    </NavWrapper>
  );
};

export default Navbar;
