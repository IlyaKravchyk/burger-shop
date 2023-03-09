import { useDispatch } from 'react-redux';
import { addToOrder } from '../../../store/reducers/orderSlice';

import style from './product.module.css';

export const Product = ({ item }) => {
   const { image, price, title, weight, id } = item

   const dispatch = useDispatch()

   const clickHandler = () => {
      dispatch(addToOrder(item))
   }

   return (
      <li className="catalog__item">
         <article className={style.product}>
            <img src={image} alt={title} className={style.image} />

            <p className={style.price}>{price}<span className="currency">₽</span></p>

            <h3 className={style.title}>
               <button className={style.detail}>{title}</button>
            </h3>

            <p className={style.weight}>{weight}г</p>

            <button className={style.add} type="button" id={id} onClick={clickHandler}>Добавить</button>
         </article>
      </li>
   )
}