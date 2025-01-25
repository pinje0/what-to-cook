import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Recommendation = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const fetchRecipes = async () => {
    try {
      setError('');
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
        params: {
          ingredients,
          number: 5,
          apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
        },
      });
      setRecipes(response.data);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen pt-36  mb-10">
      {/* Helmet */}
      <Helmet>
        <title>What to Cook | Recommendation</title>
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Recipe Recommendations</h1>
        <p className="text-sm text-red-500 text-center mb-6">
          Note: Only 5 recipes are displayed due to API limitations.
        </p>
        <div className="flex flex-col items-center mb-8">
          <input
            type="text"
            placeholder="Enter ingredients (e.g., chicken, rice)"
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg mb-4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <button onClick={fetchRecipes} className="bg-primary button-74 text-white px-6 py-2 rounded-lg">
            Search Recipes
          </button>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-bold">{recipe.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
