import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-neutral-900 p-4 py-8">
      <div className="container mx-auto flex justify-between text-lg items-center pr-10">
        <Link to="/" className="text-white text-xl font-bold pl-10">
          <p className="navbar-text">What to Cook</p>
        </Link>
        <div className="flex space-x-10">
          <Link to="/" className="text-white navbar-text">
            Home
          </Link>
          <Link to="/recommendation" className="text-white navbar-text">
            Search Recipes
          </Link>
          <Link to="/favorite" className="text-white navbar-text">
            Favorite
          </Link>
          <Link to="/about" className="text-white navbar-text">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
