import { useDispatch, useSelector } from 'react-redux';
import { countIncrement, countDecrement, deleteProduct } from '../../store/reducers/orderSlice';
import { modalOpen } from '../../store/reducers/modalDeliveryReducer';

import { OrderItem } from './OrderItem/OrderItem';
import { ModalDelivery } from '../Modal/ModalDelivery';

import style from './order.module.css';

export const Order = () => {

   const { orderData } = useSelector(state => state.order)
   const { isOpen } = useSelector(state => state.modal)

   const dispatch = useDispatch();

   const countUp = (data) => {
      dispatch(countIncrement(data))
   }
   const countDown = (data) => {
      dispatch(countDecrement(data))
   }

   const removeProduct = (id) => {
      dispatch(deleteProduct(id))
   }

   const sumCount = () => {
      let allCount = 0
      orderData.forEach(({ count }) => {
         allCount += count
      })
      return allCount
   }

   const allPrice = () => {
      let allPrice = 0
      orderData.forEach(({ price, count }) => {
         allPrice += price * count
      })
      return allPrice.toFixed()
   }

   const deliveryClickHandler = () => {
      dispatch(modalOpen())
   }

   return (
      <div className={style.order} >
         <section className={style.wrapper}>
            <div className={style.header} tabIndex="0" role="button">
               <h2 className={style.title}>Корзина</h2>

               <span className={style.count}>{sumCount()}</span>
            </div>

            <div className={style.wrap_list}>
               <ul className={style.list}>
                  {orderData.map(item => <OrderItem
                     key={item.id}
                     item={item}
                     countUp={countUp}
                     countDown={countDown}
                     removeProduct={removeProduct}
                  />)}
               </ul>

               <div className={style.total}>
                  <p>Итого</p>
                  <p>
                     <span className={style.amount}>{allPrice()}</span>
                     <span className="currency">₽</span>
                  </p>
               </div>

               <button className={style.submit} onClick={deliveryClickHandler} disabled={!!!orderData.length}>
                  Оформить заказ
               </button>

               {isOpen && <ModalDelivery />}

               <div className={style.apeal}>
                  <p className={style.text}>Бесплатная доставка</p>
               </div>
            </div>
         </section>
      </div>
   )
}