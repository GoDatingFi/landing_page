import styled from "styled-components";
import {pixelToRem} from "utils/functions";
import { device } from "./responsive.style";

export const BCSAddress = styled.h1`
  color: var(--text);
  font: var(--font-heading-1);
  
  @media ${device.mobile} {
    text-align: center;
  }
`;

export const NavbarCollapse = styled.ul`
  
`;

export const NavbarNav = styled.ul`
  
`;

export const NavbarItem = styled.ul`
  
`;

export const NavbarLink = styled.ul`
  
`;
