import React from 'react';
import {Text, View } from 'react-native';
//importing the generic currency field custom componenet
import GenericCurrencyField from './src/component/GenericCurrencyField';
import RoundButton from './src/component/RoundButton';

export default class App extends React.Component {

  buttonPressed = (text, isDeleteButton) =>
  {
    console.log ("The button Pressed was = " + text);
  }

  render() {
    return (
      <View style={viewStyles.container}>
            <View style= {viewStyles.headerArea}>
              <Text style={viewStyles.headertextStyle}> CURRENCY CONVERTER </Text>
            </View>

            <View style= {viewStyles.currencyBlockBackground}>
                <GenericCurrencyField
                currencyDescriptionText={'NGN'}
                iconFlag= {require ('./src/images/nigFlag.png')}
                amountFieldArea={'0'}
                />
                <GenericCurrencyField
                currencyDescriptionText={'GBP'}
                iconFlag= {require ('./src/images/uk-flag.png')}
                amountFieldArea={'0'}
                />

                <View style={viewStyles.exchangeRangeDetail} >
                    <Text style = {viewStyles.bleh}> 1 NGN = 0.0021 GBP </Text>
                    <Text style = {viewStyles.bleh}> 1 GBP = 465.8221 NGN </Text>
                </View>

            </View>

              <View style={viewStyles.keypad}>
                  <RoundButton
                  number= {'5'}
                  buttonPressed = {(text, isDeleteButton) => this.buttonPressed (text, isDeleteButton)}
                  />


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

});
