import styled from "styled-components";
import { Utility } from "../pages/data";
import Product from "./Product";
import styles from '../styles/Products.module.css'
import { Height } from "@material-ui/icons";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <div className={styles.container}>
      {Utility.map((item) => (
        <Product item={item} key={item.id} style={{ height: "100%", width: "100%"}}/>
      ))}
    </div>
  );
};

export default Products;
