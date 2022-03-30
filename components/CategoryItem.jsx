import styled from "styled-components";
import styles from '../styles/CategoryItem.module.css'


const CategoryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <img className={styles.Image} src={item.img} />
      <div className={styles.Info}>
        <h1 className={styles.Title}>{item.title}</h1>
        <h1 className={styles.Title}>{item.h1}</h1>
      </div>
    </div>
  );
};

export default CategoryItem;
