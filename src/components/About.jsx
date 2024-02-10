import React, { Component } from "react";

class About extends Component {
  render() {
    const {
      original_title,
      original_language,
      overview,
      release_date,
      poster_path,
    } = this.props.movie;

    return (
      <div className="movie about">
        <h2>{original_title}</h2>
        <p>{overview}</p>
        <p>Language: {original_language}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
        <p> Releaste Date: {new Date(release_date).toDateString()}</p>
      </div>
    );
  }
}

export default About;
