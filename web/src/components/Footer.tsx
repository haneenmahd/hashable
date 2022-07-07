import { Component } from "solid-js";
import BuyMeACoffee from "./BuyMeACoffee";

const Footer: Component = () => (
  <footer class="flex flex-col sm:flex-row items-center justify-center px-8 py-5 text-center">
    <span class="text-slate-400 font-normal">
      MIT Licensed | Copyright © 2021-present Haneen Mahdin
    </span>

    <BuyMeACoffee />
  </footer>
);

export default Footer;
