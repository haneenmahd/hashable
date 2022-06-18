import { Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Docs from "./pages/Docs";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import ErrorPage from "./pages/ErrorPage";
import UsingHashable from "./pages/Docs/UsingHashable";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />}>
        <Route path="/usage" element={<UsingHashable />} />
      </Route>
      <Route path="/play" element={<Playground />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
