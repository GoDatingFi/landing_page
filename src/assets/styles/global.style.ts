import { createGlobalStyle } from "styled-components";
import { pixelToRem } from "utils/functions";
import { device } from "./responsive.style";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Lato";
    src: url('/assets/fonts/Lato.ttf') format('ttf');
  }

  body {
    font-family: "Lato", sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--text);
    font: var(--font-heading-2);
    min-width: 375px;
    scroll-behavior: smooth;
 }
 
  :root {
    /* Colors */
    --space: #0B1E8A;
    --gdf-blue-malibu: #8798FF;
    --gdf-blue-midnight: #000E30;
    --gdf-blue-deep-koamaru: #151D78;
    --gdf-blue-black-pearl: #091039;
    --gdf-blue-deep-cove: #10054D;
    --text: #FFFFFF;
    --background: #FFFFFF;
    --background-section: linear-gradient(180deg, #040327 0%, #0D0E13 24.49%);
    --background-form: #0E0D40;
    
    /* Fonts */
    --font-heading-1: 600 ${pixelToRem(12)}/${pixelToRem(14)} "Lato", sans-serif;
    --font-heading-2: 600 ${pixelToRem(18)}/${pixelToRem(22)} "Lato", sans-serif;
    
    --text-0: 400 ${pixelToRem(14)}/${pixelToRem(24)} "Lato", sans-serif;
    --text-1: 400 ${pixelToRem(16)}/${pixelToRem(24)} "Lato", sans-serif;
    --text-2: 500 ${pixelToRem(14)}/${pixelToRem(20)} "Lato", sans-serif;
    --text-3: 500 ${pixelToRem(18)}/${pixelToRem(24)} "Lato", sans-serif;
    --text-4: 500 ${pixelToRem(18)}/${pixelToRem(32)} "Lato", sans-serif;
  }
`;