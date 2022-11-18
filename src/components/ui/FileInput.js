import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function FileInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass}>
      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass}
      >{props.labelText + ((props.required) ? " *" : "")}</label>
      <input type="file"
        className={commonInputClasses + props.inputClass}
        id={props.fieldName}
        name={props.fieldName}
        accept=".doc,.docx,.pdf"
        value={props.fieldValue}
        onChange={props.handleChange}
        disabled={props.disabled}
      />
    </div>
  )
}

export default FileInput