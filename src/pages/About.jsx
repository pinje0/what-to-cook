import { FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen px-6 py-12 pt-36">
      {/* Purpose of the Application */}
      <section className="mb-12 max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About &quot;What to Cook&quot;</h1>
        <p className="text-lg text-gray-600">
          &quot;What to Cook&quot; is a web-based application designed to help users find recipes based on the
          ingredients they have. This application aims to reduce food waste, simplify meal planning, and
          enhance cooking experiences.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12 max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
        <ul className="text-lg text-gray-600 list-disc list-inside">
          <li>Input available ingredients to get recipe recommendations.</li>
          <li>Get recipe suggestions with minimal additional ingredients.</li>
          <li>View detailed recipes, including steps, cooking time, and difficulty levels.</li>
          <li>Save favorite recipes for quick access anytime.</li>
          <li>Personalized recipe suggestions based on dietary preferences.</li>
        </ul>
      </section>

      {/* Team Structure */}
      <section className="mb-12 max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Team Structure</h2>
        <ul className="text-lg text-gray-600 list-disc list-inside">
          <li>
            <strong>Project Manager:</strong> Muhammad Irfan - Coordinates the team and ensures smooth project
            execution.
          </li>
          <li>
            <strong>Front-End Developer:</strong> Muhammad Irfan - Develops the user interface of the
            application.
          </li>
          <li>
            <strong>Back-End Developer:</strong> Melvin Austin Korwa - Manages server logic and data handling.
          </li>
          <li>
            <strong>UI/UX Designer:</strong> Muhammad Faizar Rahman Kuswandi - Designs an intuitive and
            user-friendly interface.
          </li>
          <li>
            <strong>Tester:</strong> Arafah Raditya Rangga Putra - Conducts functionality and compatibility
            tests.
          </li>
          <li>
            <strong>Documentation:</strong> Wahyu Anggan - Prepares technical documentation and user guides.
          </li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section className="mt-6">
        <a
          href="https://github.com/pinje0/what-to-cook"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-neutral-900 text-white px-4 py-2 rounded-lg text-lg hover:bg-neutral-700"
        >
          <FaGithub size={24} />
          <span>View Repository on GitHub</span>
        </a>
      </section>
    </div>
  );
};

export default About;
