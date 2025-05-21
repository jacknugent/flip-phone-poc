import { Anchor, Button, Flex, Grid } from "@mantine/core";
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowBackUp,
  IconCircleFilled,
  IconPhoneRinging,
  IconPhoneEnd,
} from "@tabler/icons-react";
import { useState } from "react";
import PhoneButton from "./PhoneButton";
import Screen from "./Screen";

const TEXT_COUNT = 3;

type Screens = "main" | "month_offile" | "about" | "contact";

function Phone() {
  const [row, setRow] = useState(0);
  const [screen, setScreen] = useState<Screens>("main");

  return (
    <Flex direction="column" align="center" justify="center">
      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{
          border: "1px solid black",
          borderRadius: "1rem",
          padding: ".25rem",
        }}
      >
        <Screen row={row} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <div style={{ aspectRatio: "1" }} />
          <PhoneButton
            onClick={() => {
              if (row > 0) {
                setRow((row) => (row -= 1));
              }
            }}
          >
            <IconArrowUp size={25} />
          </PhoneButton>
          <PhoneButton>
            <IconArrowBackUp size={25} />
          </PhoneButton>
          <PhoneButton>
            <IconArrowLeft size={25} />
          </PhoneButton>
          <PhoneButton>
            <IconCircleFilled size={25} />
          </PhoneButton>
          <PhoneButton>
            <IconArrowRight size={25} />
          </PhoneButton>
          <PhoneButton>
            <IconPhoneRinging size={25} />
          </PhoneButton>
          <PhoneButton
            onClick={() => {
              if (row < TEXT_COUNT - 1) {
                setRow((row) => (row += 1));
              }
            }}
          >
            <IconArrowDown size={25} />
          </PhoneButton>
          <PhoneButton>
            <IconPhoneEnd size={25} />
          </PhoneButton>
          {/* <Button variant="outline" size="md" style={{ margin: ".25rem" }}>
            <IconArrowBackUp size={25} />
          </Button>
          <Button variant="outline" size="lg" radius="md">
            <IconArrowLeft size={25} />
          </Button>
          <Button variant="outline" size="lg" radius="md">
            <IconCircleFilled size={25} />
          </Button>
          <Button variant="outline" size="lg" radius="md">
            <IconArrowRight size={25} />
          </Button>
          <Anchor
            href="tel:555-555-5555"
            size="md"
            style={{ padding: ".5rem 1.25rem" }}
          >
            <IconPhoneRinging size={30} />
          </Anchor>
          <Button
            variant="outline"
            onClick={() => {
              if (row < TEXT_COUNT - 1) {
                setRow((row) => (row += 1));
              }
            }}
            size="lg"
            radius="md"
          >
            <IconArrowDown size={25} />
          </Button>
          <Button size="md" style={{ margin: ".25rem" }}>
            <IconPhoneEnd size={25} />
          </Button> */}
        </div>
      </Flex>
    </Flex>
  );
}

export default Phone;
