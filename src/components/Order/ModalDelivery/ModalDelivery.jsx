export const ModalDelivery = () => {
   return (
      <div class="modal modal_delivery">
         <div class="modal__main mdelivery">
            <div class="mdelivery__container">
               <h2 class="mdelivery__title">Доставка</h2>

               <form class="mdelivery__form" id="delivery">
                  <fieldset class="mdelivery__fieldset">
                     <input class="mdelivery__input" type="text" name="name" placeholder="Ваше имя">
                        <input class="mdelivery__input" type="tel" name="phone" placeholder="Телефон">
                        </fieldset>

                        <fieldset class="mdelivery__fieldset mdelivery__fieldset_radio">
                           <label class="mdelivery__label">
                              <input class="mdelivery__radio" type="radio" name="format" value="pickup">
                                 <span>Самовывоз</span>
                           </label>

                           <label class="mdelivery__label">
                              <input class="mdelivery__radio" type="radio" name="format" value="delivery" checked>
                                 <span>Доставка</span>
                           </label>
                        </fieldset>

                        <fieldset class="mdelivery__fieldset">
                           <input class="mdelivery__input" type="text" name="address" placeholder="Улица, дом, квартира">
                              <input class="mdelivery__input mdelivery__input_half" type="number" name="floor" placeholder="Этаж">
                                 <input class="mdelivery__input mdelivery__input_half" type="number" name="intercom"
                                    placeholder="Домофон">
                                 </fieldset>
                              </form>

                              <button class="mdelivery__submit" type="submit" form="delivery">Оформить</button>

                           </div>

                           <button class="modal__close" type="button">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                 <rect x="5.07422" y="5.28247" width="1" height="20" transform="rotate(-45 5.07422 5.28247)" />
                                 <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)" />
                              </svg>
                           </button>
                        </div>
                     </div>
                     )
}