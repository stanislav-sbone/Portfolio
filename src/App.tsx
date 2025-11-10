import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
