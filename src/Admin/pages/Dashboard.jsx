import { useNavigate } from "react-router-dom";
import { LogOut, Package, Plus } from "lucide-react";

import ProductManager from "../products/Products";
import { useAuth } from "../hooks/useAuth";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/admin/login", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE]">
      {/* Header */}
      <header className="border-b border-[#ddd6cc] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#B89B5E]">
              Essentia Gratia
            </p>

            <h1 className="mt-1 text-2xl font-serif text-[#1E3A34]">
              Admin Dashboard
            </h1>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border border-[#ddd6cc] px-5 py-3 text-sm text-[#342D28] transition hover:bg-[#1E3A34] hover:text-white"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Welcome */}
        <div className="mb-12">
          <p className="text-[#6E6258]">Welcome back,</p>

          <h2 className="mt-2 text-4xl font-serif text-[#1E3A34]">
            {user?.email || "Admin"}
          </h2>
        </div>

        {/* Dashboard Cards */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {/* Total Products */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <Package size={30} className="text-[#7D8770]" />

            <p className="mt-6 text-sm text-[#6E6258]">Total Products</p>

            <h3 className="mt-2 text-4xl font-serif text-[#1E3A34]">0</h3>
          </div>

          {/* Another Statistic */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <Package size={30} className="text-[#7D8770]" />

            <p className="mt-6 text-sm text-[#6E6258]">Total Products</p>

            <h3 className="mt-2 text-4xl font-serif text-[#1E3A34]">0</h3>
          </div>

          {/* Add Product */}
          <button
            type="button"
            onClick={() => navigate("/admin/productform")}
            className="rounded-3xl bg-[#1E3A34] p-8 text-left text-white transition hover:bg-[#142822]"
          >
            <Plus size={30} />

            <p className="mt-6 text-lg">Add New Product</p>

            <p className="mt-2 text-sm text-white/70">
              Create a new ritual product.
            </p>
          </button>
        </div>

        {/* Product Manager */}
        <ProductManager />
      </main>
    </div>
  );
}
