import { Component } from "solid-js";
import Code from "../../../components/Code";
import DocCode from "../../../components/DocCode";
import DocSection from "../../../components/DocSection";
import Link from "../../../components/Link";
import RouterLink from "../../../components/RouterLink";

const Encodings: Component = () => {
    return (
        <div>
            <h1 class="text-3xl font-bold text-slate-800">Encodings</h1>

            <div class="mt-10">
                <h1 class="text-xl text-slate-700 font-semibold my-2">HEX</h1>
                <p class="text-slate-500 my-2 leading-7">
                    Hex encoding is performed by converting the 8 bit data to 2 
                    hex characters. The hex characters are then stored as the 
                    two byte string representation of the characters. Often, 
                    some kind of separator is used to make the encoded data easier 
                    for human reading.
                </p>
            </div>

            <div class="mt-10">
                <h1 class="text-xl text-slate-700 font-semibold my-2">BASE64</h1>
                <p class="text-slate-500 my-2 leading-7">
                    Base64 is a group of similar binary-to-text encoding schemes 
                    that represent binary data in an ASCII string format by 
                    translating it into a radix-64 representation. The term Base64 
                    originates from a specific MIME content transfer encoding.
                </p>
            </div>

            <div class="mt-10">
                <h1 class="text-xl text-slate-700 font-semibold my-2">BASE64URL</h1>
                <p class="text-slate-500 my-2 leading-7">
                    Base64 encoding defines how to represent binary data in an ASCII 
                    string format. The objective of base64 encoding is to transmit 
                    binary data such as keys or digital certificates in a printable 
                    format.
                </p>
            </div>

            <div class="my-2 w-full flex items-center justify-between">
                <div>
                    <RouterLink title="< Usage" path="/docs/api/usage" />
                </div>

                <div>
                    <RouterLink title="Encodings >" path="/docs/api/encodings" />
                </div>
            </div>
        </div>
    );
};

export default Encodings;