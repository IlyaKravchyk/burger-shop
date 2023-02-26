import style from './container.module.css';
import classNames from 'classnames';

export const Container = ({ className, children }) => {
   return (
      <div className={classNames(style.container, className)} >
         {children}
      </div >
   )
}