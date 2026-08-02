import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../../../libs/supabase";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedAdminRoute() {
  const { session, loading: authLoading } = useAuth();

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      // Wait until AuthProvider finishes checking session
      if (authLoading) return;

      // No logged-in user
      if (!session?.user) {
        setIsAdmin(false);
        setAdminLoading(false);
        return;
      }

      // Check admin_users table
      const { data, error } = await supabase
        .from("admin_users")
        .select("id")
        .eq("id", session.user.id)
        .maybeSingle();

      if (error) {
        console.error("Admin check error:", error);
        setIsAdmin(false);
      } else {
        setIsAdmin(!!data);
      }

      setAdminLoading(false);
    };

    checkAdmin();
  }, [session, authLoading]);

  // Authentication is still loading
  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen bg-[#F7F2EB] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#7D8770] border-t-transparent rounded-full animate-spin mx-auto" />

          <p className="mt-5 text-[#342D28]">Checking your access...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!session) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  // Logged in but not an admin
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  // Logged in and is an admin
  return <Outlet />;
}
