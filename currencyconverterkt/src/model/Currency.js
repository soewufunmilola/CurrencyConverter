/*1 GBP = 477.32 NGN
1 NGN = 0.0021 GDP
1 DOLLAR = 360.50 NAIRA*/

class Currency
{
  constructor(identifier, nairaEquivalent, sterlingEquivalent, dollarEquivalent, currencySign)
  {
    this.shorthand = identifier;
    this.nairaEquivalent = nairaEquivalent;
    this.sterlingEquivalent = sterlingEquivalent;
    this.dollarEquivalent = dollarEquivalent;
    this.currencySign = currencySign;
    this.currencyStringDisplay = '0';
  }

  toNaira(amount)
  {
    return(amount * this.nairaEquivalent);
  }

  toPound(amount)
  {
    return(amount * this.sterlingEquivalent);
  }

  toUSD(amount)
  {
    return(amount * this.dollarEquivalent);
  }

  exchangeRangeDetail(alternateCurrency)
  {
    let string = "1 " + this.shorthand + " = " + this.exchangeRateForAlternateCurrrency(alternateCurrency) + "  " + alternateCurrency.shorthand;
    return string;
  }

  exchangeRateForAlternateCurrrency(alternateCurrency)
  //depending on he currency passed into the function
  {
    switch (alternateCurrency.shorthand)
    {
      case currencyList.nigeria:
        return this.nairaEquivalent;
        break;

        case currencyList.britain:
          return this.sterlingEquivalent;
          break;

        default:
          return this.dollarEquivalent;
    }
  }

}

const currencyList = {
    nigeria: 'NGN',
    britain: 'GBP',
    america: 'USD',

};


Currency.currencyList = currencyList;
export default Currency;
