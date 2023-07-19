import React from "react";
import Sidebar from "./components/Sidebars/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Assessment from "./pages/Assessments/Assessment";



function App() {
  return (
    <>
    <Router>
    <Sidebar />
    <Assessment/>
    </Router>
    </>
  );
}

export default App;
