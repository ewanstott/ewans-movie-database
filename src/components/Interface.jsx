import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Movies from "./Movies";
import { sort } from "../sort";

class Interface extends Component {
  state = {};

  async componentDidMount() {
    this.getMovies("The Dark Knight");
  }

  getMovies = async (searchTerm) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchTerm}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGQ0MjM3OTdkMmZlOWUxYmFkNzMxZGE4NDE5ZjE4MiIsInN1YiI6IjY1Yzc2MjI1YTkzZDI1MDE4NDRiYjhjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95PqRQK7b2ZrA7VkoJ_pZ67yPhMrIhmvEWThC85eiVI`,
        },
      }
    );
    this.setState({ movies: data.results });
  };

  onSearchInput = (e) => {
    this.getMovies(e.target.value);
  };

  onSortSelect = (e) => {
    this.setState({ sortSelection: e.target.value });
  };

  render() {
    // console.log(this.state);
    const { movies, sortSelection } = this.state;

    //if movies does not excist, return loading...
    if (!movies) {
      return <p>Loading...</p>;
    }

    //sort data
    let sortedMovies = [...movies];

    //importing sort function from sort.js
    if (sortSelection) {
      sortedMovies = sort(sortedMovies, sortSelection);
    }

    // (movies, sortedMovies, sortSelection);

    return (
      <>
        <Search onSearchInput={this.onSearchInput} />
        {movies && (
          <Movies movies={sortedMovies} onSortSelect={this.onSortSelect} />
        )}
      </>
    );
  }
}

export default Interface;
