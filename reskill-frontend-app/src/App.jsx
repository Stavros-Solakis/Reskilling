import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import SingleArticlePage from './Pages/SingleArticlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/posts/:postId" element={<SingleArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;