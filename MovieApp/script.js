let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Your actual OMDB API key should be used here
let apiKey = "your_api_key_here"; 

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
    } else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.Response === "True") {
                    result.innerHTML = `
                        <div class="info">
                            <img src="${data.Poster}" class="poster" alt="${data.Title} Poster">
                            <div>
                                <h2>${data.Title}</h2>
                                <div class="rating">
                                    <img src="https://image.shutterstock.com/image-vector/star-icon-vector-260nw-1363866818.jpg" alt="Rating Star">
                                    <h4>${data.imdbRating}</h4>
                                </div>
                                <div class="details">
                                    <span>${data.Rated}</span>
                                    <span>${data.Year}</span>
                                    <span>${data.Runtime}</span>
                                </div>
                                <div class="genre">
                                    ${data.Genre.split(",").map(genre => `<div>${genre}</div>`).join('')}
                                </div>
                            </div>
                        </div>
                        <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                        <h3>Cast:</h3>
                        <p>${data.Actors}</p>
                    `;
                } else {
                    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                result.innerHTML = `<h3 class="msg">Error occurred while fetching data</h3>`;
            });
    }
};

searchBtn.addEventListener("click", getMovie);
