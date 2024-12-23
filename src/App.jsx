import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard"; 
import ProfilePage from "./Pages/ProfilePage"; 
import CredentialPage from "./Pages/CredentialPage";
import QrScanPage from "./Pages/QrScanPage";

const App = () => {
  return (
  <>
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
  </>
  );
};

export default App;
