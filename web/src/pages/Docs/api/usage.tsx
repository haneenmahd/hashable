import { Component } from "solid-js";
import Code from "../../../components/Code";
import DocCode from "../../../components/DocCode";
import DocSection from "../../../components/DocSection";
import Link from "../../../components/Link";

const Usage: Component = () => {
    return (
        <div>
            <h1 class="text-3xl font-bold text-slate-800">Usage.</h1>

            <div class="mt-10">
                <h1 class="text-xl text-slate-700 font-semibold my-2">Requirements</h1>
                <p class="text-slate-500 my-2 leading-7">
                    You dont' need any external libraries or dependencies to interact with our API. 
                    You will just only need to use the browser-based  <DocCode code="fetch" /> function. 
                    You will use this function to send  <DocCode code="GET" /> request to our API. This makes
                    our API so easy to use for anyone.
                </p>
            </div>

            <span>
                <span class="text-slate-500">Our server is hosted on: </span>
                <Link title="hashable-server.herokuapp.com" link="https://hashable-server.herokuapp.com" />
            </span>

            <div class="mt-10">
                <h1 class="text-xl text-slate-700 font-semibold my-2">Sending a sample request</h1>
                <p class="text-slate-500 my-2 leading-7">
                    First of all we will create a variable to store the url of the server. This will be helpful to us later, if we wanna send multiple requests.
                    <Code code="let url = 'hashable-server.herokuapp.com';" />

                    So we will see how we can send a request to the server.
                    <Code code="const res = await fetch(`${url}/hash?str=me&method=md5&encoding=hex`);" />

                    We do not include any other kind of data inside the response to reduce the size of the request and make it supaaafast ⚡️! So, the hash is returned directly as the response from the request.
                    <Code code="let hash = res.data;" />
                </p>
            </div>
        </div>
    );
};

export default Usage;