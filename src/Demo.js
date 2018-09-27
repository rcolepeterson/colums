import React, { Component } from "react";
import { render } from "react-dom";
//import random from 'lodash.random'

import Columns from "./columns";
//import LoremImage from '../../src'
//import styles from './styles.css'

const dimensions = [
  { width: 800, height: 1200, name: "zero" },
  { width: 800, height: 600, name: "1" },
  { width: 800, height: 1800, name: "2" },
  { width: 800, height: 600, name: "3" },
  { width: 800, height: 1200, name: "4" },
  { width: 800, height: 600, name: "5" },
  { width: 800, height: 400, name: "6" },
  { width: 800, height: 400, name: "6" },
  { width: 800, height: 400, name: "7" },
  { width: 800, height: 800, name: "8" },
  { width: 800, height: 800, name: "9" },
  { width: 800, height: 800, name: "10" },
  { width: 800, height: 800, name: "11" },
  { width: 800, height: 800, name: "12" },
  { width: 800, height: 800, name: "13" },
  { width: 800, height: 800, name: "14" },
  { width: 800, height: 800, name: "15" },
  { width: 800, height: 800, name: "16" }
];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 2
    };
    this.onColumnsButtonClick = this.onColumnsButtonClick.bind(this);
  }

  onColumnsButtonClick() {}

  renderItems() {
    dimensions.splice(2, 0, { width: 800, height: 400, name: "cole" });
    dimensions.splice(6, 0, { width: 800, height: 400, name: "cole" });
    dimensions.splice(10, 0, { width: 800, height: 400, name: "cole" });
    dimensions.splice(14, 0, { width: 800, height: 400, name: "cole" });

    return dimensions.map(({ width, height, name }, i) => (
      <div
        key={i}
        className={"demoItem"}
        style={{
          paddingTop: (height / width) * 100 + "%"
        }}
      >
        <img
          src={`http://placehold.it/${width}x${height}?text=${name}`}
          alt=""
        />
      </div>
    ));
  }

  render() {
    const { columns } = this.state;
    const queries = [
      {
        columns: 2,
        query: "min-width: 0px"
      }
    ];
    return (
      <div>
        <Columns gap="20px" columns={columns} dimensions={dimensions}>
          {this.renderItems()}
        </Columns>
      </div>
    );
  }
}

export default Demo;
