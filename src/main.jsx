import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Layout from "./Layout/Layout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import { HomePage } from "./Pages/HomePage/HomePage.jsx";
import OurManu from "./Pages/OurManu/OurManu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested Route under the parants layout*/}
          <Route index element={<HomePage />} />
          <Route path="our-manu" element={<OurManu/>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
