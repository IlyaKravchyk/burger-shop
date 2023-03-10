import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '../../store/reducers/modalDeliveryReducer';
import { sendFormData, updateValue } from '../../store/reducers/formSlice';

import classNames from 'classnames';
import style from './ModalDelivery.module.css';

export const ModalDelivery = () => {

   const { name, phone, address, floor, intercom, format } = useSelector(state => state.form)
   const dispatch = useDispatch()

   const closeHandler = (e) => {
      if (e.target === e.currentTarget) {
         dispatch(modalClose())
      }
   }

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(sendFormData({ name, phone, address, floor, intercom, format }))
   }

   const changeHandler = (e) => {
      let value = e.target.value
      let name = e.target.name
      dispatch(updateValue({
         value,
         name
      }))
   }

   return (
      <div className={style.modal} onClick={closeHandler}>
         <div className={style.mdelivery}>
            <div className={style.container}>
               <h2 className={style.title}>Доставка</h2>

               <form className={style.form} id='delivery' onSubmit={submitHandler}>
                  <fieldset className={style.fieldset}>
                     <input
                        className={style.input}
                        type='text'
                        name='name'
                        placeholder='Ваше имя'
                        value={name}
                        onChange={changeHandler}
                     />
                     <input
                        className={style.input}
                        type='tel'
                        name='phone'
                        placeholder='Телефон'
                        value={phone}
                        onChange={changeHandler}
                     />
                  </fieldset>

                  <fieldset className={style.fieldset_radio}>
                     <label className={style.label}>
                        <input
                           className={style.radio}
                           type='radio'
                           name='format'
                           value='pickup'
                           checked={format === 'pickup'}
                           onChange={changeHandler}
                        />
                        <span>Самовывоз</span>
                     </label>

                     <label className={style.label}>
                        <input
                           className={style.radio}
                           type='radio'
                           name='format'
                           value='delivery'
                           checked={format === 'delivery'}
                           onChange={changeHandler}
                        />
                        <span>Доставка</span>
                     </label>
                  </fieldset>

                  {
                     format === 'delivery' && <fieldset className={style.fieldset}>
                        <input
                           className={style.input}
                           type='text'
                           name='address'
                           placeholder='Улица, дом, квартира'
                           value={address}
                           onChange={changeHandler}
                        />
                        <input
                           className={classNames(style.input, style.input_half)}
                           type='number'
                           name='floor'
                           placeholder='Этаж'
                           value={floor}
                           onChange={changeHandler}
                        />
                        <input
                           className={classNames(style.input, style.input_half)}
                           type='number'
                           name='intercom'
                           placeholder='Домофон'
                           value={intercom}
                           onChange={changeHandler}
                        />
                     </fieldset>
                  }
               </form>

               <button className={style.submit} type='submit' form='delivery'>
                  Оформить
               </button>
            </div>

            <button className={style.modal__close} type='button' onClick={() => dispatch(modalClose())}>
               <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <rect
                     x='5.07422'
                     y='5.28247'
                     width='1'
                     height='20'
                     transform='rotate(-45 5.07422 5.28247)'
                  />
                  <rect
                     x='5.78125'
                     y='19.4246'
                     width='1'
                     height='20'
                     transform='rotate(-135 5.78125 19.4246)'
                  />
               </svg>
            </button>
         </div>
      </div>
   )
}
