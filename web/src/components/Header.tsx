import { Link } from "solid-app-router";
import { Component } from "solid-js";
import LogoImage from "../assets/logo.svg";

const Logo: Component = () => (
  <img class="h-10" src={LogoImage} alt="logo of hashable" />
);

const Header: Component = () => (
  <header class="w-full min-h-10 flex items-center justify-between py-5 px-5 ring-1 ring-slate-100">
    <Link href="/">
      <span class="flex flex-row items-center">
        <Logo />
        <h2 class="ml-3 text-xl text-slate-800 font-semibold">Hashable</h2>
      </span>
    </Link>
    <nav>
      <span class="mx-3 text-sm text-slate-500 font-medium hover:text-slate-600">
        <Link href="/learn">Learn</Link>
      </span>
      <span class="mx-3 text-sm text-slate-500 font-medium hover:text-slate-600">
        <Link href="/docs/intro">Documentation</Link>
      </span>
      <span class="mx-3 text-sm text-slate-500 font-medium hover:text-slate-600">
        <Link href="/play">Playground</Link>
      </span>
    </nav>
  </header>
);

export default Header;
