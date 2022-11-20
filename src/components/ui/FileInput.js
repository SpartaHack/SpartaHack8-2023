import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function FileInput(props) {
  const { userData, commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass}
      onMouseEnter={props.hoverFunction}
      onMouseLeave={props.hoverFunction}
    >
      <div className={commonLabelClasses + 'flex flex-row justify-between'}>
        <label
          htmlFor={props.fieldName}
          className={props.labelClass}
        >{props.labelText + ((props.required) ? " *" : "")}</label>
        <span className={" text-sh-white text-right cursor-default"}
        >{props.fileName}</span>
      </div>
      <div className={commonInputClasses + " relative px-0 py-0 flex flex-row justify-center items-center "}>
        <span className=' absolute uppercase rubik-font cursor-pointer '>Upload</span>
        <input type="file"
          className={props.inputClass + " h-full w-full -z-1 opacity-0 cursor-pointer "}
          id={props.fieldName}
          name={props.fieldName}
          accept=".doc,.docx,.pdf"
          value={props.fieldValue}
          onChange={props.handleChange}
          disabled={props.disabled}
          multiple={props.multiple}
        />
      </div>
    </div>
  )
}

export default FileInput