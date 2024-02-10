import React, { Component } from "react";
import { FaRegStar } from "react-icons/fa";

class Rating extends Component {
  render() {
    const { voteAverage, voteCount } = this.props;

    console.log(Math.floor(voteAverage));

    return (
      <>
        <p>Total Votes: {voteCount}</p>
        <p>Rating: {voteAverage}</p>
        {new Array(Math.floor(voteAverage)).fill("").map(() => {
          return <FaRegStar />;
        })}
      </>
    );
  }
}

export default Rating;
