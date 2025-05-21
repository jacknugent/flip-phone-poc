import type { ReactElement } from "react";

type Props = {
  onClick?: () => void;
  children: ReactElement;
};

function PhoneButton({ children, onClick }: Props) {
  return (
    <div style={{ aspectRatio: "1" }}>
      <button
        style={{ display: "flex", height: "100%", alignItems: "center" }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default PhoneButton;
