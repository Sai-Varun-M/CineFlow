# CineFlow 🎬

CineFlow is a modern, responsive Single Page Application (SPA) designed to help you discover your next favorite movie or web series. With an intuitive interface, live search capabilities, and a personalized "Taste Test" recommendation engine, finding what to watch has never been easier.

## 🚀 Features

*   **Personalized Recommendations**: Take our interactive "Taste Test" quiz to get hyper-personalized movie and series recommendations based on your unique vibe, pacing preferences, and genre tastes.
*   **Dynamic SPA Routing**: Enjoy a seamless browsing experience with smooth transitions between tabs (For You, Trending, Movies, Webseries, Watchlist, Favourites) without any page reloads.
*   **Live Search with TVMaze API**: Search for your favorite shows in real-time. Features debounce optimization and dynamic dropdown results with posters and meta-information.
*   **State Management**: Easily add or remove titles to your personal **Watchlist** and **Favourites** with instant UI updates.
*   **Modern & Aesthetic UI**: Built with a focus on premium design, featuring glassmorphism elements, smooth fade animations, interactive hover states, and beautiful iconography using Phosphor Icons.
*   **Interactive Notifications**: Keep track of alerts like trending shows, new features, or when your personalized taste test is ready.

## 🛠️ Tech Stack

*   **HTML5**: Semantic markup for application structure.
*   **CSS3**: Custom vanilla CSS with modern layout techniques (Flexbox/Grid), custom animations, and a responsive design system.
*   **JavaScript (ES6+)**: Vanilla JS for state management, DOM manipulation, client-side routing, and API integration.
*   **TVMaze API**: External REST API for fetching live search results.
*   **Phosphor Icons**: High-quality icon library for a polished look.

## 📁 Project Structure

```
CineFlow/
│
├── index.html    # Main entry point and layout structure
├── style.css     # Global styles, variables, components, and animations
├── script.js     # App logic, state management, router, and API calls
└── README.md     # Project documentation
```

## ⚙️ Setup and Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/CineFlow.git
   ```
2. Navigate into the project directory:
   ```bash
   cd CineFlow
   ```
3. Open `index.html` in your favorite web browser. No build steps or local server required! 
   *(Alternatively, use an extension like VS Code Live Server for a better development experience).*

## 🔮 Future Enhancements

*   Persistent storage using `localStorage` or a backend database (Firebase/Supabase).
*   Detailed view pages for individual movies and series.
*   User authentication and profiles.
*   Expanded recommendation algorithm.

---
*Built with ❤️ for movie and series enthusiasts.*