import { Component, For } from "solid-js";

const MultilineCode: Component<{
  codes: string[];
}> = ({ codes }) => (
  <code class="max-w-[100%] break-words inline-block min-h-min w-full text-sm p-3 mx-0 my-5 bg-slate-700 shadow-lg ring-1 ring-slate-800 text-slate-300 rounded-md leading-6">
    <For each={codes}>
      {(code) => <pre class="w-[100%] truncate">{code}</pre>}
    </For>
  </code>
);

export default MultilineCode;
