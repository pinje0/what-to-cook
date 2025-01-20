import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recommendation from './pages/Recommendation';
// import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/favorite" element={<div>adasdas</div>} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
