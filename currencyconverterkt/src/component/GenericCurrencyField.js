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

      let amountStyle = (this.props.isHighlighted) ? viewStyles.highlightedAmountNumber : viewStyles.amount;

          return(
            <TouchableHighlight
            activeOpacity= {0.95}
            underlayColor = {'transparent'}
            onPress = {this.props.fieldTapped.bind(this, this.props.fieldIndex)}
            style = {viewStyles.container}

            >
                    <View style={viewStyles.container}>

                        <View style={viewStyles.amountFieldArea}>
                           <Image source= {this.props.iconFlag} resizeMode={'cover'} style= {viewStyles.flagIcon}/>
                           <Text style= {amountStyle}> {this.props.amountFieldArea} </Text>
                        </View>

                        <View style={viewStyles.currencyDescriptionField}>
                            <Text style= {viewStyles.currencyDescriptionText}> {this.props.currencyDescriptionText} </Text>
                        </View>
                    </View>
            </TouchableHighlight>
          )

    }


}

 const viewStyles =
 {
   container:
   {
     width: '100%',
     flexDirection:'row',
     flex: 2,
     marginBottom: 3,
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
   },

   flagIcon:
   {
     width: 55,
     height: 55
   },

   highlightedAmountNumber:
   {
     color: 'yellow',
     fontSize: 30,
   }
 };

export default GenericCurrencyField;
