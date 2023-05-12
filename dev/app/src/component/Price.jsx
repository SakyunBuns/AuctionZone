// Nom du fichier: Price.jsx
// Contexte de ce fichier:  Ce fichier sert a afficher le prix en fonction de la devise choisie.
//                          En considérant, que la devise de base est le CAD.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useContext, useEffect, useState } from "react";
import { currencyContext } from "./Context";
import Converter from "../assets/CurrencyConverter";

export default function Price(props) {
  const { currency, rates } = useContext(currencyContext);

  const [price, setPrice] = useState(props.price);
  const [currentCurrency, setCurrentCurrency] = useState(currency[0]);

  const converter = new Converter(rates, 'CAD');

  useEffect(() => {
    setPrice(converter.convertToInterface(parseFloat(props.price), currentCurrency));
  }, [currentCurrency]);

  useEffect(() => {
    setCurrentCurrency(currency[0]);
  }, [currency]);

  return <>{Number(price).toFixed(2)}$</>;
}

