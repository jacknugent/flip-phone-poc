type Props = {
  highlight: boolean;
  children: any;
};

function PhoneText({ highlight, children }: Props) {
  return (
    <div
      style={{
        backgroundColor: !highlight ? "transparent" : "blue",
        color: !highlight ? "black" : "white",
        padding: ".25rem .5rem",
        borderRadius: ".25rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export default PhoneText;
