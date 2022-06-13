import styles from "./Home.module.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <div class={styles.Home}>
      <Landing />

      <hr />

      <Features />

      <Footer />
    </div>
  );
}
