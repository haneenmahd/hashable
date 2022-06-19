import { Component } from "solid-js";
import { Link } from "solid-app-router";

const RouterLink: Component<{
  title: string;
  path: string;
}> = ({ title, path }) => (
  <Link class="text-blue-500 hover:underline" href={path}>
    {title}
  </Link>
);

export default RouterLink;
