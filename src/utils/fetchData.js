// it is created so that it can be use in many components
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "05dbc38ac6msh2f679f3002f73f8p149628jsn005490826fe9",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "05dbc38ac6msh2f679f3002f73f8p149628jsn005490826fe9",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
