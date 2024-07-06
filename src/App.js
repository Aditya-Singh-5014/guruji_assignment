import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiStepForm from "./pages/MultiStepForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default App;
