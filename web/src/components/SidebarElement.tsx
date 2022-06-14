import { Component } from "solid-js";

const SidebarElementStyles = {};

export interface SidebarElementProps {
  text: string;
  noBorders?: boolean;
  action?: (e: MouseEvent) => void;
}

export const SidebarElement: Component<SidebarElementProps> = ({
  text,
  noBorders,
  action,
}) => {
  return (
    <div
      class={`px-5 py-2 text-base text-slate-700 cursor-pointer
      ${noBorders && "font-semibold"}
      ${noBorders || "border-b"}
      ${noBorders || "hover:bg-slate-50"}`}
      onClick={action}
    >
      {text}
    </div>
  );
};
