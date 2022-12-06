import React, { useState } from 'react'
import { useEffect } from 'react'
import useFormContext from '../../Hooks/useFormContext'

function SmartTextInput(props) {
  const { commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses, userData } = useFormContext()

  var optionsData = props.options
  // console.log(optionsData)

  const [filteredData, setFilteredData] = useState([])
  const [inputFocus, setInputFocus] = useState(false)

  const handleFilterData = (event) => {
    // console.log("change")
    const searchWord = event.target.value
    // console.log(searchWord)
    // setCurrentInputText(searchWord)

    props.handleChange(event, props.fieldName, searchWord)

    const newFilter = optionsData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    // console.log(newFilter)
    if (searchWord === "") { setFilteredData(optionsData) }
    else if (newFilter.length === 0 || searchWord.toLowerCase() === newFilter[0].name.toLowerCase()) {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }
  console.log(props.infoText, inputFocus, filteredData, (props.infoText && inputFocus && (filteredData === [])))

  const selectHandler = (event) => {
    props.handleChange(event, props.fieldName, event.target.innerText)
    setFilteredData([])
  }

  // console.log(userData.universityName)

  const handleFocus = () => {
    setInputFocus(bool => !bool)
    // !inputFocus ? setFilteredData(filteredData) : 
  }
  // console.log(inputFocus)

  return (
    <div hidden={props.hidden} className={"relative " + commonContainerClasses + props.containerClass}>
      <label
        htmlFor={props.fieldName}
        className={commonLabelClasses + props.labelClass}
      >{props.labelText + ((props.required) ? " *" : "")}</label>
      <input type="text"
        className={commonInputClasses + props.inputClass}
        id={props.fieldName}
        name={props.fieldName}
        placeholder={props.placeholder}
        pattern={props.pattern}
        value={props.fieldValue}
        onFocus={handleFocus}
        onChange={handleFilterData}
        onBlur={handleFocus}
        disabled={props.disabled}
        autoComplete="off"
      />
      {(props.infoText && inputFocus && (filteredData.length === 0)) &&
        <div className={commonAdInfoClasses}>
          {props.infoText}
        </div>
      }
      {(filteredData.length !== 0 || inputFocus) &&
        <div className='no-scrollbar z-10 absolute max-h-48 min-h-fit w-content min-w-full mt-2 overflow-y-auto overflow-x-hidden rounded-lg bg-sh-white/50 backdrop-blur drop-shadow-xl '>
          {filteredData.map((value) => {
            return (
              <div className='mx-2 first:mt-2 last:mb-2'>
                <div className='w-full rounded-md px-4 py-3 hover:bg-white/50 cursor-pointer select-none' onClick={selectHandler}>
                  {value.name}
                </div>
              </div>
            )
          })}
        </div>}
    </div>
  )
}

export default SmartTextInput