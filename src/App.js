import './App.css';
import NavBar from './components/navBar/navBar';
import SearchBar from './components/searchBar/searchBar';
import PokeDex from './components/pokeDex/pokeDex';
import PokeRecent from './components/pokeRecent/pokeRecent';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <PokeDex />
      <PokeRecent />
      <Footer />
    </div>
  );
}

export default App;
