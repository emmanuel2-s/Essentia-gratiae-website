import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../libs/supabase";
import { Loader2, Lock, Mail } from "lucide-react";
import { notifyError, notifySuccess } from "../../utils/toast";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Login with Supabase Auth
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (loginError) {
        notifyError(loginError);
        throw loginError;
      }

      const user = data.user;

      // Check if logged-in user is an admin
      const { data: adminUser, error: adminError } = await supabase
        .from("admin_users")
        .select("id, email")
        .eq("id", user.id)
        .maybeSingle();

      if (adminError) {
        notifyError(adminError);
        throw adminError;
      }

      // User is authenticated but NOT an admin
      if (!adminUser) {
        await supabase.auth.signOut();

        throw new Error(
          "You do not have permission to access the admin dashboard.",
        );
      }

      // Admin successfully logged in
      notifySuccess("Admin Login Successful");
      navigate("/admin/dashboard");
    } catch (error) {
      notifyError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.4em] text-[#B89B5E] text-xs">
            Essentia Gratia
          </p>

          <h1 className="mt-4 text-5xl font-serif text-[#1E3A34]">
            Admin Portal
          </h1>

          <p className="mt-4 text-[#6E6258]">
            Sign in to manage your products and rituals.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <form onSubmit={handleLogin}>
            {/* Error */}
            {error && (
              <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm text-[#342D28] mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7D8770]"
                />

                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#ddd6cc] bg-[#FDFBF8] py-4 pl-12 pr-4 outline-none transition focus:border-[#7D8770]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mt-6">
              <label className="block text-sm text-[#342D28] mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7D8770]"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#ddd6cc] bg-[#FDFBF8] py-4 pl-12 pr-4 outline-none transition focus:border-[#7D8770]"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#1E3A34] py-4 text-white transition hover:bg-[#142822] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading && <Loader2 size={20} className="animate-spin" />}

              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Back to Website */}
        <div className="text-center mt-8">
          <Link to="/" className="text-sm text-[#7D8770] hover:text-[#1E3A34]">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
