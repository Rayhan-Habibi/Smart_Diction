import "./App.css"
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Result from './components/Result';


function App() {
  
  return (
      <div className="App lg:h-screen">
            <Navigation />
            <div className="lg:grid lg:grid-cols-2 lg:h-5/6">
              <SearchBar />
              <Result />
            </div>
      </div>
  );
}

export default App;
