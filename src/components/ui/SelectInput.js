import React from 'react'
import useFormContext from '../../Hooks/useFormContext'
import Chevron from '../icons/Chevron'

function SelectInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  const options = props.options

  const selectOptions = options.map((option) =>
    <option className='bg-sh-black/50 backdrop-blur-sm'
      key={option[1]}
      value={option[1]}>
      {option[0]}
    </option>
  )

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass + " "}>

      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass + " "}
      >{props.labelText + ((props.required) ? " *" : "")}</label>
      <div className='flex flex-row justify-center items-center relative'>
        <select
          className={commonInputClasses + props.inputClass + " appearance-none pr-4 cursor-pointer "}
          autoComplete={props.autoComplete}
          name={props.fieldName}
          value={props.fieldValue}
          onChange={props.handleChange}
          disabled={props.disabled}
        >
          {selectOptions}
        </select>
        <div>
          <Chevron width="12"  strokeColor="#f5f5f5" className=" -mr-4 absolute top-1/2 -mt-0.5 right-8 pointer-events-none " />
        </div>
      </div>
      {props.infoText &&
      <div className={commonAdInfoClasses}>
        {props.infoText}
      </div>
      }

    </div>
  )
}

export default SelectInput