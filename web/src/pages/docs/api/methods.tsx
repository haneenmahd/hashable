import { Component } from "solid-js";
import Code from "../../../components/Code";
import DocCode from "../../../components/DocCode";
import DocSection from "../../../components/DocSection";
import Link from "../../../components/Link";
import RouterLink from "../../../components/RouterLink";

const Methods: Component = () => {
    return (
        <div>
            <h1 class="text-3xl font-bold text-slate-800">Methods</h1>

            <div class="mt-10">
                <h1 class="text-xl text-slate-700 font-semibold my-2">MD5</h1>
                <p class="text-slate-500 my-2 leading-7">
                    The MD5 message-digest algorithm is a cryptographically broken 
                    but still widely used hash function producing a 128-bit hash value. 
                    Although MD5 was initially designed to be used as a cryptographic hash 
                    function, it has been found to suffer from extensive vulnerabilities.
                </p>
            </div>

            <div class="mt-10">
                <h1 class="text-xl text-slate-700 font-semibold my-2">SHA256</h1>
                <p class="text-slate-500 my-2 leading-7">
                    SHA256 or SHA-2 is a set of cryptographic hash functions designed 
                    by the United States National Security Agency and first published 
                    in 2001. They are built using the Merkle-Damgård construction, from 
                    a one-way compression function itself built using the Davies-Meyer 
                    structure from a specialized block cipher.
                </p>
            </div>

            <div class="mt-10">
                <h1 class="text-xl text-slate-700 font-semibold my-2">SHA512</h1>
                <p class="text-slate-500 my-2 leading-7">
                    SHA-512, or Secure Hash Algorithm 512, is a hashing algorithm used
                    to convert text of any length into a fixed-size string. Each output
                    produces a SHA-512 length of 512 bits (64 bytes). This algorithm is
                    commonly used for email addresses hashing, password hashing, and 
                    digital record verification.
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

export default Methods;