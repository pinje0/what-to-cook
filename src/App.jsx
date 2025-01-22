import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
// import Recommendation from './pages/Recommendation';
import Footer from './Components/Footer';
import About from './Pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/recommendation" element={<Recommendation />} /> */}
        {/* <Route path="/favorite" element={<div>adasdas</div>} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
