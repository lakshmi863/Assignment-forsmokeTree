

import React, { useState } from 'react';
import axios from 'axios';
import Modal from './components/Modal'; 
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/addformreq/mongodb', { name, address });
      setMessage(`Success: ${response.data.message}`);
      setModalVisible(true); // Show the modal on success

      // Reset input fields
      setName('');
      setAddress('');
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data.message : error.message}`);
      setModalVisible(true); // Show the modal on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Submit Your Information</legend>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
        </fieldset>
      </form>

      {/* Modal Display */}
      {modalVisible && <Modal message={message} onClose={() => setModalVisible(false)} />}
    </div>
  );
}

export default App;
