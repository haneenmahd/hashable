import { Component } from "solid-js";
import { Card } from "../components/Card";

const Home: Component = () => {
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

export default Home;
