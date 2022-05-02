import styles from "./Features.module.css";

const EasyToUse = () => {
  return (
    <div class={styles.features}>
      <h2>Easy to Use</h2>
      <p class={styles.description}>
        Things just work so simple, if you know how to use <code>fetch</code>{" "}
        method in Javascript or any other alternate http libraries like{" "}
        <code>axios</code>. Send a <code>GET</code> request to our API. No need
        to parse <code>json</code> or any other stuff. You get the result
        straightforward in string.
      </p>

      <button>Read Documentation</button>
    </div>
  );
};

const Playground = () => {
  return (
    <div class={styles.features}>
      <h2>Learn in Playground</h2>
      <p class={styles.description}>
        Experiment and learn new cryptography methods with the our playground built specifically for this purpose.
        An awesome learning experience for beginners. Read and experiment side by side.
      </p>

      <button>Open Playground</button>
    </div>
  );
}

export default function Features() {
  return (
    <>
      <EasyToUse />
      <Playground />
    </>
  );
}
