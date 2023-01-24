import './App.css';

import Header from './components/Header';
import Tabs from './components/Tabs';
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <nav>
          <Tabs />
        </nav>
        <Home/>
      </main>
    </div>
  );
}

export default App;
