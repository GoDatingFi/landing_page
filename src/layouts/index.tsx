import { ReactNode } from "react";
import Navbar from "./components/navbar";
import { GlobalStyle }  from 'assets/styles/global.style';
import {
  Container,
  Main,
} from "assets/styles/common.style";

interface Props {
  children?: ReactNode;
}

const Layout = ({
  children,
}: Props) => {
  return (
    <Container flex="column" width="100%">
      <GlobalStyle />
      <Navbar />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
