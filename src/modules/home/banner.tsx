import {
  Container,
  Header,
  DivBlock,
} from "assets/styles/common.style";
import {
  SectionItem
} from "./banner.style";
import {pixelToRem} from "utils/functions";

const Banner = () => {
  return (
    <SectionItem>
      <Container
        flex="column"
        width={pixelToRem(1180)}
        rowGap={pixelToRem(35)}
        padding={pixelToRem(20, 0, 30)}
      >
        <DivBlock
          width="100%"
          alignItems="center"
        >

        </DivBlock>
        <DivBlock width="100%">2</DivBlock>
      </Container>
    </SectionItem>
  );
};

export default Banner;
