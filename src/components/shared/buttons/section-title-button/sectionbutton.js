import React from 'react'
import './sectionbutton.module.css'

const SectionButton = (props) => {
  return (
    <button className='section-button'>{props.name}</button>
  )
}

export default SectionButton