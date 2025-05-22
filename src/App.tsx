import Phone from "./Phone/Phone";
import "./App.css";

export const OFFLINE_PHONE_NUMBER = "844-633-5463";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto .5rem",
        maxWidth: "100%",
      }}
    >
      <Phone />
    </div>
  );
}

export default App;
