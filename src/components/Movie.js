import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ coverImg, title, genres, index, id }) {
  return (
    <div>
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>

      <p>
        {genres.map((genre, i) => (
          <li key={i}>{genre}</li>
        ))}
      </p>
      <img src={coverImg} alt={title}></img>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
