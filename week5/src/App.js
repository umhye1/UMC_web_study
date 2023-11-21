import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Movies}  from "./Components/pages/Movies";
import {Celebrity} from "./Components/pages/Celebrity";
import {Header} from "./Components/Header";
import {TV} from "./Components/pages/TV";
import {Home} from "./Components/pages/Home";
import MovieDetail from './Components/pages/MovieDetail';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="tv" element={<TV />} />
        <Route path="movies" element={<Movies />} />
        <Route path="celebrity" element={<Celebrity />} />
        <Route path="/movie/:name" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
