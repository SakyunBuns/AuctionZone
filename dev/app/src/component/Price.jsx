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

