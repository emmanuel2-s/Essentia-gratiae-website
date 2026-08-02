import { Route, Routes, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import Products from "../pages/Products";
import CartPage from "../pages/Cart";
import AdminLogin from "../Admin/pages/Login";
import AdminDashboard from "../Admin/pages/Dashboard";
import ProtectedAdminRoute from "../Admin/components/ProtectedAdminRoute";

// Import your global layout components
import TopbarArea from "../components/TopbarArea"; // Adjust paths as needed
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductForm from "../Admin/components/ProductForm";

// Create a Layout component specifically for public pages
const PublicLayout = ({ scrolled }) => {
  return (
    <>
      <TopbarArea scrolled={scrolled} />
      <Navbar scrolled={scrolled} />
      <main className="">
        <Outlet /> {/* This dynamically renders the active child route */}
      </main>
      <Footer />
    </>
  );
};

export default function RouterPage({ scrolled }) {
  return (
    <Routes>
      {/* PUBLIC CUSTOMER PAGES (With Navbar, Footer, Topbar) */}
      <Route element={<PublicLayout scrolled={scrolled} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>

      {/* ADMIN PAGES (No Navbar, No Footer) */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<ProtectedAdminRoute />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/productform" element={<ProductForm />} />
        <Route path="/admin/productform/:id" element={<ProductForm />} />
      </Route>
    </Routes>
  );
}
