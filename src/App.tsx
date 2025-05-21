import Phone from "./Phone/Phone";
import "./App.css";

export const OFFLINE_PHONE_NUMBER = "555-555-5555";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        maxWidth: "100%",
      }}
    >
      <Phone />
    </div>
  );
}

export default App;
