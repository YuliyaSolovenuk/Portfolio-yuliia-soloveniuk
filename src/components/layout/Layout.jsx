import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/header/Header';
// import background from "../../images/a2e091948a99374d.jpeg";


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet/>
        </Suspense>
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;