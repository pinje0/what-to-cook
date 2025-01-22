import { useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';

const Recommendation = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Untuk menyimpan detail resep yang dipilih
  const [detailLoading, setDetailLoading] = useState(false);

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const fetchRecipes = async () => {
    if (!ingredients) return;
    setLoading(true);

    try {
      const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
        params: {
          ingredients: ingredients,
          number: 9,
          offset: (page - 1) * 9,
          apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
        },
      });

      setRecipes(response.data.slice(0, 50)); // Ambil maksimal 50 resep
      setTotalPages(Math.ceil(50 / 9)); // Per halaman 9 resep
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchRecipes();
  };

  const fetchRecipeDetails = async (recipeId) => {
    setDetailLoading(true);

    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/summary`, {
        params: { apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY },
      });

      setSelectedRecipe({
        id: recipeId,
        summary: DOMPurify.sanitize(response.data.summary), // Membersihkan HTML
      });
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    } finally {
      setDetailLoading(false);
    }
  };

  const truncateSummary = (summary) => {
    if (!summary) return 'No description available';
    const maxLength = 100; // Batasi panjang deskripsi awal
    return summary.length > maxLength ? `${summary.substring(0, maxLength)}...` : summary;
  };

  return (
    <div className="container mx-auto px-10 py-12">
      <h1 className="text-3xl font-bold text-center mb-16">Find Recipes</h1>
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
              <div
                key={recipe.id}
                className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => fetchRecipeDetails(recipe.id)}
              >
                <img
                  src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{recipe.title}</h3>
                  <p className="text-gray-600 mt-2">{truncateSummary(recipe.summary || '')}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No recipes found</p>
          )}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
        >
          Prev
        </button>
        <span className="text-lg">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4"
        >
          Next
        </button>
      </div>

      {selectedRecipe && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-11/12 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">{`Recipe Details - ${selectedRecipe.id}`}</h2>
            {detailLoading ? (
              <p>Loading...</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }}></div>
            )}
            <button
              onClick={() => setSelectedRecipe(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
