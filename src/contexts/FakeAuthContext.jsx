import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Shivam",
  email: "dummy@example.com",
  password: "qwerty",
  avatar:
    "https://media.licdn.com/dms/image/v2/D4D03AQHyO1-8RoTqJg/profile-displayphoto-shrink_400_400/B4DZdPuu8FH4Ag-/0/1749389341042?e=1759968000&v=beta&t=mkleG6EVP2vlWMlhOqcd1OQVXhIjjGOZIeNSLp08DxE",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider.");
  return context;
}

export { AuthProvider, useAuth };
