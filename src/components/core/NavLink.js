import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledNavLink = styled(Link)``;

const NavLink = ({ to }) => {
  return <StyledNavLink to={to}>Homepage</StyledNavLink>;
};
export default NavLink;
