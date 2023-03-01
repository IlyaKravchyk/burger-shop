import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncRequestProductCategories } from "../../store/reducers/productCategorySlice";

import { Product } from "./Product/Product";
import { CatalogTitle } from "./CatalogTitle/CatalogTitle";


import style from './catalog.module.css';

import { useEffect } from "react";


export const Catalog = () => {

   const dispatch = useDispatch();

   const { products } = useSelector(state => state.productCategory);
   const { categoryData } = useSelector(state => state.category);

   const { category } = useParams();

   useEffect(() => {
      dispatch(asyncRequestProductCategories(category))
   },
      [category])

   return (
      <div className={style.wrapper}>
         {
            categoryData.map(item => {
               if (item.category == category) {
                  return <CatalogTitle
                     key={item.id}
                     title={item.title}
                  />
               }
            })
         }
         <div className={style.wrap_list}>
            <ul className={style.list}>
               {
                  products.map(({ price, title, weight, image, id }) =>
                     <Product
                        key={id}
                        image={image}
                        price={price}
                        title={title}
                        weight={weight}
                     />)
               }
            </ul>
         </div>
      </div>
   )
}