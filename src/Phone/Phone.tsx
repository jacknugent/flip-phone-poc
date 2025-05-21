import { useState } from "react";
import Screen from "./Screen";
import Navigation from "./Navigation";
import { OFFLINE_PHONE_NUMBER } from "../App";

const TEXT_COUNT = 3;

const options = ["Month Offline", "About", "Contact"] as const;
export type ScreenOptions = (typeof options)[number];
export type Screens = "Home" | ScreenOptions;

function Phone() {
  const [row, setRow] = useState(0);
  const [screen, setScreen] = useState<Screens>("Home");

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: ".5rem",
        padding: ".25rem",
        aspectRatio: "9 / 16",
        width: "clamp(200px, 30vw, 240px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          borderRadius: ".5rem",
          marginBottom: ".25rem",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          height: "35%",
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
          if (screen === "Month Offline") {
            window.location.href = `tel:${OFFLINE_PHONE_NUMBER}`;
          }
        }}
      />
    </div>
  );
}

export default Phone;
