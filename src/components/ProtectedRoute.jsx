import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si el usuario está autenticado, por ejemplo, mediante una llamada a la API o la comprobación de cookies.
    // Si el usuario está autenticado, actualiza el estado isAuthenticated a true.
  }, []);

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
