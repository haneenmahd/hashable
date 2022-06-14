import { Component } from "solid-js";
import { SidebarElement } from "../components/SidebarElement";

const Sidebar: Component = () => (
  <div class="min-w-[16rem] h-[100vh] bg-slate-100">
    <div class="py-2">
      <SidebarElement text="Playground" noBorders />
    </div>

    <div class="py-0">
      <SidebarElement text="Method" />

      <SidebarElement text="Encoding" />
    </div>
  </div>
);

const Main: Component = () => {
  return (
    <div class="w-[100%] h-[100vh] bg-white p-10 flex items-center justify-center">
      <input
        class="w-[100%] text-center text-6xl text-slate-800 outline-none focus:placeholder:text-slate-300"
        placeholder="Type string to hash...."
      />
    </div>
  );
};

const Playground: Component = () => {
  return (
    <div class="flex flex-row items-center">
      <Sidebar />

      <Main />
    </div>
  );
};

export default Playground;
