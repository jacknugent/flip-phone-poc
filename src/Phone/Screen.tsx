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
        }}
      >
        <a
          style={{ color: "white", padding: "1rem" }}
          href={`tel:${OFFLINE_PHONE_NUMBER}`}
        >
          {OFFLINE_PHONE_NUMBER}
        </a>
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
    <div style={{ background: "rgb(128, 123, 95)", height: "100%" }}>
      {content}
    </div>
  );
}

export default Screen;
