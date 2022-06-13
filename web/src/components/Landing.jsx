import styles from "../Home.module.css";

export default function Landing() {
  return (
    <header class={styles.header}>
      <span class={styles.titles}>
        <h3>Light.</h3>
        <h3>Open Source.</h3>
        <h3>Simple and Easy.</h3>
      </span>
      <p class={styles.description}>
        Hashable is an open-source, client-side gateway for users to test out
        cryptographic functions and hashing methods. We also support a REST API
        which users can use to hash strings in their own website on client-side
        Javascript Applications.
      </p>

      <div class={styles.actions}>
        <button primary>Open Playground</button>

        <button>Learn</button>
      </div>
    </header>
  );
}
