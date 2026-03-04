import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />

        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
