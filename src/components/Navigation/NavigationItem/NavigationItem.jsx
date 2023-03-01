import { NavLink } from 'react-router-dom';
import { CATEGORY } from '../../../const';

import style from './navigationItem.module.css';

export const NavigationItem = ({ category, title, image }) => {
   return (
      <li className={style.item}>
         <NavLink className={(({ isActive }) => isActive ? style.active : '')} to={`${CATEGORY}/${category}`} >
            <div className={style.itemWrapper}>
               <img className={style.image} src={image} alt={title} />
               <span className={style.description}>{title}</span>
            </div>
         </NavLink>
      </li>
   )
}