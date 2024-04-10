import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Importation de PropTypes pour la validation des props
import { UserContext } from "App";

// Définition d'un composant PrivateRoute
function PrivateRoute({ component: Component, roles, ...rest }) {
    const { user } = useContext(UserContext)
    // Vérification de l'authentification de l'utilisateur
    const isAuthenticated = !!localStorage.getItem("token");

    // Rendu conditionnel : si l'utilisateur est authentifié, afficher le composant, sinon rediriger vers la page de connexion
    return isAuthenticated ?
        roles.includes(user.role) ?
            <Component /> : <Navigate to="/dashboard" replace />
        : <Navigate to="/authentication/sign-in" replace />;

};

// Définition des types de props attendus pour PrivateRoute
PrivateRoute.propTypes = {
    roles: PropTypes.elementType.isRequired,
    component: PropTypes.elementType.isRequired, // Validation de la propriété 'component' comme un élément de type React
};

export default PrivateRoute;





