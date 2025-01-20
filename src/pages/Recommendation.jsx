import { useState } from 'react';
import axios from 'axios';

const Recommendation = () => {
  const [ingredients, setIngredients] = useState(''); // State untuk bahan
  const [recipes, setRecipes] = useState([]); // State untuk resep
  const [loading, setLoading] = useState(false); // State untuk loading

  // Fungsi untuk menangani input bahan
  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  // Fungsi untuk mengambil resep dari API
  const fetchRecipes = async () => {
    if (!ingredients) return; // Jangan fetch jika bahan kosong
    setLoading(true); // Set loading true saat fetching

    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
        params: {
          ingredients: ingredients,
          number: 5, // Jumlah resep yang ditampilkan
          apiKey: 'YOUR_SPOONACULAR_API_KEY', // Ganti dengan API Key Anda
        },
      });
      setRecipes(response.data); // Menyimpan data resep
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false); // Set loading false setelah selesai
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Find Recipes</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={ingredients}
          onChange={handleInputChange}
          placeholder="Enter ingredients (e.g., egg, milk, flour)"
          className="border p-2 rounded-lg mr-4"
        />
        <button onClick={fetchRecipes} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Search Recipes
        </button>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{recipe.title}</h3>
                  <p className="text-gray-600 mt-2">Click to see the full recipe</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No recipes found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recommendation;
