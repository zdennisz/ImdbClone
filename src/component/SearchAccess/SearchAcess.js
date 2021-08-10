const SearchAccess = (value, serachCriteria) => {
  switch (serachCriteria) {
    case "auto-complete":
      return fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${value}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "4aac4def2fmshb56ec21bf755504p13678bjsnff697b2ca53b",
          "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
      }).then((data) => data.json());
    default:
      return fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${value}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "4aac4def2fmshb56ec21bf755504p13678bjsnff697b2ca53b",
          "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
      }).then((data) => data.json());
  }
};

export default SearchAccess;
