/* eslint-disable react/prop-types */
import classNames from 'classnames'
import React, { useRef, useState } from 'react'

const Accordion = ({ title, children }) => {
  const [isOpened, setOpened] = useState(false)

  const [height, setHeight] = useState('0')

  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}` : '0')
  }

  return (
    <div onClick={HandleOpening} className="">
      <div className="flex w-full cursor-pointer items-center  justify-between gap-3">
        <div className="flex items-center gap-2">
          <p className="text-base">{title}</p>
        </div>
        <div className={classNames(isOpened && 'rotate-90')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div
        ref={contentElement}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-500"
      >
        <div className="px-2 py-2">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
