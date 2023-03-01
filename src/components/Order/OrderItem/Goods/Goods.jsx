import style from './goods.module.css';

export const Goods = ({ title, weight, price }) => {
   return (
      <div className={style.goods}>
         <h3 className={style.title}>{title}</h3>

         <p className={style.weight}>{weight}г</p>

         <p className={style.price}>{price}
            <span className="currency">₽</span>
         </p>
      </div>
   )
}