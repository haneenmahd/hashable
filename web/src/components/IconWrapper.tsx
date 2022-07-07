import { Component, JSXElement } from "solid-js";

const IconWrapper: Component<{
  href: string;
  children: JSXElement;
}> = ({ href, children }) => {
  return (
    <div class="mx-3 cursor-pointer text-2xl text-slate-500 hover:text-slate-700 transition-all">
      <a href={href} target="_blank">
        {children}
      </a>
    </div>
  );
};

export default IconWrapper;
