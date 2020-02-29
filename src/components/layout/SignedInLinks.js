import React from "react";
import styled from "styled-components";

import NavLink from "../core/NavLink";

const SignedInList = styled.ul``;

const Container = styled.div``;

const Navbar = () => {
  return (
    <SignedInList>
      <li>
        <NavLink to="/" />
        New Project
      </li>
      <li>
        <NavLink to="/" />
        Log Out
      </li>
      <li>
        <NavLink to="/" />
        Profile
      </li>
    </SignedInList>
  );
};

export default Navbar;
