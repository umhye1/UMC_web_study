import styled from "styled-components";
import { movies } from "../Data/movieDummy.js";
import { Movie } from "./pages/Movie.jsx";

export const HW3 = () => {
  return (
    <MovieLayout>
      {movies.results.map((movie) => {
        return (
          <Movie
            backImg={movie.backdrop_path}
            title={movie.title}
            star={movie.vote_average}
            detail={movie.overview}
          />
        );
      })}
    </MovieLayout>
  );
};

const MovieLayout = styled.div`
  display: flex;
  margin: 0px;
  background-color: #22254b;
  flex-wrap: wrap;
`;
