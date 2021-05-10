import ReactDOM from "react-dom";
import Top from "../src/Components/Top.js";
import Content from "../src/Components/Content";

import "../src/styles/reset.css";
import "../src/styles/style.css";

function App() {
  return (
    <>
      <Top></Top>
      <Content></Content>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
