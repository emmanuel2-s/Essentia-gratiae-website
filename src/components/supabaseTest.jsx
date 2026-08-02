import { useEffect, useState } from "react";
import { supabase } from "../../libs/supabase";

export default function SupabaseTest() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("is_active", true)
          .order("created_at", { ascending: false });
        console.log(data);

        if (error) throw error;

        setMessage(data.message);
      } catch (err) {
        console.error(err);
        setMessage("Connection failed");
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-6 bg-red rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-[#1E3A34] mb-2">
        Supabase Connection Test
      </h2>

      <p className="text-[#6E6258]">{message}</p>
    </div>
  );
}
