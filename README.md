---

# Gutendex App

A React application built with Vite that allows users to explore books from the Gutendex API. The app features genre selection, infinite scrolling, search functionality, and uses React Context for state management. The project also leverages Tailwind CSS for styling and ESLint for code quality.

## Features

- **Genre Selection:** Users can browse books by selecting a genre from the home screen.
- **Infinite Scrolling:** The app supports infinite scrolling for seamless book browsing.
- **Search Functionality:** Users can search books by title or author.
- **Responsive Design:** The UI adapts gracefully to different screen sizes, from mobile to desktop.
- **State Management with React Context:** Efficiently caches fetched book data to reduce redundant API calls.
- **Modern Tooling:** Uses Vite for fast development, Tailwind CSS for styling, and ESLint for code quality.

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed (version 14 or later).
- **Yarn:** This project uses Yarn as the package manager. You can install Yarn from [here](https://classic.yarnpkg.com/en/docs/install).

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/cod3-assassin/gutendex-app.git
   
   cd gutendex-app
   ```

2. **Install Dependencies:**

   ```bash
   yarn install
   ```

### Running the Project

To start the development server with hot module replacement, run:

```bash
yarn dev
```

This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view the app in your browser.

### Building for Production

To build the project for production:

```bash
yarn build
```

After building, you can preview the production build using:

```bash
yarn preview
```

### Linting

To check for code issues using ESLint:

```bash
yarn lint
```

## Project Structure

```
.yarn
node_modules
public
src
  ├── assets
  ├── components
  │   ├── BookItem.jsx
  │   ├── BookList.jsx
  │   ├── CenterLoader.jsx
  │   ├── GenreButton.jsx
  ├── context
  │   ├── BooksContext.jsx
  ├── pages
  │   ├── Books.jsx
  │   ├── Home.jsx
  ├── services
  │   ├── api.js
  ├── utils
  │   ├── formatBookLink.js
  ├── App.css
  ├── App.jsx
  ├── index.css
  ├── main.jsx
.gitignore
eslint.config.js
index.html
package.json
yarn.lock
tailwind.config.js
vite.config.js
```

## Functionality Breakdown

### **1. Home Page**
- Displays a selection of genres using `GenreButton.jsx`.
- Clicking on a genre navigates to the Books page filtered by the selected genre.

### **2. Books Page**
- Fetches books from the Gutendex API based on the selected genre.
- Implements infinite scrolling using `react-infinite-scroll-component`.
- Includes a search bar to filter books by title or author.

### **3. State Management**
- Uses `BooksContext.jsx` to manage and cache book data across the app, reducing redundant API calls.

### **4. API Service**
- The `api.js` service handles API calls to fetch books from the Gutendex API.

### **5. UI and Styling**
- Uses Tailwind CSS for styling and responsiveness.
- The layout adapts from mobile to desktop, ensuring usability on all devices.
- Custom scrollbar styles and animations for an enhanced user experience.

## What We’ve Implemented

- **API Integration:** Fetches book data from the Gutendex API.
- **Genre-Based Navigation:** Users can explore books based on different genres.
- **Infinite Scrolling:** Books load dynamically as the user scrolls.
- **Search Feature:** Users can search for books by title or author.
- **State Optimization:** React Context efficiently manages and caches data.
- **Modern UI:** Tailwind CSS ensures a sleek and responsive design.
- **Tooling & Best Practices:** Vite for fast builds, ESLint for code quality.

## License

This project is open source and available under the [MIT License](LICENSE).

---

