import styled from 'styled-components';
import { tv } from "../../Data/Dummy";
import { Movie } from "./Movie";



export const TV = () => {
  return (
    <ContentLayout>
       {tv.results.map((TvProgram) => {
          return (
            <Movie
              backImg={TvProgram.backdrop_path}
              title={TvProgram.title}
              star={TvProgram.vote_average}
              detail={TvProgram.overview}
            />
          );
        })}
    </ContentLayout>
  );
};
const ContentLayout = styled.div`
  height: 100vh;
  padding: 12px;
  color: white;
  background-color: #464b8d;
`;


