import { Routes as ReactRoutes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Home from "pages/Home";
import About from "pages/About";
import PokemonDetail from "pages/PokemonDetail";
import MyPokemon from "pages/MyPokemon";
import NotFound from "pages/NotFound";

const Routes = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      window.scroll(0, 0);
    }
  }, [location]);

  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
      <Route path="/my-pokemon" element={<MyPokemon />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
