import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { asyncRequestProductCategories } from "../../store/reducers/productCategorySlice";

import { Product } from "./Product/Product";
import { CatalogTitle } from "./CatalogTitle/CatalogTitle";

import style from './catalog.module.css';
import Loader from "../Loader/Loader";


export const Catalog = () => {

   const dispatch = useDispatch();
   const { products, loading } = useSelector(state => state.productCategory);
   const { categoryData } = useSelector(state => state.category);
   const { category } = useParams();

   useEffect(() => {
      dispatch(asyncRequestProductCategories(category))
   },
      [category])

   return (
      <> {loading && <Loader />}
         {!loading && <div className={style.wrapper}>
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
               {!!!products.length && <div className={style.empty}>К сожалению на данный момент эта категория пуста.</div>}
               <ul className={style.list}>
                  {products.map((item) =>
                     <Product
                        key={item.id}
                        item={item}
                     />)
                  }
               </ul>
            </div>
         </div >}
      </>
   )
}