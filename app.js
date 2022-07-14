const getMovieData = async () => {
    const response = await axios.get("https://api.tvmaze.com/singlesearch/shows?q=girls");
    return response;
};


const movieContainer = document.querySelector('#movie-cover-container')

const movieCover = getMovieData.data.image.medium;

movieContainer.append(movieCover);