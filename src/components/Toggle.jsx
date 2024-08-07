import React from 'react'
import styles from './Toggle.module.css'

const Toggle = ({handleChange, isChecked}) => {
  return (
    <div className={styles.toggle_container}>
        <input type="checkbox" 
        id="check" 
        className={styles.toggle}
        onChange={handleChange} 
        checked={isChecked}
        />
        <label htmlFor="check"></label>
    </div>
  )
}

export default Toggle