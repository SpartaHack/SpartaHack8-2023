import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function NumberInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass}>
      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass}
      >{props.labelText + ((props.required) ? " *" : "")}</label>
      <input type="number"
        className={commonInputClasses + props.inputClass}
        id={props.fieldName}
        name={props.fieldName}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        value={props.fieldValue}
        onChange={props.handleChange}
        disabled={props.disabled}
      />
    </div>
  )
}

export default NumberInput