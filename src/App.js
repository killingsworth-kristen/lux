import './App.css';

import Header from './components/Header';
import Tabs from './components/Tabs';

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
      </main>
    </div>
  );
}

export default App;
