import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';
import { Layout } from './components/Layout/Layout';
import { CatalogLayout } from './components/CatalogLayout/CatalogLayout';

import { CATEGORY } from './const';


export const App = () => {

   return (
      <>
         <Routes >
            <Route path='/' element={<Layout />} >
               <Route element={<CatalogLayout />}>
                  <Route path='/' element={<Navigate to='/category/burger' />} />
                  <Route path={`${CATEGORY}/:category`} element={<Catalog />} />
               </Route>
            </Route>
         </Routes>
      </>
   )
}
