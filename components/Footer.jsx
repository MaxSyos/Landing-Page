import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";
import styles from '../styles/Footer.module.css'
import { Link } from "react-scroll";


const Image = styled.img``;


const Footer = () => {
  return (
    <div className={styles.container} id='CONTATO'>
      <div className={styles.Left}>
      <div className={styles.Logo}>
          <Image src="https://i.ibb.co/K5dLV7K/Qualifik-dark.png" style={{ width: "200px"}}  />  
        </div>
        <p >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
        <div className={styles.SocialContainer}>
          <div className={styles.SocialIconFacebook} color="3B5999">
            <Facebook />
          </div>
          <div className={styles.SocialIconInstagram}  color="E4405F">
            <Instagram />
          </div>
          <div className={styles.SocialIconTwitter}  color="55ACEE">
            <Twitter />
          </div>
        </div>
      </div>
      <div className={styles.Center}>
        <h3 className={styles.Title}>Links de Acesso</h3>
        <ul className={styles.List}>
          <Link className={styles.ListItem} to="QUEM SOMOS" spy={true} smooth={true} offset={50} duration={500}>Quem Somos</Link>
          <Link className={styles.ListItem} to="SERVIÇOS" spy={true} smooth={true} offset={50} duration={500}>Serviços</Link>
          <Link className={styles.ListItem} to="BENEFICIOS" spy={true} smooth={true} offset={-30} duration={500}>Benefícios</Link>
          <div ><a className={styles.Item} href="/Contato">Contato</a></div>
        </ul>
      </div>
      <div className={styles.Rigth}>
        <h3 className={styles.Title}>Contato</h3>
        <div className={styles.ContactItem}>
          <Room style={{marginRight:"10px"}}/> Rua da Agronomia,270 - Montes Claros/MG
        </div>
        <div className={styles.ContactItem}>
          <Phone style={{marginRight:"10px"}}/> +55 38 98842-5691
        </div>
        <div className={styles.ContactItem}>
          <WhatsApp style={{marginRight:"10px"}} /> +55 38 98842-5691
        </div>
        <div className={styles.ContactItem}>
          <MailOutline style={{marginRight:"10px"}} /> qualifik.engenharia@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
