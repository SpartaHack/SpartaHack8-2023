import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function TextInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass + " flex flex-row"}>
      <div className={props.inputClass + " pt-2 "}>
      <input type="checkbox"
        className={""}
        id={props.fieldName}
        name={props.fieldName}
        checked={props.fieldValue}
        onChange={props.handleChange}
        disabled={props.disabled}
      />
      </div>
      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass + " pl-4 pt-2 pb-2 flex flex-col gap-y-2"}
      >
        <span>
          {props.labelText + ((props.required) ? " *" : "")}
        </span>
        <span className=' normal-case text-sm text-sh-white/90 inter-font'>{props.addInfo}</span>
      </label>
    </div>
  )
}

export default TextInput