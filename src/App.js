import MainPage from './MainPage';
import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/booking" />
  </Routes>
);

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;