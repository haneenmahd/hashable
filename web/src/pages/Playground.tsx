import axios from "axios";
import { Accessor, Component, createSignal, For, Setter } from "solid-js";
import { Accordion } from "../components/Accordion";
import { Button } from "../components/Button";
import { SidebarElement } from "../components/SidebarElement";

const Sidebar: Component<{
  setAlgorithm: Setter<string>;
  setEncoding: Setter<string>;
}> = ({ setAlgorithm, setEncoding }) => (
  <div class="p-5">
    <div class="min-w-[16rem] h-[90vh] rounded-md ring-1 ring-slate-200 shadow-lg bg-slate-100">
      <div class="py-2">
        <SidebarElement text="Playground" noBorders />
      </div>

      <div class="py-0">
        <Accordion
          text="Algorithm"
          defaultOpen
          onChange={(value) => setAlgorithm(value)}
        >
          <For each={["SHA256", "SHA512", "MD5"]}>
            {(item) => <span>{item}</span>}
          </For>
        </Accordion>

        <Accordion
          text="Encoding"
          defaultOpen
          onChange={(value) => setEncoding(value)}
        >
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
  options: {
    algorithm: Accessor<string>;
    encoding: Accessor<string>;
  };
  setHash: Setter<string>;
}> = ({ value, options, setHash }) => {
  const fetchHash = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/hash?algorithm=${options.algorithm()}&str=${value()}&encoding=${options.encoding()}`
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

const Main: Component<{
  options: {
    algorithm: Accessor<string>;
    encoding: Accessor<string>;
  };
}> = ({ options }) => {
  const [value, setValue] = createSignal("01234567890");
  const [hash, setHash] = createSignal("0x01234102010101");

  const { algorithm, encoding } = options;

  return (
    <div class="max-w-[100%] h-[100vh] bg-white flex flex-col items-center justify-center">
      <QuickActions
        value={value}
        options={{ algorithm, encoding }}
        setHash={setHash}
      />

      <input
        class="w-[100%] my-4 font-semibold text-center text-6xl text-slate-800 outline-none focus:placeholder:text-slate-300"
        placeholder="Type string to hash...."
        value={value()}
        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
      />

      <span class="max-w-[50%] truncate my-4 font-semibold text-center slashed-zero text-3xl text-slate-500 outline-none focus:placeholder:text-slate-300">
        <p>{hash()}</p>
      </span>
    </div>
  );
};

const Playground: Component = () => {
  // hashing options passed onto the api
  const [algorithm, setAlgorithm] = createSignal("md5");
  const [encoding, setEncoding] = createSignal("hex");

  return (
    <div class="flex flex-row items-center">
      <Sidebar setAlgorithm={setAlgorithm} setEncoding={setEncoding} />

      <Main
        options={{
          algorithm,
          encoding,
        }}
      />
    </div>
  );
};

export default Playground;
