import Movie from "../components/Movie";
import { useState } from "react";
function Home() {
  const [msg, setMsg] = useState("평점을 입력하세요");
  const [onLoading, setOnLoading] = useState(true); //로딩중 - true / 로딩끝남 - false
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState("");
  const movieAPI = async () => {
    if (!rating) {
      setMsg("입력먼저하셈");
      return;
    }
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setOnLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          // value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          onClick={() => {
            setMsg("로딩중");
            movieAPI();
          }}>
          검색
        </button>
      </form>
      {onLoading ? (
        <h1>{msg}</h1>
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <div key={index}>
              <Movie
                coverImg={movie.medium_cover_image}
                id={movie.id}
                title={movie.title}
                genres={movie.genres}
                index={index}></Movie>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Home;
