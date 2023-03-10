import React from "react";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by{" "}
          <a
            href="http://nguyencaroline.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Caroline Nguyen
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/nguyentien6296/my-app-weather"
            rel="noopener noreferrer"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
