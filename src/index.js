import "./style";
import { Component, render } from "preact";
import Demo from "./Demo";

export default class App extends Component {
  componentDidMount() {}

  render(props, { results = [] }) {
    return <Demo />;
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
