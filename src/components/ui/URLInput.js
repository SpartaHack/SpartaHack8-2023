import React from 'react';
import useFormContext from '../../Hooks/useFormContext';

function URLInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses } = useFormContext()

  return (
    <div hidden={props.hidden} className={commonContainerClasses + props.containerClass}>
      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass}
      >{props.labelText + ((props.required) ? " *" : "")}</label>
      <input type="url"
        className={commonInputClasses + props.inputClass}
        id={props.fieldName}
        name={props.fieldName}
        onMouseLeave={props.onHover}
        onMouseEnter={props.onHover}
        placeholder={props.placeholder}
        value={props.fieldValue}
        onChange={props.handleChange}
        disabled={props.disabled}
      />
    </div>
  )
}

export default URLInput;