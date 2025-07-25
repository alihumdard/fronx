import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRoutes } from "./routes";
import ScrollToTop from "./main/ScrollToTop";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToHash from "./main/ScrollToHash";

const App = () => {
  const routes = useRoutes();

  return (
    <Router>
      {/* Main content */}
      <ScrollToHash />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between">
        <main className="flex-grow">
          <Routes>
            {routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
