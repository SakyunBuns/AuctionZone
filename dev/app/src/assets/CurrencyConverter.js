// Nom du fichier: ItemDAO.js
// Contexte de ce fichier: Permet de convertir les données monétaires reçues par la BD en modèle choisie par le client 
// Auteur: Quoc Huan Tran
// Autres auteurs : Nathaelle Fournier
// Date : Hiver 2023


export default class Converter{
    constructor(ratesDictionary, baseCurrency){
        this.rates = ratesDictionary
        this.baseCurrency = baseCurrency
    }

    convertToInterface(amount, currency){
        if (currency == this.baseCurrency){
            return amount
        }else if (currency in this.rates){
            return amount * this.rates[currency]
        }else{
            console.log("Currency not found")
        }
    }

    convertToServeur(amount, currency){
        if (currency == this.baseCurrency){
            return amount
        }else if (currency in this.rates){
            return amount / this.rates[currency]
        }else{
            console.log("Currency not found")
        }
    }
}