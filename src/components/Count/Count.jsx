import style from './count.module.css';

export const Count = ({ count, id, countUp, countDown, removeProduct }) => {

   const countUpHandler = () => {
      countUp(id)
   }

   const countDownHandler = () => {
      (count <= 1) ? removeProduct(id) : countDown(id)
   }

   return (
      <div className={style.count}>
         <button className={style.minus} onClick={countDownHandler} >-</button>
         <p className={style.amount}>{count}</p>
         <button className={style.plus} onClick={countUpHandler} >+</button>
      </div>
   )
}