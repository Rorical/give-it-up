import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomMarquee from './components/BottomMarquee';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import BookPage from './pages/BookPage';

function App() {
  return (
    <Router>
      <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <BottomMarquee />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
