import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import Navbar from './pages/Header/Navbar';
// import PreNavBar from './pages/Header/PreNavBar';
import CursorFollower from './pages/CursorFollower/CursorFollower';
import { useEffect, useRef, useState } from 'react';
import { useCursor } from './context/CursorContext';
import BestSellers from './pages/Home/BestSellers';
import HomeComponents from './pages/Home/HomeComponents';
import HomeWrapper from './pages/HomeWrapper';
import FilterWrapper from './pages/Product/FilterWrapper';

const App = () => {
  const {
    mouseEnter,
    handleMouseEnter,
    cursorPosition,
    updateCursorPosition,
    cursorRef,
  } = useCursor();
  const path = window.location.pathname;

  useEffect(() => {
    if (path.includes('admin')) {
      handleMouseEnter(false);
    }
  }, [path]);

  const handleMouseMove = (event) => {
    updateCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <>
      <Router>
        {/* <PreNavBar /> */}
        <div
          className='overflow-hidden font-Montserrat bg-white'
          onMouseMove={handleMouseMove}
          onMouseEnter={() => handleMouseEnter(true)}
          onMouseLeave={() => handleMouseEnter(false)}>
          <CursorFollower
            position={cursorPosition}
            mouseEnter={mouseEnter}
            cursorRef={cursorRef}
          />
          <Navbar />
          <Routes>
            {/* <Route element={<NonAdminWrapper />}> */}
            <Route element={<HomeWrapper />}>
              <Route path='/' element={<HomeComponents />} />
            </Route>
            <Route element={<FilterWrapper />}>
              <Route path='/shop' element={<BestSellers />} />
            </Route>
            <Route path='/admin' element={<div>Admin</div>} />
            {/* </Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default App;
