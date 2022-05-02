import styles from "./Footer.module.css";

export default function Footer() {
    return (
      <footer class={styles.footer}>
        <a target="_blank" href="https://github.com/haneenmahd/hashable#readme">
          Documentation
        </a>
        <a target="_blank" href="https://github.com/haneenmahd/hashable#readme">
          GitHub
        </a>
        <a
          target="_blank"
          href="https://github.com/haneenmahd/hashable/blob/master/CHANGELOG.md"
        >
          Changelog
        </a>
        <a target="_blank" href="https://www.paypal.com/paypalme/haneenmahdin">
          Support Developer
        </a>
      </footer>
    );
}