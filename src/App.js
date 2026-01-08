import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Form3 from './pages/Form3';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/form1" replace />} />
            <Route path="/form1" element={<Form1 />} />
            <Route path="/form2" element={<Form2 />} />
            <Route path="/form3" element={<Form3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
