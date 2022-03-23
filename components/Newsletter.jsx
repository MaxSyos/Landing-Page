import { Send } from "@material-ui/icons";
import { useRef, useState } from "react";
import styles from '../styles/Newsletter.module.css'
import emailjs from "@emailjs/browser";
import toast  from 'react-hot-toast'

const Newsletter = () => {

  const formRef = useRef()
  const [done, setDone] = useState(false)
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (loading) return;

    emailjs
      .sendForm('service_m4il2iu', 'template_z7x8stz', formRef.current, 'Vce547QGIcQrbT93d')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        setUser('');
        toast('Seu contato foi enviado');
      }, 
        (error) => {
         console.log(error.text);
    });
  }

  


  return (
    <div className={styles.container}>
      <h1 className={styles.Title}>N O V I D A D E S</h1>
      <div className={styles.Desc}>
        Acompanhe nossas realizações.
      </div>
      <form className={styles.InputContainer} ref={formRef} onSubmit={handleSubmit}>
        <input className={styles.Input} 
          type="text" 
          placeholder="Email" 
          name="email" 
          value={user} 
          onChange={({target}) => setUser(target.value)} />
        <button  className={styles.Button} >
          <Send />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;