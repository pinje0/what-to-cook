import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();

  const recipe = {
    id: id,
    name: 'Egg Salad',
    ingredients: ['Eggs', 'Mayonnaise', 'Lettuce'],
    instructions: 'Boil eggs, mix with mayonnaise and lettuce.',
    time: '15 mins',
    difficulty: 'Easy',
  };

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
      <p>
        <strong>Time:</strong> {recipe.time}
      </p>
      <p>
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>
      <button>Save to Favorites</button>
    </div>
  );
};

export default RecipeDetail;
