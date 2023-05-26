
 // JavaScript code goes here
// This is just a sample code to demonstrate dynamic population of movie list and details

// Sample movie data (replace with your own data)
const movies = [
    { title: "Movie 1", genre: "Action", year: 2022, director: "Director 1", image: "movie1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Movie 2", genre: "Comedy", year: 2023, director: "Director 2", image: "movie2.jpg", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Movie 3", genre: "Drama", year: 2021, director: "Director 3", image: "movie3.jpg", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
    { title: "Movie 4", genre: "Thriller", year: 2023, director: "Director 4", image: "movie4.jpg", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
    { title: "Movie 5", genre: "Thriller", year: 2022, director: "Director 5", image: "movie5.jpg", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." }
  ];
  
  // Sample post data (replace with your own data)
  const posts = [
    { title: "Post 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "May 1, 2023" },
    { title: "Post 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "May 5, 2023" },
    { title: "Post 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", date: "May 10, 2023" }
  ];
  
  // Function to populate the movie list
  function populateMovieList(genreFilter = "") {
    const actionMovieList = document.getElementById("actionMovieList");
    const comedyMovieList = document.getElementById("comedyMovieList");
    const dramaMovieList = document.getElementById("dramaMovieList");
    const thrillerMovieList = document.getElementById("thrillerMovieList");
  
    actionMovieList.innerHTML = ""; // Clear previous movie list
    comedyMovieList.innerHTML = "";
    dramaMovieList.innerHTML = "";
    thrillerMovieList.innerHTML = "";
  
    movies.forEach(movie => {
      if (genreFilter === "" || movie.genre === genreFilter) {
        const li = document.createElement("li");
        li.classList.add("movie-item");
        li.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p>${movie.description}</p>
          </div>
        `;
  
        switch (movie.genre) {
          case "Action":
            actionMovieList.appendChild(li);
            break;
          case "Comedy":
            comedyMovieList.appendChild(li);
            break;
          case "Drama":
            dramaMovieList.appendChild(li);
            break;
          case "Thriller":
            thrillerMovieList.appendChild(li);
            break;
        }
      }
    });
  }
  
  // Function to populate the latest posts
  function populateLatestPosts() {
    const postList = document.getElementById("postList");
    postList.innerHTML = ""; // Clear previous posts
  
    posts.forEach(post => {
      const div = document.createElement("div");
      div.classList.add("post-item");
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <p><em>${post.date}</em></p>
      `;
      postList.appendChild(div);
    });
  }
  
  // Function to handle navigation menu clicks
  function handleNavClick(event) {
    event.preventDefault();
  
    const targetId = event.target.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
  
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth"
    });
  }
  
  // Attach click event listener to navigation menu
  const navMenu = document.querySelector(".nav-menu");
  navMenu.addEventListener("click", handleNavClick);
  
  // Initial population of the movie list and latest posts
  populateMovieList();
  populateLatestPosts();
  