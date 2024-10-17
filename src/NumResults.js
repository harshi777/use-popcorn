export default function NumResults({ movie }) {
  return (
    <p className="num-results">
      Found <strong>{movie?.length ? movie.length : 0}</strong> results
    </p>
  );
}
