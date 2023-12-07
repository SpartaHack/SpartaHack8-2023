import React from 'react'
import { CustomTextInputProps } from '../../types'
import { Textarea } from '@nextui-org/react'

const CustomTextArea = ({
    value,
    type,
    label,
    isInvalid,
    eventChange,
    styling,
  }: CustomTextInputProps) => {
  return (
    <Textarea
        autoFocus
        minRows={10}
        size='lg'
        value={value as string}
        type={type}
        label={label}
        variant="bordered"
        color={isInvalid ? "danger" : "success"}
        onChange={eventChange}
        className={`${styling}` || "max-w-xs"}
    />
  )
}

export default CustomTextArea