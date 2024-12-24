import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard"; 
import ProfilePage from "./Pages/ProfilePage"; 
import CredentialPage from "./Pages/CredentialPage";
import QrScanPage from "./Pages/QrScanPage";
import Email from "./Pages/Email";
import Template from "./Pages/Template";
import Meeting from "./Pages/Meeting";
import CallReport from "./Pages/CallReport";
import MasterData from "./Pages/MasterData";
import Whatsapp from "./Pages/Whatsapp"

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
          <Route path="email" element={<Email />} />
          <Route path="template" element={<Template />} />
          <Route path="meeting" element={<Meeting/>} />
          <Route path="callreport" element={<CallReport/>} />
          <Route path="master-data" element={<MasterData/>} />
          <Route path="whatsapp" element={<Whatsapp/>} />
         
        </Route>
      </Routes>
    </Router>
  </>
  );
};

export default App;
