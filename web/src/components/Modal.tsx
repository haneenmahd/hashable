import {
  Accessor,
  children as childRenderer,
  Component,
  createEffect,
  createSignal,
  JSX,
  Setter,
} from "solid-js";
import { Button } from "./Button";

export interface ModalProps {
  visible: Accessor<boolean>;
  setVisibility: Setter<boolean>;
  children?: JSX.Element[] | JSX.Element;
}

const Modal: Component<ModalProps> = ({ visible, setVisibility, children }) => {
  const c = childRenderer(() => children);

  return (
    <div
      class={`${
        visible() ? "opacity-100" : "opacity-0 -z-50"
      } absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 h-[90vmin] w-[90vmin] p-2 rounded-[0.5rem] ring-1 ring-[#ebebeb] bg-white shadow-lg z-50 transition-all`}
    >
      <div class="absolute top-1 right-1">
        <Button title="Close" action={() => setVisibility(false)} />
      </div>

      <div class="p-5">{c()}</div>
    </div>
  );
};

export default Modal;
