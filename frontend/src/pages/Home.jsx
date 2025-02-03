import React from "react";
import MovieCard from "../components/movieCards";
import reactLogo from "../assets/react.svg"


function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020", postUrl:reactLogo, Desc:"This movie released on the 1st"},
        {id: 2, title: "John Wick 2", release_date: "2020", postUrl:reactLogo, Desc:"This movie released on the 2nd"},
        {id: 3, title: "John Wick 3", release_date: "2020", postUrl:reactLogo, Desc:"This movie released on the 3rd"},
        {id: 4, title: "John Wick 4", release_date: "2020", postUrl:reactLogo, Desc:"This movie released on the 4th"}
    ];

    const handleSearch = () => {};
    return (
        
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="search for movies"
                    className="search input"
                />
                <button type="submit" className="search-button"></button>
            </form>

        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) =>
                    <MovieCard movie={movie}
                    key={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    postUrl={movie.postUrl}
                    Desc={movie.Desc}
                />
                )}
            </div>
        </div>
    </div>
    );
}
export default Home;