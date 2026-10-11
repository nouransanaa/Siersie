# React + Vite
# SIERSIE 🇹🇳 — Discover Tunisia

**SIERSIE** is a web platform designed to help users discover and explore accommodations in Tunisia, including hotels, traditional houses, villas, and apartments.

The project aims to provide a simple, elegant, and user-friendly experience for discovering places to stay and exploring Tunisian destinations.

## ✨ Features

- **Home page:** Discover the SIERSIE platform and explore Tunisia.
- **Accommodation listings:** Browse available accommodations.
- **Accommodation details:** View descriptions, photos, prices, and information about each property.
- **Search and filters:** Find accommodations according to your preferences.
- **Favorites:** Save your favorite accommodations.
- **Contact and booking request:** Submit a request for an accommodation.
- **Dynamic pricing interface:** Display estimated prices based on the length of stay and selected hotel options.
- **Authentication pages:** Login, registration, and password recovery interfaces.

*Note: Some features are still under development. Booking requests and price calculations may currently be simulated on the frontend.*

## 🛠️ Technologies

- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Router
- Lucide React

## 🎨 Design

SIERSIE follows a modern, editorial-inspired travel design with a focus on Tunisian culture and hospitality.

- Terracotta: `#C65D3A`
- Olive: `#68724D`
- Cream: `#FFF9F0`
- Sand: `#F4E7D3`

The interface is designed to be responsive and accessible on desktop and mobile devices.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ouransanaa/Siersie.git
   ```

2. Open the project directory:

   ```bash
   cd Siersie
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually:

   ```text
   http://localhost:5173
   ```

## 📁 Project Structure

The project is organized into reusable React components and pages.

```text
Siersie/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── .gitignore
└── README.md
```

*The structure above is indicative and may be adjusted to match the current project files.*

## 🔧 Project Status

**Status:** In development.

SIERSIE is currently being developed as a frontend project. Features, interface components, and user interactions are being progressively implemented.

## 🔮 Future Improvements

- Connect the frontend to a backend API.
- Implement secure user authentication.
- Integrate a database for accommodations and user accounts.
- Implement a complete booking request workflow.
- Add real-time availability and accurate pricing.
- Improve search, filtering, and map integration.
- Add automated tests and improve accessibility.

## 👩‍💻 Project Author

**nourane Sanaa**

GitHub: [@nouransanaa](https://github.com/nouransanaa)

---

*SIERSIE — Discover Tunisia, find your place.*

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
