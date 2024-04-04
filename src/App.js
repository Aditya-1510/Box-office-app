import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
// function Homepage() {
//   return <div>This is Home page</div>;
// }
// function Starred() {
//   return <div>This is Another page </div>;
// }
// function Notfound() {
//   return <div>Error 404 page not found</div>;
// }
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/starred" element={<Starred />}></Route>
        <Route exact path="/show/:id" element={<Show />}></Route>
        <Route exact path="*" element={<>404 error Page not found</>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
