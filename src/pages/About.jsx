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

      {/* API Limitations */}
      <section className="mb-12 max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">API Limitations</h2>
        <p className="text-lg text-gray-600">
          This application uses the free tier of the Spoonacular API, which comes with several limitations:
        </p>
        <ul className="text-lg text-gray-600 list-disc list-inside mt-4">
          <li>Maximum of 150 requests per day.</li>
          <li>Some recipe information might be incomplete or unavailable.</li>
          <li>
            Limited access to advanced features such as taste profile analysis and meal plan generation.
          </li>
        </ul>
        <p className="mt-4 text-lg text-gray-600">
          Due to these constraints, certain recipe details or functionalities may not be fully supported.
        </p>
      </section>

      {/* Copyright Information */}
      <section className="mb-12 max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Copyright Information</h2>
        <p className="text-lg text-gray-600">
          All recipe data and images are sourced from the Spoonacular API. These assets are copyrighted by
          their respective owners and are used in compliance with Spoonacular's API terms of use.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Additionally, some media assets used in this application, including icons, images, and GIFs, are
          sourced from the internet. These are used under fair use or with proper attribution to their
          original creators, where required. If you believe your work is being used without appropriate
          permission, please contact us to address the issue promptly.
        </p>
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
          className="flex items-center space-x-2 bg-neutral-900 text-white px-4 py-2 rounded-lg text-lg hover-opacity-animation"
        >
          <FaGithub size={24} />
          <span>View Repository on GitHub</span>
        </a>
      </section>
    </div>
  );
};

export default About;
