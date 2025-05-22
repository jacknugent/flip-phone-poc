import { OFFLINE_PHONE_NUMBER } from "../App";
import type { ScreenOptions, Screens } from "./Phone";
import PhoneText from "./PhoneText";

type Props = {
  row: number;
  options: readonly ScreenOptions[];
  screen: Screens;
};

function Screen({ row, options, screen }: Props) {
  let content;
  if (screen === "MONTH OFFLINE") {
    content = (
      <div
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "end",
          justifyContent: "start",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "black",
            padding: "1rem",
            width: "100%",
            textAlign: "end",
          }}
        >
          {OFFLINE_PHONE_NUMBER}
        </div>
      </div>
    );
  } else {
    content = options.map((option, i) => (
      <PhoneText key={option} highlight={row === i}>
        {option}
      </PhoneText>
    ));
  }

  return (
    <div
      style={{
        background: "rgb(128, 123, 95)",
        height: "100%",
        borderRadius: "0.25rem",
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.6)",
        border: "1px solid #333", // subtle frame inside the bezel
        padding: "0.125rem",
      }}
    >
      {content}
    </div>
  );
}

export default Screen;
