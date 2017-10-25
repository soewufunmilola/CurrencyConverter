import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const buttonDetail = {
                        buttonBackgroundColour:
                           {
                             main: 'white',
                             border: 'gold'
                           },
                           buttonDimensions:
                           {
                             width: 70,
                             height: 70
                           }
                    };

class RoundButton extends Component
{

  constructor(props)
  {
      super(props);
  }
  render(){
      return (
        <TouchableHighlight
         onPress = {this.props.buttonPressed.bind(this, this.props.number, this.props.isDeleteButton)}
         activeOpacity= {0.85}
         underlayColor= {'transparent'}
        >

            <View style = {[viewStyles.container, this.props.marginStyling]}>
                  <Text style= {textStyles.numberStyle}>{this.props.number}</Text>
            </View>

        </TouchableHighlight>


      );
  }

}

const viewStyles =
{
  container:
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonDetail.buttonDimensions.width,
    height: buttonDetail.buttonDimensions.height,
    borderRadius: buttonDetail.buttonDimensions.width * 0.5,
    borderWidth: 2,
    backgroundColor:  buttonDetail.buttonBackgroundColour.main,
    borderColor: buttonDetail.buttonBackgroundColour.border
  }


};

const textStyles =
{
    numberStyle:
    {
       color: 'black',
       fontSize: 43,


    }


};


export default RoundButton;
