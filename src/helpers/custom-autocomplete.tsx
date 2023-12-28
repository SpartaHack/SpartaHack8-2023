import React, { useState, useCallback, useEffect } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { CustomAutocompleteProps } from "../../types";

const CustomAutocomplete = ({
  style,
  initValue,
  datas,
  isInvalid,
  label,
  onValueChange,
  size,
}: CustomAutocompleteProps) => {
  const [value, setValue] = useState<string>(initValue ? initValue : "");
  const [isFocused, setIsFocused] = useState(false);
  const [isInvalidState, setIsInvalidState] = useState(false);

  const onInputChange = useCallback(
    (value: string) => {
      setValue(value);
      onValueChange(value);
    },
    [onValueChange],
  );

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
        labelPlacement="outside"
        defaultSelectedKey={initValue}
        variant="bordered"
        isInvalid={isInvalidState && isFocused}
        label={label}
        size={size}
        className={`${style}`}
        onInputChange={onInputChange}
        color={!isFocused && value == "" ? "danger" : "success"}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {datas.map(({ value }) => (
          <AutocompleteItem key={value} value={value}>
            {value}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </>
  );
};

export default CustomAutocomplete;
