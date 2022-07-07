import { Component } from "solid-js";
import {
  FaBrandsGithub,
  FaBrandsInstagram,
  FaBrandsTwitter,
} from "solid-icons/fa";
import IconWrapper from "./IconWrapper";

const SocialLinks: Component = () => {
  return (
    <div class="flex items-center justify-center py-5">
      <IconWrapper href="https://github.com/haneenmahd/hashable">
        <FaBrandsGithub />
      </IconWrapper>

      <IconWrapper href="https://twitter.com/HaneenMahdin">
        <FaBrandsTwitter />
      </IconWrapper>

      <IconWrapper href="https://instagram.com/haneenmahdin">
        <FaBrandsInstagram />
      </IconWrapper>
    </div>
  );
};

export default SocialLinks;
