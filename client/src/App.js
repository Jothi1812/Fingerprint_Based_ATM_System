import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import UploadFingerprint from './components/UploadFingerprint';
import DisplayAccountDetails from './components/DisplayAccountDetails';
import Savings from './components/Savings';
import Withdrawal from './components/Withdrawal';
import './App.css';

const App = () => {
  const [accountDetails, setAccountDetails] = useState({ balance: 0 });
  const [user, setUser] = useState({ username: '' });
  const [systemStatus] = useState({
    isOperational: true,
    lastUpdate: new Date().toLocaleString()
  });

  const updateBalance = (newBalance) => {
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      balance: newBalance,
    }));
  };

  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/upload" element={<UploadFingerprint setAccountDetails={setAccountDetails} />} />
          <Route path="/details" element={<DisplayAccountDetails details={accountDetails} />} />
          
          <Route
            path="/"
            element={
              <div className="welcome-container">
                <div className="welcome-content">
                  <div className="bank-section">
                    <h1 className="bank-title">ATM Machine</h1>
                    <div className="welcome-message">
                      <h2>नमस्ते (Namaste)</h2>
                      {user.username ? 
                        <h3>Welcome back, {user.username}!</h3> : 
                        <h3>Welcome to our ATM services</h3>
                      }
                    </div>
                  </div>

                  <div className="system-status">
                    <h3>System Status</h3>
                    <div className={`status-indicator ${systemStatus.isOperational ? 'operational' : 'down'}`}>
                      <span className="status-dot"></span>
                      <p>{systemStatus.isOperational ? 'System Operational' : 'System Under Maintenance'}</p>
                    </div>
                    <p className="last-update">Last Updated: {systemStatus.lastUpdate}</p>
                  </div>

                  <div className="features-section">
                    <h3>Available Services</h3>
                    <ul className="features-list">
                      <li>24/7 ATM Access</li>
                      <li>Secure Transactions</li>
                      <li>Instant Cash Withdrawal</li>
                      <li>Balance Inquiry</li>
                      <li>Fund Transfer</li>
                    </ul>
                  </div>
                </div>
              </div>
            }
          />
          
          <Route path="/savings" element={<Savings setAccountDetails={setAccountDetails} username={user.username} />} />
          <Route path="/withdrawal" element={<Withdrawal username={user.username} updateBalance={updateBalance} />} />
      
        </Routes>
      </main>
    </Router>
  );
};

export default App;
