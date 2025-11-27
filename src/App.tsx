import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { Slide, ToastContainer } from 'react-toastify';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </Router>
      <Footer />
      <ToastContainer
        autoClose={3000}
        position="bottom-right"
        draggable
        theme="light"
        transition={Slide}
      />
    </ThemeProvider>
  );
}

export default App;
