import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Navigation } from "../Navigation/Navigation"

export const Layout = () => {
   return (
      <>
         <Header />
         <Navigation />
         <Outlet />
         <Footer />
      </>
   )
}