import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";


function App() {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/movie" element ={<Movies />} />
      <Route path = "/tv" element ={<Tv />} />
      <Route path = "/person" element ={<Celebrity />} />
      <Route path = "/*" element ={<NotFound />} />

     </Routes>
    </BrowserRouter>
  );
}

export default App;
