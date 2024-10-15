let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');
// let key = '6d26df89';
// Function to get Data from API
let getMovie = () => {
	let movieName = movieNameRef.value;
	let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

	// If input field is empty
	if (movieName.length <= 0) {
		result.innerHTML = `<h3 class='msg>Please Enter a Movie Name</h3>`;
	}
	// If input is not empty
	else {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				// If Movie exist in Database
				if (data.Response == 'True') {
					result.innerHTML = `
					<div class='info'>
						<img src=${data.Poster} class='poster'/>
						<div>
							<h2>${data.Title}</h2>
							<div class='rating'>
								<img src='star-icon.svg' >
								<h4>${data.imdbRating}</h4>
							</div>

							<div class='details'>
								<span>${data.Rated}</span>
								<span>${data.Year}</span>
								<span>${data.Runtime}</span>
							</div>

							<div class='genre'>
								<div>
									${data.Genre.split(',').join(`<div></div>`)}
								</div>
							</div>
						</div>
					</div>

					<h3>Plot:</h3>
					<p>${data.Plot}</p>
					<p>Cast</p>
					<p>${data.Actors}</p>
				`;
				} else {
					result.innerHTML = `<h3 class='msg'>${data.error}</h3>`;
				}
			})
			// If Error Occurs
			.catch(() => {
				result.innerHTML = `<h3 class='msg'>Error Occurred</h3>`;
			});
	}
};

// getMovie();
searchBtn.addEventListener('click', getMovie);
window.addEventListener('load', getMovie);
