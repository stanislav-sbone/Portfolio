import { BrowserRouter as Router } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { Slide, ToastContainer } from 'react-toastify';
import ScrollToTop from './components/common/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <main>
          <ScrollToTop />
          <AppRoutes />
        </main>
        <Footer />
      </Router>
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
