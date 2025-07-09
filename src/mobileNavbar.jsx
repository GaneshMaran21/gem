
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import MobileNavbar from './components/navbar/mobileNavBar';

export default function MobileNavBarLayout() {
  return (
    <>
      <MobileNavbar/>
      <Outlet />
    </>
  );
}