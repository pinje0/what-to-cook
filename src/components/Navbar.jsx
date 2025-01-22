import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const toTop = document.querySelector('#toTop');
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    const handleScroll = () => {
      if (header && toTop) {
        const fixedNav = header.offsetTop;

        if (window.pageYOffset > fixedNav) {
          header.classList.add('navbar-fixed');
          toTop.classList.remove('hidden');
          toTop.classList.add('flex');
        } else {
          header.classList.remove('navbar-fixed');
          toTop.classList.remove('flex');
          toTop.classList.add('hidden');
        }
      }
    };

    const handleHamburgerClick = () => {
      if (hamburger && navMenu) {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
      }
    };

    const handleOutsideClick = (e) => {
      if (
        hamburger &&
        navMenu &&
        e.target !== hamburger &&
        !hamburger.contains(e.target) &&
        e.target !== navMenu &&
        !navMenu.contains(e.target)
      ) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    if (hamburger) hamburger.addEventListener('click', handleHamburgerClick);
    window.addEventListener('click', handleOutsideClick);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hamburger) hamburger.removeEventListener('click', handleHamburgerClick);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center bg-neutral-900">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link to="/" className="block py-6 text-xl font-bold text-white hero-text">
              <p className="navbar-text">What to Cook</p>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="absolute right-4 block lg:hidden"
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              id="nav-menu"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-neutral-900 py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none dark:bg-dark dark:shadow-slate-700 lg:dark:bg-transparent"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link to="/" className="mx-8 flex py-2 text-base text-white hero-text navbar-text">
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/recommendation"
                    className="mx-8 flex py-2 text-base text-white hero-text navbar-text"
                  >
                    Search Recipes
                  </Link>
                </li>
                <li className="group">
                  <Link to="/favorite" className="mx-8 flex py-2 text-base text-white hero-text navbar-text">
                    Favorite
                  </Link>
                </li>
                <li className="group">
                  <Link to="/about" className="mx-8 flex py-2 text-base text-white hero-text navbar-text">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
