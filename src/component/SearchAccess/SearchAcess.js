const SearchAccess = (value, serachCriteria) => {
  switch (serachCriteria) {
    case "auto-complete":
      return fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${value}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            process.env.REACT_APP_RA_KEY,
          "x-rapidapi-host": process.env.REACT_APP_RA_HOST
        }
      }).then((data) => data.json());
    default:
      return fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${value}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            process.env.REACT_APP_RA_KEY,
          "x-rapidapi-host": process.env.REACT_APP_RA_HOST
        }
      }).then((data) => data.json());
  }
};

export default SearchAccess;
