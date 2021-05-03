import { useState } from "react";

export const useInput = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ( value ) => {
    setInputValue( value );
  }

  return {
    inputValue,
    setInputValue,
    handleInputChange
  }
}
