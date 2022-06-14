import { Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
