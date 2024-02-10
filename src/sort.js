export const sort = (movies, sortSelection) => {
  if (sortSelection.includes("Date")) {
    movies.sort((a, b) => {
      const aDO = new Date(a.release_date);
      const bDO = new Date(b.release_date);
      if (aDO.getTime() < bDO.getTime()) {
        return 1;
      }
      if (bDO.getTime() < aDO.getTime()) {
        return -1;
      }
      return 0;
    });
  }

  if (sortSelection === "Date:Oldest") {
    movies.reverse();
  }

  if (sortSelection.includes("Title")) {
    if (sortSelection) {
      movies.sort((a, b) => {
        if (a.original_title > b.original_title) {
          return 1;
        }
        if (b.original_title > a.original_title) {
          return -1;
        }
        return 0;
      });
      if (sortSelection === "Title:Z-A") {
        movies.reverse();
      }
    }
  }

  return movies;
};
