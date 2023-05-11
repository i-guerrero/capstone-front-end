import "./Home.css";
import hands from "./hands.jpeg";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Dev-Impact</h1>
      <img
        src={hands}
        alt="hands"
        style={{
          display: "block",
          width: "50%",
          height: "auto",
          marginTop: "20px",
          maxWidth: "400px",
          borderRadius: "10%",
        }}
      />
    </div>
  );
}
