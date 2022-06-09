import styled from "styled-components";
import {device} from "assets/styles/responsive.style";
import BackgroundBanner from "assets/images/banner.png"

export const SectionItem = styled.section`
  display: flex;
  background: url(${BackgroundBanner.src}) no-repeat; 
  background-size: 100%;
  background-position: top;
  justify-content: center;
  width: 100%;
  height: 100%;
`;