import './App.css';
import NavBar from './components/navBar/navBar';
import PokeDex from './components/pokeDex/pokeDex';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PokeDex />
      <Footer />
    </div>
  );
}

export default App;
