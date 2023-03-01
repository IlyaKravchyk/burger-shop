import style from './count.module.css';

export const Count = () => {

   return (
      <div className={style.count}>
         <button className={style.minus} >-</button>
         <p className={style.amount}>3</p>
         <button className={style.plus} >+</button>
      </div>
   )
}