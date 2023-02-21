import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Skeleton from './components/Skeleton';
import Home from './pages/Home';
import { CounterProvider } from './context/MainContext';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Router>   
          <Routes>
            <Route path="/" element={<Home>
              <Navbar/>
              <Skeleton/>
            </Home>} />
          </Routes>
        </Router>
      </CounterProvider>
    </div>
  );
}

export default App;
