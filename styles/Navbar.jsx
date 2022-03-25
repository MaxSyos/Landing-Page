import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-scroll";
import React, { useState } from "react";
import styled from "styled-components";
import styles from '../styles/Navbar.module.css'
import { Utility } from "../pages/data";




const Image = styled.img``

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.Wrapper}>
        <div className={styles.Left}>
          <Image src="https://i.ibb.co/XJbTxdy/Qualifik-removebg-preview.png" style={{ width: "200px"}}  />  
        </div>
        <div className={styles.Center}>
          
        </div>
        <div className={styles.Right}>
          <Link className={styles.MenuItem} to="QUEM SOMOS" spy={true} smooth={true} offset={50} duration={500}>QUEM SOMOS</Link>
          <Link className={styles.MenuItem} to="SERVIÇOS" spy={true} smooth={true} offset={50} duration={500}>SERVIÇOS</Link>
          <Link className={styles.MenuItem} to="BENEFICIOS" spy={true} smooth={true} offset={-30} duration={500}>BENEFICIOS</Link>
          <div ><a className={styles.Item} href="/Contato">CONTATO</a></div>
        
          <div class={styles.hamburger} onClick={()=>setOpen(!open)}>
            <div class={styles.line}/>
            <div class={styles.line}/>
            <div class={styles.line}/>
          </div>    
        </div>

        <ul  className={styles.Menu} style={{right: open ? "0px" : "-80vw"}}>
          <Link onClick={()=>setOpen(false)} className={styles.MenuItem} to="QUEM SOMOS" spy={true} smooth={true} offset={50} duration={500}>QUEM SOMOS</Link>
          <Link onClick={()=>setOpen(false)} className={styles.MenuItem} to="SERVIÇOS" spy={true} smooth={true} offset={40} duration={500}>SERVIÇOS</Link>
          <Link onClick={()=>setOpen(false)} className={styles.MenuItem} to="BENEFICIOS" spy={true} smooth={true} offset={-30} duration={500}>BENEFICIOS</Link>
          <div ><a onClick={()=>setOpen(false)} className={styles.MenuItem} href="/Contato">CONTATO</a></div>
        </ul>

      </div>







    </div>
  );
};

export default Navbar;
