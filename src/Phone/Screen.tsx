import { Flex } from "@mantine/core";
import PhoneText from "./PhoneText";

type Props = {
  row: number;
};

function Screen({ row }: Props) {
  return (
    <Flex
      justify="center"
      direction="column"
      style={{
        width: "100%",
        padding: ".5rem",
        border: "1px solid black",
        borderRadius: "1rem",
      }}
    >
      <PhoneText key="month_offline" highlight={row === 0}>
        Month Offline
      </PhoneText>
      <PhoneText key="about" highlight={row === 1}>
        About
      </PhoneText>
      <PhoneText key="contact" highlight={row === 2}>
        Contact
      </PhoneText>
    </Flex>
  );
}

export default Screen;
