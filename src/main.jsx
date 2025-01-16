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
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardLayout from "./Layout/DashboardLayout.jsx";
import UserHome from "./Pages/UserHome/UserHome.jsx";
import Reservation from "./Pages/Reservation/Reservation.jsx";
import PaymentHistory from "./Pages/PaymentHistory/PaymentHistory.jsx";
import MyCart from "./Pages/MyCart/MyCart.jsx";
import AddReview from "./Pages/AddReview/AddReview.jsx";
import MyBooking from "./Pages/MyBooking/MyBooking.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <BistroContext>
            <Routes>
              {/* Basic landing page that is nsted */}
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/our-manu" element={<OurManu />} />
                <Route path="/our-food" element={<Order />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
              {/* errorpage */}
              <Route path="*" element={<ErrorPage />} />
              {/* dashboard layout for admin management */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="/dashboard/user-home" element={<UserHome/>} />
                <Route path="/dashboard/reservation" element={<Reservation/>} />
                <Route path="/dashboard/payment-history" element={<PaymentHistory/>} />
                <Route path="/dashboard/my-cart" element={<MyCart/>} />
                <Route path="/dashboard/add-review" element={<AddReview/>} />
                <Route path="/dashboard/my-booking" element={<MyBooking/>} />
              </Route>
            </Routes>
          </BistroContext>
        </HelmetProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
