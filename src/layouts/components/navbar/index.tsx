import {
  Container,
  Header,
  DivBlock,
} from "assets/styles/common.style";
import {
  BCSAddress,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
  NavbarLink,
} from "./index.style";
import {pixelToRem} from "utils/functions";
import Menu from "utils/menu.const";
import Telegram from "assets/images/icons/telegram.svg";
import Twitter from "assets/images/icons/twitter.svg";
import Discord from "assets/images/icons/discord.svg";
import Linkedin from "assets/images/icons/linkedin.svg";

const Navbar = () => {
  return (
    <Header>
      <Container
        flex="column"
        width={pixelToRem(1180)}
        rowGap={pixelToRem(35)}
        padding={pixelToRem(20, 0, 30)}
      >
        <DivBlock justifyContent="flex-end">
          <BCSAddress>TeamBSC: 0x0F5D54b27bDb556823F96f2536496550f8816dC5</BCSAddress>
        </DivBlock>
        <DivBlock
          flex="row"
          justifyContent="center"
        >
          <NavbarCollapse>
            <NavbarNav>
              {Menu && Menu.map((item, index) => (
                <NavbarItem key={index} isActive={item.active}>
                  <NavbarLink>{item.label}</NavbarLink>
                </NavbarItem>
              ))}
            </NavbarNav>
          </NavbarCollapse>
        </DivBlock>
      </Container>
    </Header>
  );
};

export default Navbar;
