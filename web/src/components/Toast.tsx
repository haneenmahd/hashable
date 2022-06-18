import { Component, createEffect, createSignal } from "solid-js";
import { render } from "solid-js/web";
import doesElementExist from "../utils/doesElementExist";

export interface ToastProps {
  message: string;
  timeout?: number;
}

export const Toast: Component<ToastProps> = ({
  message = "Toast.",
  timeout = 3000,
}) => {
  const [open, setOpen] = createSignal(true);

  createEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, timeout);

    setTimeout(() => {
      document
        .getElementById("toast-root")
        .childNodes.forEach((node) => node.remove());
    }, timeout + 500);
  });

  return (
    <div
      class={`fixed ${
        open() ? "top-4" : "-top-8"
      } left-2/4 -translate-x-2/4 w-fit px-2 py-1 bg-slate-100 rounded-md text-sm shadow-sm ring-1 ring-slate-300 transition-all`}
    >
      {message}
    </div>
  );
};

export const toast = (message: string, timeout?: number) => {
  render(
    () => <Toast message={message} timeout={timeout} />,
    document.getElementById("toast-root")
  );
};
