import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
