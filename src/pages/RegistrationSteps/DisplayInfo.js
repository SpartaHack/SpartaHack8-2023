import React from 'react'
import useFormContext from '../../Hooks/useFormContext'

function DisplayInfo(props) {
  const { commonDisplayInfoLabelClasses, commonDisplayInfoClasses, commonDisplayInfoContainerClasses } = useFormContext()
  return (
    <div className={commonDisplayInfoContainerClasses + props.containerClass} hidden={props.hidden}>
      <div className={commonDisplayInfoLabelClasses + props.labelClass}>{props.labelText}</div>
      <div className={commonDisplayInfoClasses + props.infoClass}>{props.infoText}</div>
    </div>
  )
}

export default DisplayInfo