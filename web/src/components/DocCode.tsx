import { Component } from "solid-js";

const DocCode: Component<{
  code: string;
}> = ({ code }) => (
  <code class="text-sm p-1 bg-slate-100 rounded-sm mx-1">{code}</code>
);

export default DocCode;
