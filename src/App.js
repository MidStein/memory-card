import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import CardsDisplay from './components/CardsDisplay';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);

  return (
    <div className='App'>
      <Header bestScore={bestScore} setBestScore={setBestScore} currScore={currScore} />
      <CardsDisplay currScore={currScore} setCurrScore={setCurrScore} />
    </div>
  );
}

export default App;
