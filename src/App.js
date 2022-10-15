import logo from './logo.svg';
import './App.css';
import {Graph} from "react-d3-graph"
import nodes from "./config_nodes"
import * as PropTypes from "prop-types";

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const dataNodes = function () {

  let db = require("./db.json").database;
  return db;

}

function Nodes(props) {

  const {nodes} = props

  return (
    <div>
      <h1>Items</h1>
      <ul>

        {nodes.map((item)=>
          // <li key={item.id}>{item.link}</li>

        )}

      </ul>
    </div>
  );
}

function App() {

  let db = dataNodes();
  let nodeArray = db.nodes;
  console.log(nodeArray)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>

        Hello
      </header>

      <Nodes nodes={nodeArray}/>
      {/*<Graph*/}
      {/*    id="graph-id" // id is mandatory*/}
      {/*    data={data}*/}
      {/*    config={nodes}*/}
      {/*    onClickNode={onClickNode}*/}
      {/*    onClickLink={onClickLink}*/}
      {/*/>;*/}

    </div>
  );
}

export default App;
