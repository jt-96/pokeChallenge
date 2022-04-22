import './App.css';
import NavBar from './components/navBar/navBar';
import PokeDex from './components/pokeDex/pokeDex';
import Footer from './components/footer/footer';
import { useState } from 'react';

function App() {

  const [searchParam, setSearchParam] = useState('');

  function addSearchParam(param) {
    setSearchParam(param);
  }

  return (
    <div className="App">
      <NavBar onAddSearchParam={addSearchParam}/>
      <PokeDex query={searchParam}/>
      <Footer />
    </div>
  );
}

export default App;
