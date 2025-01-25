# What to Cook

## Overview

"What to Cook" is a web-based application designed to simplify meal planning by providing recipe recommendations based on ingredients you already have. The app aims to reduce food waste, enhance cooking experiences, and make meal preparation effortless for everyone.

---

## Features

- **Ingredient-Based Recipe Search**: Enter the ingredients you have to get personalized recipe recommendations.
- **Save Favorites**: Mark and save recipes for quick access later.
- **Recipe Details**: View step-by-step instructions, cooking time, and necessary ingredients.
- **Dynamic Pagination**: Access up to 5 recipes at a time, with smooth navigation.
- **Responsive Design**: Optimized for both mobile and desktop viewing.

---

## Limitations

- **API Usage**: This app relies on the free tier of the Spoonacular API, which has daily request limits. As a result:
  - Detailed recipe information might be incomplete.
  - Some data (like nutritional values or serving suggestions) might not be available consistently.
- **Media Copyright**: All images, videos, and other media assets retrieved through the Spoonacular API are copyrighted by their respective owners.

---

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/pinje0/what-to-cook.git
   ```
2. Navigate to the project folder:
   ```bash
   cd what-to-cook
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your Spoonacular API key:
     ```env
     VITE_SPOONACULAR_API_KEY=your_api_key_here
     ```
5. Run the app locally:
   ```bash
   npm run dev
   ```
6. Open the app in your browser at `http://localhost:5173`.

---

## Deployment

The app is deployed on Vercel. You can view the live version here:
[https://what-to-cook.vercel.app](https://what-to-cook.vercel.app)

---

## Built With

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

---

## Team Members

- **Project Manager**: Muhammad Irfan (10121859) - Oversees project progress and delivery.
- **Front-End Developer**: Muhammad Irfan (10121859) - Develops the user interface.
- **Back-End Developer**: Melvin Austin Korwa (10121709) - Handles server logic and API integration.
- **UI/UX Designer**: Muhammad Faizar Rahman Kuswandi (10121818) - Creates user-friendly designs.
- **Tester**: Arafah Raditya Rangga Putra (10121189) - Conducts testing and ensures quality.
- **Documentation**: Wahyu Anggana Kafitra (11121283) - Writes technical documentation and user guides.

---

## Notes

- **API Key Handling**: Ensure your API key is kept private. The key prefixed with `VITE_` will be exposed in the browser, so verify its safety for public use.
- **Copyright Notice**: This website uses media, including images and other content, sourced from the internet for non-commercial and educational purposes. All rights to the media belong to their respective owners, and full credit goes to the original creators.

---

## Contact

If you have any questions, feel free to reach out to the team via GitHub or open an issue in this repository.

GitHub Repository: [https://github.com/pinje0/what-to-cook](https://github.com/pinje0/what-to-cook)
