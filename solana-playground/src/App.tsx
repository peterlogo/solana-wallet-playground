import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components';
import HomePage from './pages/home/HomePage';
import PortalPage from './pages/portal/PortalPage';
import WalletPage from './pages/wallet/WalletPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/portal" element={<PortalPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
