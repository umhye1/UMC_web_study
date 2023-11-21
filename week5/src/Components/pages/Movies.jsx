import styled from "styled-components";
import { movies } from "../../Data/movieDummy";
import { Movie } from "./Movie";


export const Movies = () => {
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
    height: 100vh;
    background-color: #22254b;
    flex-wrap: wrap;
    align-content: flex-start;
  `;
  