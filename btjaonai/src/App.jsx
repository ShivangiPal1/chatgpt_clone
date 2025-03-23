import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import JaxonAIChat from "./chatbot"

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for SignUpPage (default route) */}
        <Route path="/" element={<SignUpPage />} />

        {/* Route for Chatbot Page */}
        <Route path="/chat" element={<JaxonAIChat />} />
      </Routes>
    </Router>
  );
}

export default App;
