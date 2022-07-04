import { Component } from "solid-js";
import { Link } from "solid-app-router";

const LinkButtonStyles = {
  primary: {
    BACKGROUND: "bg-slate-900",
    FOREGROUND: "text-white",
    HOVER: "hover:bg-slate-800",
  },
  secondary: {
    BACKGROUND: "bg-slate-100",
    FOREGROUND: "text-slate-800",
    HOVER: "hover:bg-slate-200",
  },
};

export interface LinkButtonProps {
  title: string;
  href: string;
  primary?: boolean;
  action?: (e: MouseEvent) => void;
}

export const LinkButton: Component<LinkButtonProps> = ({
  title,
  href,
  primary,
}) => {
  let background = primary
    ? LinkButtonStyles.primary.BACKGROUND
    : LinkButtonStyles.secondary.BACKGROUND;

  let foreground = primary
    ? LinkButtonStyles.primary.FOREGROUND
    : LinkButtonStyles.secondary.FOREGROUND;

  let hover = primary
    ? LinkButtonStyles.primary.HOVER
    : LinkButtonStyles.secondary.HOVER;

  return (
    <Link
      class={`px-3 py-2 text-xs font-medium ${foreground} ${background} ${hover} transition-colors rounded-full cursor-pointer`}
      href={href}
    >
      {title}
    </Link>
  );
};
