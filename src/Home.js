import "./Home.css";
import welcomeF from "./welcomeF.png";

export default function Home() {
  return (
    <div className="home">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <img
          src={welcomeF}
          alt="welcomeF"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: "0%",
            maxHeight: "calc(100vh - 4rem)",
            marginTop: "4rem",
          }}
        />
      </div>
    </div>
  );
}
