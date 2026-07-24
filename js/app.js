// ============================================
// Movie Data Array
// ============================================
const movieData = [
    {
        id: 1,
        title: "The Dark Knight",
        year: 2008,
        genre: ["Action", "Crime", "Drama"],
        director: "Christopher Nolan",
        actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. Batman must accept one of the greatest psychological challenges to fight injustice.",
        rating: 9.0,
        runtime: "152 min",
        poster: "images/movie1.png"
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        genre: ["Action", "Sci-Fi", "Thriller"],
        director: "Christopher Nolan",
        actors: "Leonardo DiCaprio, Marion Cotillard, Ellen Page",
        description: "A skilled thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 8.8,
        runtime: "148 min",
        poster: "images/movie2.png"
    },
    {
        id: 3,
        title: "Interstellar",
        year: 2014,
        genre: ["Adventure", "Drama", "Sci-Fi"],
        director: "Christopher Nolan",
        actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: 8.6,
        runtime: "169 min",
        poster: "images/movie3.png"
    },
    {
        id: 4,
        title: "The Matrix",
        year: 1999,
        genre: ["Action", "Sci-Fi"],
        director: "Lana Wachowski, Lilly Wachowski",
        actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        description: "A computer programmer discovers that reality as he knows it is a simulation created by machines.",
        rating: 8.7,
        runtime: "136 min",
        poster: "images/movie4.png"
    },
    {
        id: 5,
        title: "Pulp Fiction",
        year: 1994,
        genre: ["Crime", "Drama"],
        director: "Quentin Tarantino",
        actors: "John Travolta, Samuel L. Jackson, Uma Thurman",
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        rating: 8.9,
        runtime: "154 min",
        poster: "images/movie5.png"
    },
    {
        id: 6,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: ["Drama"],
        director: "Frank Darabont",
        actors: "Tim Robbins, Morgan Freeman",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 9.3,
        runtime: "142 min",
        poster: "images/movie6.png"
    },
    {
        id: 7,
        title: "Avatar",
        year: 2009,
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "James Cameron",
        actors: "Sam Worthington, Zoe Saldana, Stephen Lang",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        rating: 7.8,
        runtime: "162 min",
        poster: "images/movie7.png"
    },
    {
        id: 8,
        title: "The Godfather",
        year: 1972,
        genre: ["Crime", "Drama"],
        director: "Francis Ford Coppola",
        actors: "Marlon Brando, Al Pacino, James Caan",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
        rating: 9.2,
        runtime: "175 min",
        poster: "images/movie8.png"
    },
    {
        id: 9,
        title: "Forrest Gump",
        year: 1994,
        genre: ["Drama", "Romance"],
        director: "Robert Zemeckis",
        actors: "Tom Hanks, Sally Field, Gary Sinise",
        description: "The presidencies of Kennedy and Johnson unfold from the perspective of an Alabama man with an IQ of 75.",
        rating: 8.8,
        runtime: "142 min",
        poster: "images/movie9.png"
    },
    {
        id: 10,
        title: "The Avengers",
        year: 2012,
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "Joss Whedon",
        actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
        description: "Earth's mightiest heroes must come together and learn to fight as a team to save the world from destruction.",
        rating: 8.0,
        runtime: "143 min",
        poster: "images/movie10.png"
    },
    {
        id: 11,
        title: "Gladiator",
        year: 2000,
        genre: ["Action", "Adventure", "Drama"],
        director: "Ridley Scott",
        actors: "Russell Crowe, Joaquin Phoenix, Lucilla",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        rating: 8.5,
        runtime: "155 min",
        poster: "images/movie11.png"
    },
    {
        id: 12,
        title: "The Lion King",
        year: 1994,
        genre: ["Animation", "Adventure", "Drama"],
        director: "Roger Allers, Rob Minkoff",
        actors: "Matthew Broderick, James Earl Jones, Jeremy Irons",
        description: "Lion prince Simba flees his kingdom after the death of his father, only to discover the truth about his past when his childhood sweetheart tracks him down.",
        rating: 8.5,
        runtime: "88 min",
        poster: "images/movie12.png"
    },
    {
        id: 13,
        title: "Fight Club",
        year: 1999,
        genre: ["Drama"],
        director: "David Fincher",
        actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.",
        rating: 8.8,
        runtime: "139 min",
        poster: "images/movie13.png"
    },
    {
        id: 14,
        title: "Jurassic Park",
        year: 1993,
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "Steven Spielberg",
        actors: "Sam Neill, Laura Dern, Jeff Goldblum",
        description: "A pragmatic paleontologist touring an almost complete theme park is tasked with protecting a couple of kids while exposing the flaws of the park's infrastructure.",
        rating: 8.1,
        runtime: "127 min",
        poster: "images/movie14.png"
    },
    {
        id: 15,
        title: "Titanic",
        year: 1997,
        genre: ["Drama", "Romance"],
        director: "James Cameron",
        actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        rating: 7.8,
        runtime: "194 min",
        poster: "images/movie15.png"
    },
    {
        id: 16,
        title: "The Silence of the Lambs",
        year: 1991,
        genre: ["Crime", "Drama", "Thriller"],
        director: "Jonathan Demme",
        actors: "Jodie Foster, Scott Glenn, Anthony Hopkins",
        description: "A young FBI cadet must receive the help of an incarcerated cannibal killer to catch another serial killer who skins his victims.",
        rating: 8.6,
        runtime: "118 min",
        poster: "images/movie16.png"
    },
    {
        id: 17,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "Peter Jackson",
        actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
        description: "A meek hobbit from the Shire and eight companions set out on a journey to destroy the One Ring and defeat the Dark Lord.",
        rating: 8.8,
        runtime: "178 min",
        poster: "images/movie17.png"
    },
    {
        id: 18,
        title: "Schindler's List",
        year: 1993,
        genre: ["Biography", "Drama", "History"],
        director: "Steven Spielberg",
        actors: "Liam Neeson, Ralph Fiennes, Ben Kingsley",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his workforce.",
        rating: 9.0,
        runtime: "195 min",
        poster: "images/movie18.png"
    },
    {
        id: 19,
        title: "Back to the Future",
        year: 1985,
        genre: ["Adventure", "Comedy", "Sci-Fi"],
        director: "Robert Zemeckis",
        actors: "Michael J. Fox, Christopher Lloyd, Lea Thompson",
        description: "A teenager is accidentally sent back in time 30 years in a time-traveling DeLorean invented by his best friend.",
        rating: 8.5,
        runtime: "116 min",
        poster: "images/movie19.png"
    },
    {
        id: 20,
        title: "The Usual Suspects",
        year: 1995,
        genre: ["Crime", "Drama", "Mystery"],
        director: "Bryan Singer",
        actors: "Stephen Baldwin, Gabriel Byrne, Benicio Del Toro",
        description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat with the most unlikely gang of criminals.",
        rating: 8.5,
        runtime: "106 min",
        poster: "images/movie20.png"
    },
    {
        id: 21,
        title: "Amélie",
        year: 2001,
        genre: ["Comedy", "Drama", "Fantasy"],
        director: "Jean-Pierre Jeunet",
        actors: "Audrey Tautou, Mathieu Kassovitz, Rufus",
        description: "A shy waitress decides to change the lives of those around her for the better after a chance event transforms her life.",
        rating: 8.3,
        runtime: "122 min",
        poster: "images/movie21.png"
    }
];

