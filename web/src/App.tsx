import { Outlet, Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Docs from "./pages/docs";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import ErrorPage from "./pages/ErrorPage";
import Intro from "./pages/docs/getting-started/intro";
import APIUsage from "./pages/docs/api/usage";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />}>
        <Route path="/intro" element={<Intro />} />

        <Route path="/api" element={<Outlet />}>
          <Route path="usage" element={<APIUsage />} />
        </Route>
      </Route>
      <Route path="/play" element={<Playground />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
