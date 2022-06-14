import { Component, createSignal } from "solid-js";
import { Card } from "./components/Card";

const App: Component = () => {
  return (
    <div>
      <Card
        title="Hello, world!"
        description="The first word a proram writes"
        actionButtons={[
          {
            title: "Hello ✋",
            primary: true,
          },
          {
            title: "Bye 👋",
          },
        ]}
      />
    </div>
  );
};

export default App;
