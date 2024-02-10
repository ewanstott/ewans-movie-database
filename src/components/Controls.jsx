import React, { Component } from "react";

class Controls extends Component {
  render() {
    const { onSortSelect } = this.props;
    return (
      <div>
        <select onChange={onSortSelect}>
          <option value="Title:A-Z">Title: A-Z</option>
          <option value="Title:Z-A">Title: Z-A</option>
          <option value="Date:Newest">Newest</option>
          <option value="Date:Oldest">Oldest</option>
        </select>
      </div>
    );
  }
}

export default Controls;
