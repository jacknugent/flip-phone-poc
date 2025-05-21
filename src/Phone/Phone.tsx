import { useState } from "react";
import Screen from "./Screen";
import Navigation from "./Navigation";
import { OFFLINE_PHONE_NUMBER } from "../App";
import Keypad from "./Keypad";

const TEXT_COUNT = 3;

const options = ["MONTH OFFLINE", "ABOUT", "CONTACT"] as const;
export type ScreenOptions = (typeof options)[number];
export type Screens = "Home" | ScreenOptions;

function Phone() {
  const [row, setRow] = useState(0);
  const [screen, setScreen] = useState<Screens>("Home");

  return (
    <div
      style={{
        background: "#222",
        borderRadius: "1rem",
        padding: "3rem 1rem 1rem 1rem",
        aspectRatio: "9 / 16",
        width: "clamp(250px, 30vw, 300px)",
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
        <Screen row={row} options={options} screen={screen} />
      </div>
      <Navigation
        row={row}
        setRow={setRow}
        textCount={TEXT_COUNT}
        onBackClick={() => setScreen("Home")}
        onCenterClick={() => setScreen(options[row])}
        onCallClick={() => {
          if (screen === "MONTH OFFLINE") {
            window.location.href = `tel:${OFFLINE_PHONE_NUMBER}`;
          }
        }}
      />
      <Keypad />
    </div>
  );
}

export default Phone;
