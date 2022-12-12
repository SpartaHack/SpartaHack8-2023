import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function TextInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass}>
      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass}
      >{props.labelText + ((props.required) ? " *" : "")}</label>
      <input type="password"
        className={commonInputClasses + props.inputClass}
        id={props.fieldName}
        name={props.fieldName}
        placeholder={props.placeholder}
        pattern={props.pattern}
        value={props.fieldValue}
        onChange={props.handleChange}
        disabled={props.disabled}
      />
      {props.infoText &&
      <div className={commonAdInfoClasses}>
        {props.infoText}
      </div>
      }
    </div>
  )
}

export default TextInput