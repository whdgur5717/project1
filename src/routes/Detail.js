import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Detail() {
  const { id } = useParams();
  const [number, setNumber] = useState(0);
  const getMovies = async () => {
    const first = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}

export default Detail;
