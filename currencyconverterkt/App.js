import React from 'react';
import {Text, View } from 'react-native';
//importing the generic currency field custom componenet
import GenericCurrencyField from './src/component/GenericCurrencyField';
import RoundButton from './src/component/RoundButton';
import Currency from './src/model/Currency'
import CurrencyFactory from './src/model/CurrencyFactory'
import ButtonPressManager from './src/model/ButtonPressManager'

export default class App extends React.Component
 {
    constructor(props)
    {
      super(props);
      // this array will hold all the buttons
      this.buttonArray= ['1','2','3','4','5','6','7','8','9','.','0','DEL'];

    this.state = {
      currency1: CurrencyFactory.createCurrencyWithIdentifier(Currency.currencyList.nigeria),
      currency2: CurrencyFactory.createCurrencyWithIdentifier(Currency.currencyList.britain),
      currency1isHighlighted: true,
      currency2isHighlighted: false,
      lastPressedButtonValue: ''
    }

    this.currentlySelectedCurrency = this.state.currency1;
    this.alternateCurrency = this.state.currency2;


   }

  buttonPressed = (text, isDeleteButton) =>
  {
    console.log ("The button Pressed was = " + text);
    let resultingStringAfterButtonPress = ButtonPressManager.numberPressed(this.currentlySelectedCurrency.currencyStringDisplay, text, isDeleteButton, this.state.lastPressedButtonValue );

    console.log("resultingStringAfterButtonPress = " + resultingStringAfterButtonPress);

    let alternateCurrencyCalculation = parseFloat(resultingStringAfterButtonPress).toFixed(2) * this.currentlySelectedCurrency.exchangeRateForAlternateCurrrency(this.alternateCurrency);

    console.log("alternateCurrencyCalculation = " + alternateCurrencyCalculation);

    this.currentlySelectedCurrency.currencyStringDisplay = resultingStringAfterButtonPress;
    this.alternateCurrency.currencyStringDisplay = alternateCurrencyCalculation.toFixed(2).toString();

    console.log("alternateCurrency identifier (shorthand) = " + this.alternateCurrency.shorthand);

    this.setState({currency1: this.state.currency1, currency2: this.state.currency2, lastPressedButtonValue: text});
  }

  fieldTapped = (fieldIndex) => {

    let FIELD_ONE = 0;

    if (fieldIndex == FIELD_ONE)
    {
      this.currentlySelectedCurrency = this.state.currency1;
      this.alternateCurrency = this.state.currency2;
      this.setState({
        currency1isHighlighted: true, currency2isHighlighted: false

      });
    }

    else {
      {
        this.currentlySelectedCurrency = this.state.currency2;
        this.alternateCurrency = this.state.currency1;
        this.setState({
          currency1isHighlighted: false, currency2isHighlighted: true
        });
      }
    }


  }

  render() {
    let currency1Description = this.state.currency1.exchangeRangeDetail(this.state.currency2);
    let currency2Description = this.state.currency2.exchangeRangeDetail(this.state.currency1);



    return (
      <View style={viewStyles.container}>
            <View style= {viewStyles.headerArea}>
              <Text style={viewStyles.headertextStyle}> CURRENCY CONVERTER </Text>
            </View>

            <View style= {viewStyles.currencyBlockBackground}>
                <GenericCurrencyField
                currencyDescriptionText={this.state.currency1.shorthand}
                iconFlag= {require ('./src/images/nigFlag.png')}
                amountFieldArea={this.state.currency1.currencyStringDisplay}
                fieldIndex = {0}
                fieldTapped = {(index) => this.fieldTapped(index)}
                isHighlighted = {this.state.currency1isHighlighted}
                />

                <GenericCurrencyField
                currencyDescriptionText={this.state.currency2.shorthand}
                iconFlag= {require ('./src/images/uk-flag.png')}
                amountFieldArea={this.state.currency2.currencyStringDisplay}
                fieldIndex = {1}
                fieldTapped = {(index) => this.fieldTapped(index)}
                isHighlighted = {this.state.currency2isHighlighted}
                />

                <View style={viewStyles.exchangeRangeDetail} >
                    <Text style = {viewStyles.bleh}> {currency1Description} </Text>
                    <Text style = {viewStyles.bleh}> {currency2Description}</Text>
                </View>

            </View>

              <View style={viewStyles.keypad}>

                {
                    this.buttonArray.map((data, index) =>
                    {
                      if (data == "DEL"){
                          return(
                              <RoundButton
                                key = {index}
                                number = {data}
                                isDeleteButton= {true}
                                buttonPressed= {(text, isDeleteButton) => this.buttonPressed(text, isDeleteButton)}
                                marginStyling= {{marginBottom: viewStyles.buttonMargins.vertical }}
                              />
                          );
                        }
                      else if ((index + 1) % 3 == 0) {
                        return(
                        <RoundButton
                        key = {index}
                        number = {data}
                        buttonPressed= {(text, isDeleteButton) => this.buttonPressed(text, isDeleteButton)}
                        marginStyling= {{marginBottom: viewStyles.buttonMargins.vertical }}
                        />
                      );

                      }


                      else{
                          return(
                              <RoundButton
                                key={index}
                                number = {data}
                                isDeleteButton= {false}
                                buttonPressed= {(text, isDeleteButton) => this.buttonPressed(text, isDeleteButton)}
                                marginStyling = {{marginRight: viewStyles.buttonMargins.horizontal, marginBottom: viewStyles.buttonMargins.vertical}}
                              />
                          );
                        }
                    }
                )}

              </View>

      </View>
    );
  }
}

const viewStyles =
(
  {
  container:
    {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',

    },

  headertextStyle:
    {
      color: 'black',
      fontSize: 30,
      fontWeight: '300',

    },

  textStyle:
    {
      color: 'white',
      fontSize: 35,
    },

    //this view will be the background to the GenericCurrencyField and the currency exchange details
   currencyBlockBackground:
     {
       backgroundColor: 'lightgrey',
       width: '100%',
       height: '27.5%',
     },

/*
the style for the header area of the app
*/
   headerArea:
   {
    backgroundColor: 'lightblue',
    width: '100%',
    height: '12.5%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 29
  },

  keypad:
  {
   flexDirection: 'row',
   flexWrap: 'wrap',
   padding: 30,
   backgroundColor:'lightblue',
   width: '100%',
   height: '60%',

  },

  exchangeRangeDetail:
  {
    flex: 1.4,
    padding: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bleh:
  {
    color: 'black',
    fontSize: 14,
    margin: 3,
  },

  buttonMargins:
  {
    horizontal:65,
    vertical: 35,
  }

});
