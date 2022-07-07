const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "573345109b04c091e981da832efe40db",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
