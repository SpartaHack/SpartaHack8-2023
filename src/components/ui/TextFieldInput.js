import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function TextFieldInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass}>
      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass}
      >{props.labelText + ((props.required) ? " *" : "")}</label>
      <textarea
        className={commonInputClasses + props.inputClass + " min-h-[56px] h-max max-h-48 z-0"}
        id={props.fieldName}
        name={props.fieldName}
        value={props.fieldValue}
        onChange={props.handleChange}
        rows={props.rows}
      >
        {props.fieldValue ? props.fieldValue : props.placeholder}
      </textarea>
      {props.infoText &&
        <div className={commonAdInfoClasses}>
          {props.infoText}
        </div>
      }
    </div>
  )
}

export default TextFieldInput