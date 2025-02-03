import './App.css'
import MovieCard from "../src/components/movieCards";

function App() {
  const movies = [
    { id: 1, title: "ReactMovie Sn 1", postUrl: '/src/assets/react.svg'},
    { id: 2, title: "ReactMovie Sn 2", postUrl: '/src/assets/react.svg'},
  ];

  return (

    <div className="movie-grid">
    {/* Render a MovieCard for each movie */}
    {movies.map((movie) => (
      <MovieCard 
        key={movie.id} 
        title={movie.title} 
        postUrl={movie.postUrl} 
      />
    ))}
  </div>
  )
}

export default App
