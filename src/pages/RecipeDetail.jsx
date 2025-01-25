import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); // State untuk favorit

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch recipe details. Please try again.');
        }

        const data = await response.json();
        setRecipe(data);

        // Periksa apakah resep ini sudah ada di favorit
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const alreadyFavorite = storedFavorites.some((fav) => fav.id === data.id);
        setIsFavorite(alreadyFavorite);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id, API_KEY]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      // Hapus dari favorit
      const updatedFavorites = storedFavorites.filter((fav) => fav.id !== recipe.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Tambahkan ke favorit
      const newFavorite = {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
      };
      localStorage.setItem('favorites', JSON.stringify([...storedFavorites, newFavorite]));
    }
    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!recipe) {
    return null;
  }

  return (
    <div className="min-h-screen pt-36 px-4 mb-10">
      {/* Helmet */}
      <Helmet>
        <title>What to Cook | Recipe Detail</title>
      </Helmet>
      <div className="container mx-auto">
        {/* Peringatan keterbatasan API */}
        <p className="mb-4 text-yellow-600 bg-yellow-100 p-4 rounded-lg">
          <i className="fa-solid fa-triangle-exclamation mr-2"></i>
          Due to API limitations, some recipe details or steps may be incomplete.
        </p>
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-w-md mx-auto mb-6 rounded-lg shadow-md"
        />
        {/* Tombol Favorit */}
        <button
          onClick={toggleFavorite}
          className={`mt-4 px-6 py-2 button-74 rounded-lg shadow-md transition duration-500 ${
            isFavorite ? 'hover:bg-red-500 hover:text-white' : 'hover:bg-green-500 hover:text-white'
          }`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <h2 className="text-xl font-semibold mb-2 mt-6">Summary</h2>
        <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        {recipe.analyzedInstructions.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-2">Instructions</h2>
            {recipe.analyzedInstructions.map((instruction, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium">{instruction.name || `Step Group ${index + 1}`}</h3>
                <ul className="list-decimal list-inside text-gray-700">
                  {instruction.steps.map((step) => (
                    <li key={step.number} className="mb-2">
                      {step.step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
