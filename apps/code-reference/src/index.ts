import { InstantApp } from "@felvin-search/core";
import { Component, queryToData } from "./App";

const App: InstantApp = {
  id: "@felvin-search-apps/code-reference",
  name: "Code Reference",
  description: "Returns the code Reference of desired algorithm and language",
  queryToData,
  Component,
  screenshotPath: "./files/screenshot.png",
  exampleSearchQueries: [
    "merge sort in javascript",
    "word wrap in c",
    "bubble sort in python",
  ],
};

export default App;
