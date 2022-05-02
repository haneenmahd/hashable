import styles from "./App.module.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

function App() {
  return (
    <div class={styles.App}>
      <Landing />

      <hr />

      <Features />

      <Footer />
    </div>
  );
}

export default App;
