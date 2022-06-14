import { Component } from "solid-js";
import { Button } from "../components/Button";
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

const QuickActions: Component = () => {
  return (
    <div class="absolute right-5 top-3 flex flex-row items-center">
      <div class="mx-1">
        <Button title="▶️ Run" primary />
      </div>

      <div class="mx-1">
        <Button title="📜 Get code" />
      </div>
    </div>
  );
};

const Main: Component = () => {
  return (
    <div class="w-[100%] h-[100vh] bg-white p-10 flex items-center justify-center">
      <QuickActions />

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
