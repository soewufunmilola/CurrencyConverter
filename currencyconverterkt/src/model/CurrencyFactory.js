/*The purpose of this factory is to help us to easily create different  currency objects*/

import Currency from './Currency';

class CurrencyFactory
{
  /*the factory will have a static function / method which means that we will not have to instantiate this class (make it an object) in order
  to use the createCurrencyWithIdentifier function */


    static createCurrencyWithIdentifier(identifier)
    {
      switch (identifier) {
        case Currency.currencyList.nigeria:
          let nigerianCurrency = new Currency(identifier, 1, 0.0021, 0.0028,'N');
          return nigerianCurrency;
          break;
        case Currency.currencyList.britain:
          let britishCurrency = new Currency(identifier, 477.34, 1, 1.32,'E');
          return britishCurrency;
          break;
        default:
          let usaCurrency = new Currency(identifier, 360.5, 0.76 , 1,'$');
          return usaCurrency;
          break;

      }
    }


}

export default CurrencyFactory;
