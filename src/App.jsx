import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; 
import ProfilePage from "./pages/ProfilePage"; 
import CredentialPage from "./pages/CredentialPage";
import QrScanPage from "./pages/QrScanPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* Nested routes for Dashboard */}
          <Route path="profile" element={<ProfilePage />} />
          <Route path="credential" element={<CredentialPage />} />
          <Route path="qr-scan" element={<QrScanPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
