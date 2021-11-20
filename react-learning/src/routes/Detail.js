import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

function CalculateMinToHour(minute) {
  return `${Math.round(minute / 60)}h ${minute % 60}m`;
}

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h1>{movie.title_long}</h1>
          <p>Rating: {movie.rating}</p>
          <p>
            Runtime: {CalculateMinToHour(movie.runtime)} ({movie.runtime}m)
          </p>
          <p>{movie.description_full}</p>
          <Link to={`/`}>Go To List</Link>
        </div>
      )}
    </div>
  );
}
export default Detail;
