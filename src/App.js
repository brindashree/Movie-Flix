import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
 


const api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9068210e8118347b031585ea0e418dd4&page=1`;

const search_api = "https://api.themoviedb.org/3/search/movie?api_key=9068210e8118347b031585ea0e418dd4&query="


function App() {

  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(api);
  }, []);

  const getMovies = (apikey) => {
    fetch(apikey)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(search_api + searchTerm);
      setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
        <header>
          <h1 className="head">Movie Flix</h1>
          <form onSubmit={handleOnSubmit}>
             <input
                className="search"
                type="search"
                placeholder="search..."
                value={searchTerm}
                onChange={handleOnChange}
               />
          </form>
        </header>
        <div className="movie-container">
      
                 {movies.length > 0 && movies.map((movie) => {
                     return (
                       <Movie {...movie} key={movie.id}/>
                     )
                 })}
        </div>
      </div>
  );
}

export default App;
