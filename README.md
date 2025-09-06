# 🌍 WorldWise

WorldWise is a **React-based travel log app** that allows users to mark, explore, and manage their visited cities on an interactive world map.  
It uses **React Router v6**, **React Context API**, and **Leaflet (via React Leaflet)** to provide smooth routing, state management, and map interactions.  
A **mock authentication system** and **JSON Server** are included for practicing protected routes and API calls.

🔗 GitHub Repository: [WorldWise React Practice](https://github.com/Shivam56291/worldwise-react-practice/tree/main)

---

## ✨ Features

- 📍 **Interactive Map** with markers for cities using `react-leaflet`.
- 🗺️ **Add Cities**: Click anywhere on the map to save a city with notes.
- 🗑️ **Delete Cities**: Remove cities from the list.
- 🌐 **Country List**: Group visited cities by country.
- 🔐 **Authentication** (fake login system with `AuthContext`).
- 🚦 **Protected Routes**: Only logged-in users can access the `/app` section.
- 📆 **Date Picker** for trip dates using `react-datepicker`.
- 📡 **API Simulation** using `json-server` (cities stored in `data/cities.json`).
- 🎨 Clean UI with modular CSS.

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Shivam56291/worldwise-react-practice.git
   cd worldwise-react-practice

   ```

2. **Install dependencies**

npm install

3. **Run the development server**

npm run dev

4. **Start the mock API server**

npm run server

5. **Runs on: <http://localhost:9000>**

- Endpoints:

-- GET /cities

-- GET /cities/:id

-- POST /cities

-- DELETE /cities/:id

6. **Build for production**

npm run build

## 🛠️ Technologies Used

- **React 19** (latest stable)
- **React Router DOM v6.30**
- **React Context API + useReducer**
- **React Leaflet + Leaflet** (for maps)
- **React Datepicker** (for selecting travel dates)
- **JSON Server** (mock backend API)
- **Vite** (for fast bundling and dev server)
- **ESLint + Plugins** (for linting and clean code)

---

## 📚 React Concepts Practiced

This project is built for learning and practicing **modern React concepts**:

### ⚛️ Components

- All are **Functional Components** (no class components).

### 🔧 React Hooks

- Core hooks: `useState`, `useEffect`, `useReducer`, `useContext`, `useCallback`
- **Custom hooks**: `useGeolocation`, `useUrlPosition`

### 🌐 Context API

- Global state management using **Context + useReducer**
  - `CitiesContext` → handles fetching, creating, deleting cities
  - `AuthContext` → handles login/logout & authentication state

### 🚏 React Router v6

- **Dynamic routing**: `/cities/:id`
- **Nested routes** inside `/app`
- **Redirects** with `<Navigate />`
- **Protected routes** using `<ProtectedRoute />`

### ⚡ Code Splitting & Lazy Loading

- Implemented with `React.lazy` + `Suspense`

### 🌀 Error Handling

- Loading states: `Spinner`, `SpinnerFullPage`
- Error handling through reducer state

### ✅ Best Practices

- Feature-based folder structure
- Separate **contexts, hooks, components, pages**
- Clean reusable components: `Button`, `Sidebar`, `User`, `BackButton`
- ESLint configured for code consistency

---

## 🌍 Map Functionality

Integrated with **OpenStreetMap tiles** via `TileLayer`.

### Users can

- **Click on the map** to add a city (`DetectClick` with `useMapEvents`)
- **Re-center the map** with `ChangeCenter` hook
- **View markers with country flags** using [flagcdn.com](https://flagcdn.com)

---

## 🔐 Authentication (Fake)

A mock authentication system is implemented using **AuthContext**.

### 👤 Fake User

```json
{
  "name": "Shivam",
  "email": "dummy@example.com",
  "password": "qwerty",
  "avatar": "https://media.licdn.com/dms/image/v2/D4D03AQHyO1-8RoTqJg/profile-displayphoto-shrink_400_400/B4DZdPuu8FH4Ag-/0/1749389341042?e=1759968000&v=beta&t=mkleG6EVP2vlWMlhOqcd1OQVXhIjjGOZIeNSLp08DxE"
}
```

## 🔑 Login at `/login`

Use the fake credentials below:

- **Email:** `dummy@example.com`
- **Password:** `qwerty`

---

## 🔓 After Login → Unlocked Routes

Once logged in, you can access the following protected routes:

- `/app/cities` → Manage and view saved cities
- `/app/countries` → Explore countries list
- `/app/form` → Add a new city

## 📁 Project Structure
worldwise/
│── src/
│ ├── components/ # Reusable UI components (Map, Sidebar, Spinner, etc.)
│ ├── contexts/ # Context API (CitiesContext, AuthContext)
│ ├── hooks/ # Custom hooks (useGeolocation, useUrlPosition)
│ ├── pages/ # Page-level components (Homepage, Login, AppLayout, etc.)
│ ├── App.jsx # Main app with routing & providers
│ └── main.jsx # Entry file
│
│── data/
│ └── cities.json # Mock city database
│
│── package.json
│── vite.config.js
│── README.md
```
