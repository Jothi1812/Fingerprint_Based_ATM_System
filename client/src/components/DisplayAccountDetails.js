import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const DisplayAccountDetails = ({ details }) => {
  const navigate = useNavigate();
  
  // State to store the withdrawn amount
  const [withdrawnAmount, setWithdrawnAmount] = useState(0);

  // If no details are passed, return null
  if (!details) return null;

  // Function to generate receipt
  const generateReceipt = () => {
    // Calculate the new balance
    const newBalance = details.balance - withdrawnAmount;

    const receiptContent = `
      <html>
      <head>
        <title>Receipt</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { text-align: center; }
          .receipt-details {
            margin-top: 20px;
            padding: 20px;
            border: 1px solid #000;
            width: 400px;
            margin: 0 auto;
            text-align: left;
          }
          .receipt-details p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <h2>Transaction Receipt</h2>
        <div class="receipt-details">
          <p><strong>Account Number:</strong> ${details.accountNumber}</p>
          <p><strong>Account Holder:</strong> ${details.username}</p>
          <p><strong>Original Balance:</strong> ${details.balance}</p>
          <p><strong>Withdrawn Amount:</strong> ${withdrawnAmount}</p>
          <p><strong>New Balance:</strong> ${newBalance}</p>
          <p><strong>Bank Name:</strong> ${details.bankName}</p>
          <p><strong>City:</strong> ${details.city}</p>
          <p><strong>Type:</strong> ${details.type}</p>
        </div>
      </body>
      </html>
    `;

    const receiptWindow = window.open('', '_blank');
    receiptWindow.document.write(receiptContent);
    receiptWindow.document.close(); // Ensure the window is ready for display
  };

  // Logout function
  const handleLogout = () => {
    // Clear user session or token (if applicable)
    // localStorage.removeItem('token'); // Example if you're using localStorage

    // Navigate to the login page
    navigate('/login');
  };

  // Example withdrawal amount function
  const handleWithdraw = () => {
    const amount = prompt('Enter the amount to withdraw:');
    if (amount && !isNaN(amount)) {
      setWithdrawnAmount(parseFloat(amount));
    } else {
      alert('Please enter a valid number.');
    }
  };

  return (
    <div className="details-container">
      <h2>Account Details</h2>
      <img src="/images/download.png" alt="User" className="user-image" />

      <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="bank-link">
        Visit Bank Website
      </a>

      <div className="cards-grid">
        <div className="details-card">
          <p><strong>Account Number:</strong> {details.accountNumber}</p>
        </div>

        <div className="details-card">
          <p><strong>Account Holder:</strong> {details.username}</p>
        </div>

        <div className="details-card">
          <p><strong>Balance:</strong> {details.balance}</p>
        </div>

        <div className="details-card">
          <p><strong>Bank Name:</strong> {details.bankName}</p>
        </div>

        <div className="details-card">
          <p><strong>City:</strong> {details.city}</p>
        </div>

        <div className="details-card">
          <p><strong>Type:</strong> {details.type}</p>
        </div>
      </div>

      {/* Save, Withdraw, Receipt, and Logout Buttons */}
      <div className="action-buttons">
        <button onClick={() => navigate('/savings')}>Save</button>
        <button onClick={handleWithdraw}>Withdraw</button> {/* Withdraw button */}
        <button onClick={generateReceipt}>Receipt</button> {/* Receipt button */}
        <button onClick={handleLogout}>Logout</button> {/* Logout button */}
      </div>
    </div>
  );
};

export default DisplayAccountDetails;
