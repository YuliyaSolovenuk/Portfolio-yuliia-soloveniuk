import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>

       <Routes>
        <Route path="/" element={<div>Home</div>} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Projects />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      Hello! My name Yuliia Soloveniuk :)
    </div>
  );
};
