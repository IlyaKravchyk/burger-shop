import { Container } from "../Container/Container";
import { Order } from "../Order/Order";
import image from '../../assets/img/photo.jpg';
import image1 from '../../assets/img/photo-1.jpg';
import image2 from '../../assets/img/photo-2.jpg';
import image3 from '../../assets/img/photo-3.jpg';
import image4 from '../../assets/img/photo-4.jpg';
import image5 from '../../assets/img/photo-5.jpg';

import './catalog.css';
import './product.css';

export const Catalog = () => {
   return (
      <section className="catalog">
         <Container className="catalog__container">
            <Order />

            <div className="catalog__wrapper">
               <h2 className="catalog__title">Бургеры</h2>

               <div className="catalog__wrap_list">
                  <ul className="catalog__list">
                     <li className="catalog__item">
                        <article className="product">
                           <img src={image5} alt="Мясная бомба" className="product__image" />

                           <p className="product__price">689<span className="currency">₽</span></p>

                           <h3 className="product__title">
                              <button className="product__detail">Мясная бомба</button>
                           </h3>

                           <p className="product__weight">520г</p>

                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>

                     <li className="catalog__item">
                        <article className="product">
                           <img src={image1} alt="Супер сырный" className="product__image" />

                           <p className="product__price">550<span className="currency">₽</span></p>

                           <h3 className="product__title">
                              <button className="product__detail">Супер сырный</button>
                           </h3>

                           <p className="product__weight">512г</p>

                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>

                     <li className="catalog__item">
                        <article className="product">
                           <img src={image3} alt="Сытный" className="product__image" />

                           <p className="product__price">639<span className="currency">₽</span></p>

                           <h3 className="product__title">
                              <button className="product__detail">Сытный</button>
                           </h3>

                           <p className="product__weight">580г</p>

                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>

                     <li className="catalog__item">
                        <article className="product">
                           <img src={image} alt="Тяжелый удар" className="product__image" />

                           <p className="product__price">480<span className="currency">₽</span></p>

                           <h3 className="product__title">
                              <button className="product__detail">Тяжелый удар</button>
                           </h3>

                           <p className="product__weight">470г</p>

                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>

                     <li className="catalog__item">
                        <article className="product">
                           <img src={image2} alt="Вечная классика" className="product__image" />

                           <p className="product__price">450<span className="currency">₽</span></p>

                           <h3 className="product__title">
                              <button className="product__detail">Вечная классика</button>
                           </h3>

                           <p className="product__weight">450г</p>

                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>

                     <li className="catalog__item">
                        <article className="product">
                           <img src={image4} alt="Итальянский" className="product__image" />

                           <p className="product__price">560<span className="currency">₽</span></p>

                           <h3 className="product__title">
                              <button className="product__detail">Итальянский</button>
                           </h3>

                           <p className="product__weight">510г</p>

                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>
                  </ul>
               </div>
            </div>
         </Container>
      </section>
   )
}