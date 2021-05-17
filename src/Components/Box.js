import React from "react";
import Structure from "./Structure";
import "../Styles/Box.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { row: this.props.row, col: this.props.col };
  }

  render() {
    return (
      <React.Fragment>
        <Structure row={this.props.row} col={this.props.col} />
      </React.Fragment>
    );
  }
}

export default Box;
