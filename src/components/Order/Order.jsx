import burger from '../../assets/img/burger_1.jpg';
import free from '../../assets/img/free_1.jpg';
import hotDog from '../../assets/img/hot-dog_1.jpg';
import { OrderItem } from './OrderItem/OrderItem';

import style from './order.module.css';

export const Order = () => {

   const orderState = [
      {
         image: burger,
         price: 689,
         title: 'Мясная бомба',
         weight: 520,
         id: 1
      },
      {
         image: free,
         price: 245,
         title: 'Картошка фри',
         weight: 180,
         id: 2
      },
      {
         image: hotDog,
         price: 239,
         title: 'Жгучий хот-дог',
         weight: 245,
         id: 3
      },
   ]

   return (
      <div className={style.order}>
         <section className={style.wrapper}>
            <div className={style.header} tabIndex="0" role="button">
               <h2 className={style.title}>Корзина</h2>

               <span className={style.count}>4</span>
            </div>

            <div className={style.wrap_list}>
               <ul className="list">
                  {orderState.map(({ image, price, title, weight, id }) => <OrderItem
                     key={id}
                     image={image}
                     price={price}
                     title={title}
                     weight={weight}
                     id={id}
                  />)}
               </ul>

               <div className={style.total}>
                  <p>Итого</p>
                  <p>
                     <span className={style.amount}>1279</span>
                     <span className="currency">₽</span>
                  </p>
               </div>

               <button className={style.submit}>Оформить заказ</button>

               <div className={style.apeal}>
                  <p className={style.text}>Бесплатная доставка</p>
                  <button className={style.close}>Свернуть</button>
               </div>
            </div>
         </section>
      </div>
   )
}