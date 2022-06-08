import * as React from "react";
import { render } from "react-dom";
import Hello from './hello.mdx';

import ReactStarsRating from 'react-awesome-stars-rating';

export function add(a, b) {
    return a + b
}

const onChange = (value) => {
  console.log(`React Stars Rating value is ${value}`)
}

const ReactStarsExample = ({ value }) => {
  return <ReactStarsRating onChange={onChange} value={value} />
}

render(
  <div>
    <Hello />
    <ReactStarsExample />
  </div>,
  document.querySelector("#root")
)
