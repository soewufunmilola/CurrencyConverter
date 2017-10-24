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

                  <View style={viewStyles.amountFieldArea}>
                     <View/>
                     <Text style= {viewStyles.amount}> 400 </Text>
                  </View>

                  <View style={viewStyles.currencyDescriptionField}>
                      <Text style= {viewStyles.currencyDescriptionText}> {this.props.currencyDescriptionText} </Text>
                  </View>
              </View>


          )

    }


}

 const viewStyles =
 {
   container:
   {
     width: '100%',
     height: 80,
     flexDirection:'row',
   },

   amountFieldArea:
   {
     backgroundColor: 'brown',
     // we are doing this because everything on the amount feild will bw laid out on the horizontal axis
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     flex: 7.5,
     paddingHorizontal: 10,
   },

   currencyDescriptionField:
   {
     backgroundColor: 'green',
     justifyContent: 'center',
     alignItems: 'center',
     flex: 2.5
   },

   currencyDescriptionText:
   {
      color: 'white',
      fontSize: 30,
      fontWeight: '500'
   },

   amount:
   {
     color: 'white',
     fontSize: 30,
   }
 };

export default GenericCurrencyField;
