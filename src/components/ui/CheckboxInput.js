import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function TextInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass + " flex flex-row"}>

      <input type="checkbox"
        className={commonInputClasses + props.inputClass + " h-full"}
        id={props.fieldName}
        name={props.fieldName}
        checked={props.fieldValue}
        onChange={props.handleChange}
        disabled={props.disabled}
      />
      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass + " pl-4 py-4 flex flex-col gap-y-2"}
      >
        <span>
          {props.labelText + ((props.required) ? " *" : "")}
        </span>
        <span className=' normal-case text-sm text-slate-700 inter-font'>{props.addInfo}</span>
      </label>
    </div>
  )
}

export default TextInput