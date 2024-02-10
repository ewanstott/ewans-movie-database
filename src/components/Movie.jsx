import React, { Component } from "react";
import About from "./About";
import Rating from "./Rating";

class Movie extends Component {
  render() {
    // console.log(this.props);
    const { vote_average, vote_count } = this.props.movie;
    return (
      <div className="movie">
        <About movie={this.props.movie} />
        <Rating voteAverage={vote_average} voteCount={vote_count} />
      </div>
    );
  }
}

export default Movie;
