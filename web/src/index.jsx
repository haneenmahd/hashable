/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router, Routes } from "solid-app-router";

import "tailwindcss/tailwind.css";

import "./index.css";
import App from "./App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
);
