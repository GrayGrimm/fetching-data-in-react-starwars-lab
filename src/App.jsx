import { useState, useEffect } from "react";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import * as starshipService from "./services/starshipService";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  useEffect(() => {
    const fetchAllStarships = async () => {
      const fetchedStarships = await starshipService.index();
      console.log(fetchedStarships);
      setStarships(fetchedStarships);
      setFilteredStarships(fetchedStarships);
    };
    fetchAllStarships();
  }, []);
  return (
    <>
      <div className="main">
        <h1>Star Wars API</h1>
        <StarshipSearch />
        <StarshipList starships={filteredStarships} />
      </div>
    </>
  );
};

export default App;
