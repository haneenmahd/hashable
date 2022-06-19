import { Component } from "solid-js";
import Link from "../../../components/Link";
import DocSection from "../../../components/DocSection";
import MultilineCode from "../../../components/MultilineCode";

const Javascript: Component = () => (
    <div>
        <h1 class="text-3xl font-bold text-slate-800">Examples for Javascript</h1>

        <DocSection 
            title="Hash 'Hello world'" 
            description="It's so easy and simple to hash any string but let's take a look at the word that every programmer should write 😅!" />

        <MultilineCode codes={[
            "let url = 'https://hashable-api.herokuapp.com';",
            "let string = 'hello world';",
            "let method = 'md5';",
            "let encoding = 'hex';",
            "let response = await fetch(`${url}/hash?str=${string}&method=${method}&encoding=${encoding}`);"
        ]} />

        <span>
            <Link 
                title="Find more examples in our GitHub repository" 
                link="https://github.com/haneenmahd/hashable/tree/master/examples" />
        </span>
    </div>
);

export default Javascript;