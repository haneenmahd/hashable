import { Component } from "solid-js";
import DocSection from "../../../components/DocSection";
import Link from "../../../components/Link";

const Intro: Component = () => (
    <div>
        <h1 class="text-3xl font-bold text-slate-800">Introduction</h1>

        <DocSection 
            title="The Idea behind Hashable" 
            description="To be clear, Hashable was first thought to be build as an cryptographic API. But through the development process, I realise that we could build so much solutions to the existing problems using our services and APIs. We also looked forward into teaching other people and developers about cryptography and also release blogs and tutorials for our users. To enhance the learning experience, we also build a simple yet powerful playground for this." />

        <DocSection
            title="When do we use it?" 
            description="However when I was developing hashable back then, I always thought of why would anyone use this product 🤔? Through some serious reach, we found out that this would be helpful at some point for frontend web developers to hash strings with high level hashing methods like 'MD5', 'SHA256' and 'SHA512'." />

        <div>
            <DocSection
            title="Who developed Hashable?" 
            description="Hashable was developed by me, Haneen Mahdin, a 14 year old Full-stack developer and UI/UX Designer, as a side project. Later I decided to turn it into something much more useful to the public." />

            <span class="text-slate-500">
                You can learn more about Haneen Mahdin at 
                <Link title="haneenmahd.github.io." link="https://haneenmahd.github.io" />
            </span>
        </div>

        <div>
            <DocSection
            title="How to contribute?" 
            description="Our project is open-source and is hosted on GitHub. You can contribute to our project with an issue or a PR. Please make sure to read the contributing guidelines before making a contribution." />

            <span class="text-slate-500">
                <span class="animate-pulse">⭐️</span> Support us by giving us a star on GitHub 
                <Link title="repository." link="https://github.com/haneenmahd/hashable" />
            </span>
        </div>
    </div>
);

export default Intro;