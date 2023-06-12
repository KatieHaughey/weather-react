import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <br />
        <div id="open-source">
          <a
            href="https://github.com/KatieHaughey/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source code{" "}
          </a>
          by Katie Haughey
        </div>
      </div>
    </div>
  );
}
