// Nom du fichier: Context.jsx
// Contexte de ce fichier:  Ce fichier est la composante permet d'accéder aux variable de App.jsx
//                          dans les composantes enfants à travers de l'utilisation des Context.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import { createContext } from "react";

export const paletteContext = createContext(null);
export const tagsContext = createContext(null);
export const userContext = createContext(null);
export const currencyContext = createContext(null);



