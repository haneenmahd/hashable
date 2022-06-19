import { Component } from "solid-js";

const DocSection: Component<{
  title: string;
  description: string;
}> = ({ title, description }) => (
  <div class="mt-10">
    <h1 class="text-xl text-slate-700 font-semibold my-2">{title}</h1>
    <p class="text-slate-500 my-2 leading-7">{description}</p>
  </div>
);

export default DocSection;
