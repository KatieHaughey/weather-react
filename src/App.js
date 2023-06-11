import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <br />
      <div id="open-source">
        <a
          href="https://github.com/KatieHaughey/week-6-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source code{" "}
        </a>
        by Katie Haughey
      </div>
    </div>
  );
}
