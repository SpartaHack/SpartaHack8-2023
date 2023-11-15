import React, { useState, useCallback, useEffect } from 'react'
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { CustomAutocompleteProps } from '../../types';

const CustomAutocomplete = ({datas, isInvalid, label, onValueChange, size}: CustomAutocompleteProps) => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const [isInvalidState, setIsInvalidState] = useState(false);
  
  const onInputChange = useCallback((value: string) => {
    setValue(value);
    onValueChange(value);
  }, [onValueChange]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsInvalidState(isInvalid);
  }, [isInvalid]);

  useEffect(() => {
    setIsInvalidState(isInvalid);
  }, [isInvalid]);

  return (
    <>
      <Autocomplete
        allowsCustomValue
        labelPlacement='outside'
        variant='bordered'
        isInvalid={ isInvalidState && isFocused }
        label={label}
        size={size}
        className='mb-2'
        onInputChange={onInputChange}
        color={(!isFocused && value == '') ? 'danger' : 'success'}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {datas.map(({value}) => (
          <AutocompleteItem key={value} value={value}>
            {value}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </>
  )
}

export default CustomAutocomplete