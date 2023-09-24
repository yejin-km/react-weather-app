import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Yejin Kim and is open-sourced on{" "}
          <a
            href="https://github.com/yejin-km/react-weather-app"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a href="https://elegant-meerkat-6f18be.netlify.app/" target="_blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
