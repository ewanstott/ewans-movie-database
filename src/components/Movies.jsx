import React, { Component } from "react";
import Movie from "./Movie";
import Controls from "./Controls";

class Movies extends Component {
  state = {};
  render() {
    // console.log(this.props);
    const { movies, onSortSelect } = this.props;

    return (
      <>
        <Controls onSortSelect={onSortSelect} />
        {movies.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </>
    );
  }
}

export default Movies;
