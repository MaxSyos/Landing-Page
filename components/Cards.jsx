import React from 'react'
import styles from '../styles/Cards.module.css'
import styledComponents from 'styled-components'
import {sliderItems} from '../pages/data'
import Tilt from "react-vanilla-tilt"




const Cards = () => {
  return (
    
    <div className={styles.container} id='BENEFICIOS'>
      <Tilt className={styles.tilt}>
        <div className={styles.card}>
          <h2 className={styles.h2}>MISSÃO</h2>              
          <p className={styles.p}>Prestar assessoria aos nossos clientes de forma clara e objetiva, 
          garantindo a personalização a cada necessidade apresentada e oferecer 
          serviços de referência em consultoria e treinamento, com foco na obtenção
          de produtos e/ou serviços seguros com alto padrão de qualidade.
          </p>
        </div>
      </ Tilt>

      <Tilt className={styles.tilt}>
        <div className={styles.card}>
          <h2 className={styles.h2}> VISÃO </h2>              
          <p className={styles.p}>Prestar assessoria aos nossos clientes de forma clara e objetiva, 
          garantindo a personalização a cada necessidade apresentada e oferecer 
          serviços de referência em consultoria e treinamento, com foco na obtenção
          de produtos e/ou serviços seguros com alto padrão de qualidade.
          </p>
        </div>
      </ Tilt>

      <Tilt className={styles.tilt}>
        <div className={styles.cardval}>
          <h2 className={styles.val}>VALORES</h2>              
          <div className={styles.p}> 
            <li className={styles.ListItem}>Qualidade</li>
            <li className={styles.ListItem}>Competência</li>
            <li className={styles.ListItem}>Transparência</li>
            <li className={styles.ListItem}>Compromisso</li>
          </div>
        </div>
      </ Tilt>


    </div>
    
  )
}

export default Cards