import { Component } from "solid-js";
import { Card } from "../components/Card";
import { toast } from "../components/Toast";

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
            action: () => {
              toast("Hello world!", 1000);
            },
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
