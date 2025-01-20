import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center bg-fixed min-h-screen flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/images/f1c3fc727775a7378b32c4596e2e0ca2.gif')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg hero-text">
          Welcome to What to Cook
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-center max-w-3xl text-shadow-md hero-text">
          Find delicious recipes based on the ingredients you have! Reduce food waste and enjoy an easier
          cooking experience.
        </p>
        <Link
          to="/rekomendasi"
          className="button-74 bg-neutral-900  text-white px-6 py-3 rounded-lg text-lg  "
        >
          Start Searching for Recipes
        </Link>
        {/* <Link
          to="/rekomendasi"
          className="bg-neutral-900 home-button text-white px-6 py-3 rounded-lg text-lg  "
        >
          Mulai Cari Resep
        </Link> */}
      </div>

      {/* Section Lain */}
      {/* <div className="bg-gray-100 p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Why Choose Recipe Recommendation</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Recipe Recommendation helps you save time, reduce food waste, and provides the best recipes based on
          the ingredients you have.
        </p>
      </div> */}
    </div>
  );
};

export default Home;
