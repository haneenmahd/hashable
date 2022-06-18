import { Component } from "solid-js";

const Code: Component<{
  code: string;
}> = ({ code }) => (
  <code class="inline-block min-h-min w-full text-sm p-3 mx-0 my-5 bg-slate-100 rounded-sm leading-6">
    {code}
  </code>
);

export default Code;
