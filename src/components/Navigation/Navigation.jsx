import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { asyncRequestAllCategory } from '../../store/reducers/categorySlice';
import { Container } from '../Container/Container';

import style from './navigation.module.css';
import { NavigationItem } from './NavigationItem/NavigationItem';


export const Navigation = () => {

   const { categoryData } = useSelector(state => state.category)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(asyncRequestAllCategory())
   }, [])

   const navItem = categoryData.map(({ category, title, image, id }) => <NavigationItem
      key={id}
      category={category}
      title={title}
      image={image}
   />)

   return (
      <nav className={style.navigation}>
         <Container className={style.container}>
            <ul className={style.list}>
               {navItem}
            </ul>
         </Container>
      </nav>
   )
}