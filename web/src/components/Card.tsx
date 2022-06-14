import { Component, For } from "solid-js";
import { Button, ButtonProps } from "./Button";

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  actionButtons?: ButtonProps[];
}

export const Card: Component<CardProps> = ({
  title,
  description,
  imageUrl,
  actionButtons,
}) => {
  return (
    <div class="max-w-[500px] overflow-hidden mx-5 my-8 rounded-sm shadow-lg ring-1 ring-slate-200/50 bg-slate-50 w-fit">
      {imageUrl && (
        <img class="max-w-[100%] h-auto mb-1" src={imageUrl} alt="Image" />
      )}

      <div class="py-2 px-8">
        <h3 class="text-lg font-bold text-slate-800 my-2">{title}</h3>
        <p class="text-slate-500 my-2">{description}</p>

        <div class="flex items-center py-2 w-full">
          <For each={actionButtons}>
            {(buttonData) => (
              <div class="px-1">
                <Button
                  title={buttonData.title}
                  action={buttonData.action}
                  primary={buttonData.primary}
                />
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
