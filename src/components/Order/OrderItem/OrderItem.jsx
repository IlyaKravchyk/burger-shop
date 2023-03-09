import { Count } from '../../Count/Count';
import { Goods } from './Goods/Goods';
import style from './orderItem.module.css';

export const OrderItem = ({ item, countUp, countDown, removeProduct }) => {

   const { image, title, weight, price, count, id } = item

   return (
      <li className={style.item}>
         <img className={style.image} src={image} alt={title} />

         <Goods
            title={title}
            weight={weight}
            price={price}
         />
         <Count
            key={id}
            id={id}
            count={count}
            countUp={countUp}
            countDown={countDown}
            removeProduct={removeProduct}
         />
      </li>
   )
}