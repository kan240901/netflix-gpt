NetflixGPT 🎬🤖

NetflixGPT is a modern AI-powered movie recommendation web application inspired by the Netflix user experience. The application integrates TMDB APIs, OpenAI GPT APIs, Firebase Authentication, and Redux Toolkit to deliver personalized movie discovery and intelligent movie suggestions through natural language prompts.

🚀 Key Features
🔐 Authentication System

Implemented secure user authentication using Firebase Authentication.

Functionalities:
User Registration (Sign Up)
User Login (Sign In)
User Logout (Sign Out)
Authentication State Handling
Protected Routes
Form Validation
Responsive Authentication UI
🎥 Movie Browsing Experience

Integrated with TMDB (The Movie Database) APIs to fetch and display real-time movie data.

Categories Included:
Now Playing
Popular Movies
UI Features:
Netflix-inspired layout
Horizontal scrolling movie sections
Responsive design for all screen sizes
Smooth user interaction and animations
🤖 AI-Powered GPT Search

Implemented an intelligent movie recommendation system using the OpenAI GPT API.

Workflow:
User enters a natural language query or mood
GPT processes the input
Suggested movie titles are generated
TMDB APIs fetch detailed movie information
Recommended movies are displayed dynamically
Example Query:
"Suggest suspense thriller movies similar to Inception"
🌐 Multi-Language Support

Implemented multilingual support for enhanced accessibility.

Supported Languages:
English
Hindi

Users can dynamically switch application language during GPT-based movie searches.

🧠 State Management using Redux Toolkit

Redux Toolkit is used for centralized and scalable state management across the application.

Redux Slices Implemented
userSlice

Manages:

User authentication data
User session information
movieSlice

Stores:

TMDB movie categories
Movie lists and related data
gptSlice

Handles:

GPT search state
AI-generated movie suggestions
GPT search visibility and responses
OpenAISlice

Manages:

OpenAI API interactions
GPT response handling
appStore

Centralized Redux store configuration.

🛠️ Technology Stack
Frontend
React.js
Redux Toolkit
Tailwind CSS
React Router DOM
Authentication
Firebase Authentication
APIs & Services
TMDB API
OpenAI API

📂 Project Structure
src/
│
├── components/
├── hooks/
├── pages/
├── assets/
├── utils/
│   ├── appStore.js
│   ├── movieSlice.js
│   ├── userSlice.js
│   ├── gptSlice.js
│   ├── OpenAIS.js
│   ├── Firebase.js
│   └── Constants.js
│
├── App.js
└── index.js

🔑 Environment Variables

Create a .env file in the root directory and configure the following variables:
REACT_APP_TMDB_KEY=your_tmdb_api_key
REACT_APP_OPENAI_KEY=your_openai_api_key

⚙️ Installation & Setup
Clone the Repository
git clone <repository-url>
Install Dependencies
npm install
Start Development Server
npm start

🙌 Acknowledgements
TMDB API
OpenAI API
Firebase
Netflix UI Inspiration

📜 License

This project is developed for educational and learning purposes.
