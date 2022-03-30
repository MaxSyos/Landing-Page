import styled from "styled-components";
import { categories } from "../pages/data";
import CategoryItem from "./CategoryItem";
import styles from '../styles/Categories.module.css'




const Categories = () => {
  return (
    <div className={styles.container } >
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
