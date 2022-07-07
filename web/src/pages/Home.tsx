import { Component } from "solid-js";
import { Button } from "../components/Button";
import Header from "../components/Header";
import LogoImage from "../assets/logo.svg";
import { LinkButton } from "../components/LinkButton";
import BuyMeACoffee from "../components/BuyMeACoffee";

const Hero: Component = () => {
  return (
    <div class="h-[80vh] p-10 flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center text-center">
        <div>
          <img src={LogoImage} alt="logo for hashable" />
        </div>

        <h1 class="my-2 text-4xl text-slate-800 font-semibold">Hashable</h1>
        <p class="my-2 text-2xl text-slate-500 font-regular">
          An interactive and fun way to learn cryptography
        </p>

        <div class="my-4 flex flex-row">
          <div class="mx-2">
            <LinkButton title="Get Started" href="/play" primary />
          </div>
          <div class="mx-2">
            <LinkButton title="Read docs" href="/docs/intro" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: Component<{
  emoji: string;
  title: string;
  description: string;
}> = ({ emoji, title, description }) => (
  <div class="py-4 px-6">
    <h3 class="my-1 text-xl text-slate-700 font-medium">
      <span class="mx-2 text-3xl" role="img">
        {emoji}
      </span>

      <span>{title}</span>
    </h3>
    <p class="text-base text-slate-500">{description}</p>
  </div>
);

const Features: Component = () => {
  return (
    <div class="p-8 sm:p-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center self-center">
      <FeatureCard
        emoji="📖"
        title="Learn"
        description="For our users to learn cryptography and understand what's going on behind the scenes, we have created an awesome free learning course for our users."
      />

      <FeatureCard
        emoji="🔩"
        title="API"
        description="We provide a REST API to hash strings with high-level cryptographic methods right inside the browser."
      />

      <FeatureCard
        emoji="🤾"
        title="Playground"
        description="An interactive and fun way to instantly hash strings with different hashing methods and encodings."
      />
    </div>
  );
};

const Footer: Component = () => (
  <footer class="flex flex-col sm:flex-row items-center justify-center px-8 py-5 text-center">
    <span class="text-slate-400 font-normal">
      MIT Licensed | Copyright © 2021-present Haneen Mahdin
    </span>

    <BuyMeACoffee />
  </footer>
);

const Home: Component = () => {
  return (
    <div>
      <Header />

      <Hero />

      <hr />

      <Features />

      <hr />

      <Footer />
    </div>
  );
};

export default Home;
