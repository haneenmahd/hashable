import { Component } from "solid-js";
import DocSection from "../../components/DocSection";

const UsingHashable: Component = () => (
    <div class="max-w-[70%]">
        <h1 class="text-3xl font-bold text-slate-800">Introduction.</h1>

        <DocSection 
            title="The Idea behind Hashable" 
            description="To be clear, Hashable was first thought to be build as an cryptographic API. But through the development process, I realise that we could build so much solutions to the existing problems using our services and APIs. We also looked forward into teaching other people and developers about cryptography and also release blogs and tutorials for our users. To enhance the learning experience, we also build a simple yet powerful playground for this." />

        <DocSection
            title="When do we use it?" 
            description="However when I was developing hashable back then, I always thought of why would anyone use this product 🤔? Through some serious reach, we found out that this would be helpful at some point for frontend web developers to hash strings with high level hashing methods like 'MD5', 'SHA256' and 'SHA512'." />

        <DocSection
            title="Who developed Hashable?" 
            description="Hashable was developed by me, Haneen Mahdin, a 14 year old Full-stack developer and UI/UX Designer." />

        <span class="text-slate-500">You can learn more about Haneen Mahdin at 
            <a 
                target="_blank" 
                class="text-blue-500 hover:underline" 
                href="https://haneenmahd.github.io">
                    haneenmahd.github.io
            </a>.
        </span>
    </div>
);

export default UsingHashable;