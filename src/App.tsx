import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "pages/home/Home";
import ErrorPage from "components/error-page/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "containers/not-found/NotFound";

function App() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  if (!online) {
    return <ErrorPage />;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        {/* Catch-all route */}
        <Route Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