// ============================================
// State Variables
// ============================================
let allMovies = [...movieData];
let filteredMovies = [...movieData];
let currentSearchTerm = '';
let selectedGenres = [];

// ============================================
// DOM Elements
// ============================================
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const genreFilters = document.getElementById('genreFilters');
const themeToggle = document.getElementById('themeToggle');
const modal = document.getElementById('movieModal');
const closeModal = document.getElementById('closeModal');

// ============================================
// Debounce Function
// ============================================
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

// ============================================
// Render Movies
// ============================================
function renderMovies(movies) {
    movieGrid.innerHTML = '';

    if (movies.length === 0) {
        movieGrid.innerHTML = '<div class="no-movies">No movies found. Try adjusting your filters!</div>';
        return;
    }

    movies.forEach(movie => {
        const card = createMovieCard(movie);
        movieGrid.appendChild(card);
    });
}

// ============================================
// Create Movie Card
// ============================================
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title} poster" class="movie-poster">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-year">${movie.year}</span>
                <span class="movie-rating">${movie.rating.toFixed(1)}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => openMovieModal(movie));
    return card;
}

// ============================================
// Extract Unique Genres
// ============================================
function getUniqueGenres(movies) {
    const genresSet = new Set();
    movies.forEach(movie => {
        movie.genre.forEach(g => genresSet.add(g));
    });
    return Array.from(genresSet).sort();
}

