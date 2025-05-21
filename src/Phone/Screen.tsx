import { OFFLINE_PHONE_NUMBER } from "../App";
import type { ScreenOptions, Screens } from "./Phone";
import PhoneText from "./PhoneText";

type Props = {
  row: number;
  options: readonly ScreenOptions[];
  screen: Screens;
};

function Screen({ row, options, screen }: Props) {
  if (screen === "Month Offline") {
    return (
      <div style={{ display: "flex", margin: "auto" }}>
        <a href={`tel:${OFFLINE_PHONE_NUMBER}`}>{OFFLINE_PHONE_NUMBER}</a>
      </div>
    );
  }

  return options.map((option, i) => (
    <PhoneText key={option} highlight={row === i}>
      {option}
    </PhoneText>
  ));
}

export default Screen;
