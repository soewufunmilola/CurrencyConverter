import React from 'react';
import {Text, View } from 'react-native';
//importing the generic currency field custom componenet
import GenericCurrencyField from './src/component/GenericCurrencyField';

export default class App extends React.Component {
  render() {
    return (
      <View style={viewStyles.container}>

            <View style= {viewStyles.headerArea}>
              <Text style={viewStyles.headertextStyle}> CURRENCY CONVERTER </Text>
            </View>

            <View style= {viewStyles.currencyBlockBackground}>
              <GenericCurrencyField/>
            </View>

            <View style={viewStyles.keypad}>


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
      color: 'grey',
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
       alignItems: 'center',
       justifyContent:'center'

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

  } ,

});
