import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function Downloader(props) {
  const { commonContainerClasses, commonInputClasses, commonLabelClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass}>
      <span
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass}
      >{props.labelText + ((props.required) ? " *" : "")}</span>
      <a className={" text-center uppercase " + commonInputClasses + props.inputClass}
        href={props.link} target="_blank" rel="noopener noreferrer" download><span className='rubik-font'>Download</span></a>
    </div>
  )
}

export default Downloader