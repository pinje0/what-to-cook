import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      id="home"
      className="pt-36 dark:bg-dark bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white px-4"
      style={{
        backgroundImage: "url('/images/f1c3fc727775a7378b32c4596e2e0ca2.gif')",
      }}
    >
      {/* Caution */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      <div className="container">
        <div className="flex flex-wrap">
          {/* <!--* Left Section --> */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="mb-3 max-w-md text-2xl font-bold text-white lg:text-3xl hero-text">
              Welcome to &apos;What to Cook&apos;
            </h1>
            <p className="max-w-xl text-base font-medium text-white text lg:text-lg hero-text mb-4">
              Find delicious recipes based on the ingredients you have! Reduce food waste and enjoy an easier
              cooking experience.
            </p>
            <Link
              to="/rekomendasi"
              className="button-74 bg-neutral-900 text-white px-6 py-4 rounded-lg text-lg"
            >
              Start Searching for Recipes
            </Link>
          </div>
          {/* <!--* Right Section --> */}
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <div className="sm:pt-0-10 relative mt-10 mb-16 lg:right-0 lg:mt-9">
                {/* <img
                  src="./images/7d60ac2f86a57604fb246c3d6a6f3ede.jpg"
                  alt=""
                  className="relative z-10 mx-auto max-w-60  rounded-full"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
