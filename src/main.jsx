import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Layout from "./Layout/Layout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import { HomePage } from "./Pages/HomePage/HomePage.jsx";
import OurManu from "./Pages/OurManu/OurManu.jsx";
import Order from "./Pages/Order/Order.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import SignIn from "./Pages/Signin/SignIn.jsx";
import SignUp from "./Pages/SignOut/SignUpt.jsx";
import BistroContext from "./BistroContext/BistroContext.jsx";
import {  HelmetProvider } from "react-helmet-async";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <BistroContext>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* Nested Route under the parants layout*/}
                <Route index element={<HomePage />} />
                <Route path="/our-manu" element={<OurManu />} />
                <Route path="/our-food" element={<Order />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Routes>
              
            </Routes>
          </BistroContext>
        </HelmetProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
