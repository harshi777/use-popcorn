import Movie from "./Movie";
export default function MovieList({ movie, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movie?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
