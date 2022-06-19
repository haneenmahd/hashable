import { Link } from "solid-app-router";
import { Component } from "solid-js";

const ErrorPage: Component = () => {
  return (
    <div class="min-h-[100vh] flex flex-col items-center justify-center">
      <h1 class="font-black text-9xl my-5 text-slate-800">404</h1>
      <h3 class="font-bold text-4xl my-5 text-slate-500">Page not found.</h3>

      <div class="my-16">
        <Link
          class="text-blue-500 hover:text-blue-600 transition-colors"
          href="/"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
