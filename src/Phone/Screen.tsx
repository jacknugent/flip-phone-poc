import { OFFLINE_PHONE_NUMBER } from "../App";
import type { ScreenOptions, Screens } from "./Phone";
import PhoneText from "./PhoneText";

type Props = {
  row: number;
  options: readonly ScreenOptions[];
  screen: Screens;
  keypadNum: string;
};

function formatPhoneNumberProgressive(input: string): string {
  const digits = input.replace(/\D/g, "");

  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)})-${digits.slice(3)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 3)})-${digits.slice(3, 6)}-${digits.slice(6)}`;

  return `(${digits.slice(0, 3)})-${digits.slice(3, 6)}-${digits.slice(
    6,
    10
  )} x${digits.slice(10)}`;
}

function Screen({ row, options, screen, keypadNum }: Props) {
  let content;
  if (screen === "MONTH OFFLINE" || screen === "CONTACT" || keypadNum) {
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
          {screen === "CONTACT"
            ? "team@offline.community"
            : keypadNum
            ? formatPhoneNumberProgressive(keypadNum)
            : `Call ${OFFLINE_PHONE_NUMBER}`}
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
        border: "1px solid #333",
        padding: "0.125rem",
        fontSize: "1.25rem",
      }}
    >
      {content}
    </div>
  );
}

export default Screen;
