import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function SelectInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  const options = props.options

  const selectOptions = options.map((option) =>
    <option value={option[1]}>
      {option[0]}
    </option>
  )

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass + ""}>

      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass + " "}
      >{props.labelText + ((props.required) ? " *" : "")}</label>

      <select
        className={commonInputClasses + props.inputClass + " appearance-none"}
        autoComplete={props.autoComplete}
        name={props.fieldName}
        value={props.fieldValue}
        onChange={props.handleChange}
        disabled={props.disabled}
      >

        {selectOptions}

      </select>

    </div>
  )
}

export default SelectInput