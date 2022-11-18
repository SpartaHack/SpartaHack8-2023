import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function FormButton(props) {
  const { commonButtonClasses } = useFormContext()
  return (
    <button className={commonButtonClasses + props.buttonClass} id={props.id}
      type={props.type} disabled={props.disabled} hidden={props.hidden} onClick={props.onClick}
    >{props.buttonText}</button>
  )
}

export default FormButton