import { Link, Outlet } from "solid-app-router";
import { Component, For } from "solid-js";

const SidebarContent: Component<{
  title: string;
  links: {
    title: string;
    link: string;
  }[];
}> = ({ title, links }) => (
  <div class="py-5">
    <h3 class="my-2 text-sm text-slate-800 uppercase font-medium">{title}</h3>
    <div class="flex flex-col">
      <For each={links}>
        {(link) => (
          <Link
            href={link.link}
            class="my-2 text-sm text-slate-500 hover:text-slate-700"
          >
            {link.title}
          </Link>
        )}
      </For>
    </div>
  </div>
);

const Sidebar: Component = () => {
  return (
    <div class="pt-12 py-8 px-7 min-w-[200px] max-h-[90vh] overflow-scroll">
      <SidebarContent
        title="Getting Started"
        links={[
          {
            link: "/docs/usage",
            title: "Using Hashable",
          },
        ]}
      />

      <SidebarContent
        title="Libraries"
        links={[
          {
            link: "/docs/libraries/node",
            title: "Node.js",
          },
          {
            link: "/docs/libraries/web",
            title: "Web",
          },
        ]}
      />

      <SidebarContent
        title="API"
        links={[
          {
            link: "/docs/api/usage",
            title: "Usage",
          },
          {
            link: "/docs/api/methods",
            title: "Methods",
          },
          {
            link: "/docs/api/encodings",
            title: "Encodings",
          },
        ]}
      />

      <SidebarContent
        title="Playground"
        links={[
          {
            link: "/docs/playground/usage",
            title: "Usage",
          },
        ]}
      />
    </div>
  );
};

const Docs: Component = () => {
  return (
    <div class="min-h-[100vh] flex flex-row justify-center">
      <Sidebar />

      <div class="p-10 pt-16 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Docs;
