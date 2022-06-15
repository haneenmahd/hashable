import axios from "axios";
import { Accessor, Component, createSignal, For, Setter } from "solid-js";
import { Accordion } from "../components/Accordion";
import { Button } from "../components/Button";
import { SidebarElement } from "../components/SidebarElement";

const Sidebar: Component = () => (
  <div class="p-5">
    <div class="min-w-[16rem] h-[90vh] rounded-md ring-1 ring-slate-200 shadow-lg bg-slate-100">
      <div class="py-2">
        <SidebarElement text="Playground" noBorders />
      </div>

      <div class="py-0">
        <Accordion text="Method" defaultOpen>
          <For each={["SHA256", "SHA512", "MD5"]}>
            {(item) => <span>{item}</span>}
          </For>
        </Accordion>

        <Accordion text="Encoding" defaultOpen>
          <For each={["HEX", "BASE64", "BASE64URL"]}>
            {(item) => <span>{item}</span>}
          </For>
        </Accordion>
      </div>
    </div>
  </div>
);

const QuickActions: Component<{
  value: Accessor<string>;
  setHash: Setter<string>;
}> = ({ value, setHash }) => {
  const fetchHash = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/hash?algorithm=md5&str=${value()}&encoding=hex`
    );

    setHash(response.data);
  };

  return (
    <div class="absolute right-5 top-3 flex flex-row items-center">
      <div class="mx-1">
        <Button title="▶️ Run" primary action={fetchHash} />
      </div>

      <div class="mx-1">
        <Button title="📜 Get code" />
      </div>
    </div>
  );
};

const Main: Component = () => {
  const [value, setValue] = createSignal("");
  const [hash, setHash] = createSignal("01234567890");

  return (
    <div class="w-[100%] max-w-[100%] h-[100vh] bg-white p-10 flex flex-col items-center justify-center">
      <QuickActions value={value} setHash={setHash} />

      <input
        class="w-[100%] my-4 font-semibold text-center text-6xl text-slate-800 outline-none focus:placeholder:text-slate-300"
        placeholder="Type string to hash...."
        value={value()}
        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
      />

      <span class="my-4 font-semibold text-center slashed-zero text-3xl text-slate-500 outline-none focus:placeholder:text-slate-300">
        <p>{hash()}</p>
      </span>
    </div>
  );
};

const Playground: Component = () => {
  return (
    <div class="flex flex-row items-center">
      <Sidebar />

      <Main />
    </div>
  );
};

export default Playground;
