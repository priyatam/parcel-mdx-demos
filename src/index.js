import * as React from "react";
import { render } from "react-dom";
import Hello from './hello.mdx';
import Highlight from './highlight.js';

export function add(a, b) {
    return a + b;
}

render(
  <div>
    test
    <Hello />
  </div>,
  document.querySelector("#root")
);
