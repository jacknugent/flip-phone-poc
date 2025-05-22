import { useState } from "react";
import Screen from "./Screen";
import Navigation from "./Navigation";
import { OFFLINE_PHONE_NUMBER } from "../App";
import Keypad from "./Keypad";

export enum ScreenOptions {
  MONTH_OFFLINE = "MONTH OFFLINE",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT",
}

export type Screens = "Home" | ScreenOptions;

const options = Object.values(ScreenOptions);
const TEXT_COUNT = options.length;

function Phone() {
  const [row, setRow] = useState(0);
  const [screen, setScreen] = useState<Screens>("Home");
  const [keypadNum, setKeypadNum] = useState("");

  return (
    <div
      style={{
        background: "#333",
        borderRadius: "2rem",
        padding: "2rem",
        margin: ".5rem",
        aspectRatio: "9 / 17",
        width: "clamp(250px, 100vw, 315px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        style={{
          border: "1px solid grey",
          borderRadius: ".25rem",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          height: "40%",
        }}
      >
        <Screen
          row={row}
          options={options}
          screen={screen}
          keypadNum={keypadNum}
        />
      </div>
      <Navigation
        row={row}
        setRow={setRow}
        textCount={TEXT_COUNT}
        onBackClick={() => {
          setScreen("Home");
          setKeypadNum("");
        }}
        onCenterClick={() => setScreen(options[row])}
        onCallClick={() => {
          if (screen === ScreenOptions.MONTH_OFFLINE) {
            window.location.href = `tel:${OFFLINE_PHONE_NUMBER}`;
            return;
          }
          if (keypadNum?.length === 10) {
            window.location.href = `tel:${keypadNum}`;
          }
        }}
      />
      <Keypad setKeypadNum={setKeypadNum} />
    </div>
  );
}

export default Phone;
