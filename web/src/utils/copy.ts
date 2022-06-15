export default function copy(text: string): void {
  window.navigator.clipboard.writeText(text);
}
