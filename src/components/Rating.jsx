import React, { Component } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa6";

class Rating extends Component {
  render() {
    const { voteAverage, voteCount } = this.props;

    console.log(Math.floor(voteAverage));

    //create array where length matches count of votes
    const count = [];
    for (let i = 0; i < voteAverage; i++) {
      count.push("");
    }

    return (
      <>
        <p>Total Votes: {voteCount}</p>
        <p>Rating: {voteAverage}</p>
        {new Array(Math.floor(voteAverage)).fill("").map(() => {
          return (
            <span className="star">
              <FaRegStar />
            </span>
          );
        })}
        {voteAverage !== Math.round(voteAverage) && (
          <span className="star">
            <FaRegStarHalf />
          </span>
        )}
      </>
    );
  }
}

export default Rating;
