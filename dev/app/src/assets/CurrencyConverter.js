export class Converter{
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