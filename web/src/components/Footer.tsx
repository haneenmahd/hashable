import { Component } from "solid-js";
import BuyMeACoffee from "./BuyMeACoffee";
import SocialLinks from "./SocialLinks";

const Footer: Component = () => (
  <footer class="px-8 py-5 text-center">
    <div class="flex flex-col sm:flex-row items-center justify-center">
      <span class="text-slate-400 font-normal">
        MIT Licensed | Copyright © 2021-present Haneen Mahdin
      </span>

      <BuyMeACoffee />
    </div>

    <SocialLinks />
  </footer>
);

export default Footer;
