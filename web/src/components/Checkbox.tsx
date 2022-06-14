import { Component, createSignal } from "solid-js";

const CheckboxStyles = {
  primary: {
    BACKGROUND: "bg-slate-100",
    FOREGROUND: "text-slate-800",
    HOVER: "hover:bg-slate-200",
  },
  checked: {
    BACKGROUND: "bg-slate-900",
    FOREGROUND: "text-slate-100",
    HOVER: "hover:bg-slate-700",
  },
};

export interface CheckboxProps {
  placeholder: string;
  defaultChecked?: boolean;
  action?: (value: boolean) => void;
}

export const Checkbox: Component<CheckboxProps> = ({
  placeholder,
  defaultChecked,
  action,
}) => {
  const [checked, setChecked] = createSignal(defaultChecked ? true : false);

  const handleCheck = (e: MouseEvent) => {
    setChecked(!checked());

    action && action(checked());
  };

  return (
    <span
      class="flex flex-row items-center cursor-pointer mx-4"
      onClick={handleCheck}
    >
      <div
        class={`p-3 my-2 mr-3 max-w-[40px] max-h-[40px] ${
          checked()
            ? CheckboxStyles.checked.BACKGROUND
            : CheckboxStyles.primary.BACKGROUND
        } ${
          checked()
            ? CheckboxStyles.checked.FOREGROUND
            : CheckboxStyles.primary.FOREGROUND
        } ${
          checked()
            ? CheckboxStyles.checked.HOVER
            : CheckboxStyles.primary.HOVER
        } 
            transition-all rounded-lg ring-1 ring-slate-300/50 shadow-md active:scale-95`}
      />

      <span class="text-sm">{placeholder}</span>
    </span>
  );
};
