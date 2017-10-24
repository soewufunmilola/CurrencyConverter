import React from 'react';
import {Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={viewStyles.container}>

            <View style= {viewStyles.headerArea}>
              <Text style={viewStyles.headertextStyle}> CURRENCY CONVERTER </Text>
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
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      paddingTop: 29
    },

  headertextStyle:
    {
      color: 'black',
      fontSize: 30,
      fontWeight: '300',

    },

  textStyle:
    {
      color: 'red',
      fontSize: 35,
    },
/*
the style for the header area of the app
*/
   headerArea:
   {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center'
   }

});
