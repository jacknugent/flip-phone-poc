import type { ReactElement } from "react";

type Props = {
  onClick?: () => void;
  children: ReactElement;
};

function NavButton({ children, onClick }: Props) {
  return (
    <div style={{ aspectRatio: "2", display: "flex", alignItems: "center" }}>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          borderRadius: ".5rem",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default NavButton;
