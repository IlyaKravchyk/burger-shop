import { Count } from '../../Count/Count';
import { Goods } from './Goods/Goods';
import style from './orderItem.module.css';

export const OrderItem = ({ image, title, weight, price }) => {
   return (
      <li className={style.item}>
         <img className={style.image} src={image} alt={title} />

         <Goods
            title={title}
            weight={weight}
            price={price}
         />
         <Count />
      </li>
   )
}