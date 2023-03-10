import { TailSpin } from 'react-loader-spinner';
import style from './loader.module.css';
const Loader = () => {
   return (
      <div className={style.loader}>
         <TailSpin
            height="80"
            width="80"
            color="#FF5C00"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
         />
      </div>
   )
}
export default Loader