// ============================================
// Create Genre Filters
// ============================================
function createGenreFilters() {
    genreFilters.innerHTML = '';
    const uniqueGenres = getUniqueGenres(movieData);

    uniqueGenres.forEach(genre => {
        const genreItem = document.createElement('div');
        genreItem.className = 'genre-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'genre-checkbox';
        checkbox.id = `genre-${genre}`;
        checkbox.value = genre;

        const label = document.createElement('label');
        label.className = 'genre-label';
        label.htmlFor = `genre-${genre}`;
        label.textContent = genre;

        genreItem.appendChild(checkbox);
        genreItem.appendChild(label);

        checkbox.addEventListener('change', handleGenreChange);
        genreItem.addEventListener('click', (e) => {
            if (e.target.tagName !== 'INPUT') {
                checkbox.checked = !checkbox.checked;
                handleGenreChange();
            }
        });

        genreFilters.appendChild(genreItem);
    });
}

// ============================================
// Handle Genre Change
// ============================================
function handleGenreChange() {
    const checkboxes = document.querySelectorAll('.genre-checkbox:checked');
    selectedGenres = Array.from(checkboxes).map(cb => cb.value);
    filterMovies();
}

// ============================================
// Filter Movies (Combined Search + Genre)
// ============================================
function filterMovies() {
    filteredMovies = allMovies.filter(movie => {
        // Check search term
        const matchesSearch = movie.title.toLowerCase().includes(currentSearchTerm.toLowerCase());

        // Check genres
        const matchesGenre = selectedGenres.length === 0 ||
            selectedGenres.some(genre => movie.genre.includes(genre));

        return matchesSearch && matchesGenre;
    });

    renderMovies(filteredMovies);
}

// ============================================
// Handle Search Input
// ============================================
function handleSearch(e) {
    currentSearchTerm = e.target.value;
    filterMovies();
}

// ============================================
// Movie Modal Functions
// ============================================
function openMovieModal(movie) {
    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalPoster').alt = `${movie.title} poster`;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalYear').textContent = `${movie.year}`;
    document.getElementById('modalRating').textContent = `${movie.rating.toFixed(1)} ⭐`;
    document.getElementById('modalGenres').textContent = movie.genre.join(', ');
    document.getElementById('modalRuntime').textContent = movie.runtime;
    document.getElementById('modalDirector').textContent = movie.director;
    document.getElementById('modalActors').textContent = movie.actors;
    document.getElementById('modalDescription').textContent = movie.description;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMovieModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// Theme Toggle Functions
// ============================================
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    saveTheme();
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.querySelector('.toggle-icon').textContent = isDarkMode ? '☀️' : '🌙';
}

function saveTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeIcon();
}

// ============================================
// Event Listeners
// ============================================
// Debounced search (400ms delay)
const debouncedSearch = debounce(handleSearch, 400);
searchInput.addEventListener('input', debouncedSearch);

// Theme toggle
themeToggle.addEventListener('click', toggleTheme);

// Modal close button
closeModal.addEventListener('click', closeMovieModal);

// Click outside modal to close
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeMovieModal();
    }
});

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeMovieModal();
    }
});

// ============================================
// Initialize App
// ============================================
function initializeApp() {
    loadTheme();
    createGenreFilters();
    renderMovies(allMovies);
}

// Start the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);
