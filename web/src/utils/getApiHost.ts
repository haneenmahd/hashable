export default function getApiHost() {
  const url = window.location.host;
  const isLocalHost = url.includes("localhost");

  if (!isLocalHost) {
    return "https://hashable-api.herokuapp.com";
  } else {
    return "http://localhost:3000";
  }
}
