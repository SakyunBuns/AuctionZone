export class Converter{
    constructor(ratesDictionary, baseCurrency){
        this.rates = ratesDictionary
        this.baseCurrency = baseCurrency
    }

    convertToInterface(amount, currency){
        if (currency == this.baseCurrency){
            return amount
        }else{
            return amount * this.rates[currency]
        }
    }

    convertToServeur(amount, currency){
        if (currency == this.baseCurrency){
            return amount
        }else{
            return amount / this.rates[currency]
        }
    }
}