import NavButton from "./NavButton";

function Keybad() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        marginBottom: "auto",
        gap: "2px",
      }}
    >
      <NavButton>1</NavButton>
      <NavButton>2</NavButton>
      <NavButton>3</NavButton>
      <NavButton>4</NavButton>
      <NavButton>5</NavButton>
      <NavButton>6</NavButton>
      <NavButton>7</NavButton>
      <NavButton>8</NavButton>
      <NavButton>9</NavButton>
    </div>
  );
}

export default Keybad;
