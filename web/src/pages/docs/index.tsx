import { Link, Outlet } from "solid-app-router";
import { Component, For } from "solid-js";
import Header from "../../components/Header";

const SidebarContent: Component<{
  title: string;
  links: {
    title: string;
    link: string;
  }[];
}> = ({ title, links }) => (
  <div class="py-5">
    <h3 class="my-2 text-sm text-slate-600 uppercase font-medium">{title}</h3>
    <div class="flex flex-col">
      <For each={links}>
        {(link) => (
          <Link
            href={link.link}
            class="my-2 text-sm text-slate-500 hover:text-slate-600/75"
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
    <div class="sticky top-0 pt-12 py-8 px-7 min-w-[200px] max-h-[90vh] overflow-scroll">
      <SidebarContent
        title="Getting Started"
        links={[
          {
            link: "/docs",
            title: "Introduction",
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
        title="Examples"
        links={[
          {
            link: "/docs/examples/javascript",
            title: "Javascript"
          },
        ]} />
    </div>
  );
};

const Docs: Component = () => {
  return (
    <div>
      <Header />
      
      <div class="min-h-[100vh] flex flex-row justify-center">
      <Sidebar />

      <div class="px-10 py-20 max-w-[70%]">
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default Docs;
