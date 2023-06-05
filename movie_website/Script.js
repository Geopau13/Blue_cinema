

// Sample movie data (replace with your own data)
const movies = [
  { title: "Kill Bill", genre: "Action", year: 2022, director: "Quentin Tarantino", image: "image.jpg", description: ".Cuatro años luego de recibir una bala en la cabeza en su propia boda, La novia (Uma Thurman) sale del coma y pone en marcha su venganza en represalia. El desquite es feroz en esta primera parte de una historia repleta de acción de Quentin Tarantino." },
  { title: "Annie Hall", genre: "Comedy", year: 2023, director: "Woody Allen", image: "movie33.jpg", description: "Alvy Singer, un cuarentón bastante neurótico, trabaja como humorista en clubs nocturnos. Tras romper con Annie, reflexiona sobre su vida, rememorando sus amores, sus matrimonios, pero sobre todo su relación con Annie. Al final, llega a la conclusión de que son sus manías y obsesiones las que siempre acaban arruinando su relación con las mujeres." },
  { title: "After Sun", genre: "Drama", year: 2021, director: "Charlotte Wells", image: "movie3.jpg", description: "Sophie (Francesca Corio / Celia Rowlson-Hall como la Sophie adulta) reflexiona sobre la alegría compartida y la melancolía privada de unas vacaciones que hizo con su padre (Paul Mescal) 20 años atrás. Los recuerdos reales e imaginarios llenan los espacios entre las imágenes mientras intenta reconciliar al padre que conoció con el hombre que no conoció." },
  { title: "Love", genre: "Thriller", year: 2023, director: "Gaspar Noé", image: "movie4.jpg", description: "Un 1 de enero por la mañana, el teléfono suena. Murphy se despierta junto a su esposa y su hijo de dos años. Escucha el mensaje, la madre de Electra, muy inquieta, le pregunta si tiene noticias de su hija que está desaparecida. Teme que le haya sucedido algo grave. A lo largo de un día lluvioso, Murphy se encuentra solo en casa, recordando su historia de amor más grande; dos años con Electra. Una pasión llena de promesas, juegos, excesos, errores..." },
  { title: "Manticora", genre: "Thriller", year: 2022, director: "Carlos Vermut", image: "movie5.jpg", description: "Mantícora' es, quizá, su mejor película, pero también la más dura de ver, una obra maestra del cine de monstruos en el que no se ha gastado ni un euro en efectos especiales. No hace falta: a veces, para encontrar los mayores monstruos solo hace falta poner una cámara y empezar a rodar." }
];

// Sample post data (replace with your own data)
const posts = [
  { title: "Federico Fellini", content: "«Un buen vino es como una buena película: dura un instante y te deja en la boca un sabor a gloria; es nuevo en cada sorbo y , como ocurre con las películas, nace y renace en cada saboreador»"},
  { title: "Pedro Almodóvar", content: "«Ser director de cine en España es como ser torero en Japón»."},
  { title: "Jean Luc Goddard", content: "«La fotografía es verdad. Y el cine es una verdad 24 veces por segundo»."}
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

  
  


