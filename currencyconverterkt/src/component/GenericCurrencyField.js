//insert React from react native boiler plate here
import React, {Component} from 'react';
// import the followin out of the box components from 'react-native' module
import {Text, Image, TouchableHighlight, View} from 'react-native';

class GenericCurrencyField extends Component
{

   constructor(props)
   {
        super(props);
   }
//render has to be invoed if the Component is to be drawn on the screen.
    render()
    {

          return(
              <View style={viewStyles.container}>

              </View>
          )

    }


}

 const viewStyles =
 {
   container:
   {
     backgroundColor:'white',
     width: '100%',
   },
 };

export default GenericCurrencyField;
