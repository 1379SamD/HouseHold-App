import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Report from './pages/Report.tsx';
import NoMatch from './pages/NoMatch.tsx';
import AppLayout from './components/layout/AppLayout.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
