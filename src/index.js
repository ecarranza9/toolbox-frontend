import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/layout/Navbar.js";
import Table from "./components/table/Table.js";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <>
    <NavBar />
    <div>
      <Table />
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
