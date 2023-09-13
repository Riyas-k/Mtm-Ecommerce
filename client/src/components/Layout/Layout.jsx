
import {  useLocation } from 'react-router-dom';
import AdminNav from '../../admin/AdminComponents/AdminNav/AdminNav';
import Header from '../Header/Header';
import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';






const Layout = () => {

    const location=useLocation()
  return (
    <>
      {
         location.pathname.startsWith('/admin') ? <AdminNav/> : <Header/>
      }
      <div>
         <Routers/>
      </div>
      <Footer/>
    </>
  );
}

export default Layout;
