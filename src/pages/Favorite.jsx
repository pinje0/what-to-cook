import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen pt-36 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Favorite Recipes</h1>
          <p className="text-gray-600">You have no favorite recipes saved yet.</p>
          <Link
            to="/recommendation"
            className="button-74 mt-6 inline-block px-6 py-2 rounded-lg shadow-md transition duration-500"
          >
            Browse Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-36 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Favorite Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{recipe.title}</h2>
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  className="mt-2 text-sm text-red-500 hover:underline"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
