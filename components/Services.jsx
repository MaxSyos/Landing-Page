import React from 'react'
import styles from '../styles/Services.module.css'
import styled from 'styled-components'

const Image = styled.img`
    display: block;
    height:100%;
    max-width: 100%; 
`

const Services = () => {
  return (
      <div className={styles.container} id='SERVIÇOS'>
        <h1 className={styles.Title}>S E R V I Ç O S</h1>
      </div>
  )
}

export default Services