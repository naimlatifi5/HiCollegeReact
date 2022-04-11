import React, { useRef, useImperativeHandle, forwardRef } from 'react'

const CustomInput = (props, ref) => {
  const customInput = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log('Input is in focus....')
    },
  }))
  return <input ref={customInput} {...props} placeholder="type here..." />
}
export default forwardRef(CustomInput)
