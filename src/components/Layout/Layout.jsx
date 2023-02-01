import { NavBar } from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

 const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
      <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;