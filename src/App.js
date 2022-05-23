import './App.css';
import Books from './Components/books';
import Head from './Components/Head';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head/>
        <Books/>
      </header>
    </div>
  );
}

export default App;
