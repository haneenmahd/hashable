import {
  children as childRenderer,
  Component,
  createEffect,
  createSignal,
  For,
  JSX,
} from "solid-js";
import { ResolvedChildren } from "solid-js/types/reactive/signal";

const AccordionStyles = {
  primary:
    "text-slate-500 py-1 cursor-pointer hover:text-slate-600 transition-colors",
};

export interface AccordionProps {
  text: string;
  onChange?: (value: string) => void;
  defaultOpen?: boolean;
  children: JSX.Element[] | JSX.Element;
}

export const Accordion: Component<AccordionProps> = ({
  text,
  onChange,
  defaultOpen,
  children,
}) => {
  const [open, setOpen] = createSignal(defaultOpen ? true : false);

  const c = childRenderer(() => children);

  createEffect(() =>
    (c() as ResolvedChildren[]).forEach(
      (item: HTMLElement) => (item.className = AccordionStyles.primary)
    )
  );

  const handleOpen = () => {
    setOpen(!open());
  };

  const handleValueChange = (value: string) => {
    onChange && onChange(value);
  };

  return (
    <div class="border-b">
      <div
        class="px-5 py-2 text-base font-medium text-slate-700 cursor-pointer hover:bg-slate-50"
        onClick={handleOpen}
      >
        {text}
      </div>

      {open() && (
        <div
          class="flex flex-col px-5 py-2 pl-8"
          onClick={(e) => handleValueChange(e.target.textContent)}
        >
          {c()}
        </div>
      )}
    </div>
  );
};
