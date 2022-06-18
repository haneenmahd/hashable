import { Component } from "solid-js";

const Link: Component<{
  title: string;
  link: string;
}> = ({ title, link }) => (
  <a target="_blank" class="text-blue-500 hover:underline" href={link}>
    {title}
  </a>
);

export default Link;
