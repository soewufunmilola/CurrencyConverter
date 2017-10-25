/*this is to manage what is done when the button is pressed*/

class ButtonPressManager
{
  static numberPressed (currentValue, buttonPressedValue, isDeleteButton, lastPressedButtonValue)
  {
    let returnValue = '';
// convert the current value to an integer and check if it is equal to zero
    let isZero = (parseInt(currentValue) == 0);
    let isDecimalButtonPressed = (buttonPressedValue == '.')

    if (isDeleteButton)
    {
      //if the second to last character is a devimal point when the delete button is pressed then deleete both the last number and the deciaml point
          let isSecondToLastCharacterDecimalPoint = (currentValue.charAt(currentValue.length - 2) == '.');

          if (isSecondToLastCharacterDecimalPoint == '.')
          {
              let currentValueLessLastTwoDigits = currentValue.slice (0,-2);
              returnValue = currentValueLessLastTwoDigits;
          }

          else if (currentValue.length > 1)
          {
            let currentValueLessLastTwoDigits = currentValue.slice (0, -1);
            returnValue = currentValueLessLastTwoDigits;
          }

          else
          {
            returnValue = 0;
          }
    }

    else if (isDecimalButtonPressed && (lastPressedButtonValue != '.'))
    {
      returnValue = currentValue + '.0';
    }

    else {

        if (isZero)
        {
          returnValue = buttonPressedValue;
        }

        else if (lastPressedButtonValue == '.')
        {
          letCurrentValueLessZeroAfterDecimalPoint = currentValue.slice(0, -1);
          returnValue = currentValueLessZeroAfterDecimalPoint + '' + buttonPressedValue
        }

        else
        {
          returnValue = currentValue + '' + buttonPressedValue;
        }

    }
    return returnValue;
  }


}

export default ButtonPressManager;
