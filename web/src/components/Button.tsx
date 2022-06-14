import { Component } from "solid-js";

const ButtonStyles = {
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

export interface ButtonProps {
  title: string;
  primary?: boolean;
  action?: (e: MouseEvent) => void;
}

export const Button: Component<ButtonProps> = ({ title, primary, action }) => {
  let background = primary
    ? ButtonStyles.primary.BACKGROUND
    : ButtonStyles.secondary.BACKGROUND;

  let foreground = primary
    ? ButtonStyles.primary.FOREGROUND
    : ButtonStyles.secondary.FOREGROUND;

  let hover = primary
    ? ButtonStyles.primary.HOVER
    : ButtonStyles.secondary.HOVER;

  return (
    <button
      class={`px-3 py-2 text-xs font-medium ${foreground} ${background} ${hover} transition-colors rounded-full cursor-pointer`}
      onClick={action}
    >
      {title}
    </button>
  );
};
