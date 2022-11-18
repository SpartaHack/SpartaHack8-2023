import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function Downloader(props) {
  const { commonContainerClasses, commonLabelClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass}>
      <span
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass}
      >{props.labelText + ((props.required) ? " *" : "")}</span>
      <a href={props.link} target="_blank" rel="noopener noreferrer" download>Download</a>
    </div>
  )
}

export default Downloader