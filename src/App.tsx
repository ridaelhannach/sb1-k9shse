import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Settings from './pages/Settings';
import Login from './pages/Login';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute element={<Layout><Home /></Layout>} />} />
        <Route path="/history" element={<PrivateRoute element={<Layout><History /></Layout>} />} />
        <Route path="/settings" element={<PrivateRoute element={<Layout><Settings /></Layout>} />} />
      </Routes>
    </Router>
  );
}

export default App;