import React, { Component } from "react";

class Controls extends Component {
  render() {
    const { onSortSelect } = this.props;
    return (
      <div>
        <select onChange={onSortSelect}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    );
  }
}

export default Controls;
