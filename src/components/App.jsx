import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "pages/Home";
import About from "pages/About";
import Projects from "pages/Projects";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
      
    </div>
  );
};
