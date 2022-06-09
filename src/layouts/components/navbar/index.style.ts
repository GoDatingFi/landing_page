import styled, { css } from "styled-components";
import {pixelToRem} from "utils/functions";
import { device } from "assets/styles/responsive.style";

export const BCSAddress = styled.h1`
  color: var(--text);
  font: var(--font-heading-1);
  
  @media ${device.mobile} {
    text-align: center;
  }
`;

export const NavbarCollapse = styled.nav`

`;

export const NavbarNav = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 28px;
`;

export const NavbarItem = styled.li<{ isActive?: boolean }>`
  padding-bottom: ${pixelToRem(9)};
  position: relative;
  ${({ isActive }) =>
  isActive &&
  css`
    color: var(--gdf-blue-malibu);
    &::after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 50%;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
      width: ${pixelToRem(5)};
      height: ${pixelToRem(5)};
      background: var(--gdf-blue-malibu);
    }
  `};
`;

export const NavbarLink = styled.a`
  
`;
