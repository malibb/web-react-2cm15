import './App.css';
import LevelsContainer from './Components/LevelsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-gray-900">Choose Your Level</h1>
        <LevelsContainer></LevelsContainer>
      </header>
    </div>
  );
}

export default App;
