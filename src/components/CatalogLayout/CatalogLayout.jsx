import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";
import { Order } from "../Order/Order";

import style from './CatalogLayout.module.css';


export const CatalogLayout = () => {

   return (
      <section className={style.catalog}>
         <Container className={style.container}>
            <Order />
            <Outlet />
         </Container>
      </section>
   )
}