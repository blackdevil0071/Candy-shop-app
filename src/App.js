
import './App.css';
import Candy from './Components/Candy/Candy';
import { CandyProvider } from './Components/CandyContext';
import Header from './Components/UI/Header';

function App() {
  return (
    <div className="App">
      <CandyProvider>
        <Header/>
        <main>
          <Candy/>
        </main>
        </CandyProvider>
    </div>
  );
}

export default App;
