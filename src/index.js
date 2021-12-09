import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Map, List } from "immutable";

const obj = Map({
  foo: 1,
  inner: Map({
    bar: 10,
  }),
});
console.log(obj.toJS());

const arr = List([Map({ foo: 1 }), Map({ bar: 2 })]);
console.log(arr.toJS());

let nextObj = obj.set("foo", 5);
console.log(nextObj.toJS());
console.log(nextObj !== obj);

nextObj = nextObj.update("foo", (value) => value + 1);
console.log(nextObj.toJS());

let nextArr = arr.setIn([0, "foo"], 10);
console.log(nextArr.getIn([0, "foo"]));

nextArr = arr.push(Map({ qaz: 3 }));
console.log(nextArr.toJS());
nextArr = arr.filter((item) => item.get("foo") === 1);
console.log(nextArr.toJS());

nextObj = nextObj.delete("foo");
console.log(nextObj.toJS());

nextArr = nextArr.delete(0);
console.log(nextArr.toJS());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
