import { Input } from '@nextui-org/react'
import React, { ChangeEvent, ReactNode } from 'react'

export type CustomTextInputProps = {
    value: string | (readonly string[]) | undefined,
    type: string,
    label: string,
    isInvalid?: boolean,
    eventChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    styling?: string | undefined,
}

const CustomTextInput = ({value, type, label, isInvalid, eventChange, styling }: CustomTextInputProps) => {
  
  return (
    <> 
      <Input 
        value={value as string}
        type={type} 
        label={label}
        variant="bordered"
        labelPlacement='outside'
        color={isInvalid ? 'danger' : 'success'}
        onChange={eventChange}
        size='lg'
        className={`${styling}` || "max-w-xs"}
      />
    </>
  )
}

export default CustomTextInput