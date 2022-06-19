export default function onKeyPress(key: string, action: () => void): void {
  window.onkeydown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === key) {
      action();
    }
  };
}
