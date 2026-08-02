import { useEffect, useState } from "react";
import { Pencil, Trash2, LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../libs/supabase";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const navigate = useNavigate();

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (error) {
        throw error;
      }

      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadInitialProducts = async () => {
      await fetchProducts();
    };

    loadInitialProducts();
  }, []);

  // --------------------------------
  // GET STORAGE FILE PATH
  // --------------------------------

  const getStoragePath = (imageUrl) => {
    if (!imageUrl) return null;

    try {
      const url = new URL(imageUrl);

      const marker = "/storage/v1/object/public/product-images/";

      const index = url.pathname.indexOf(marker);

      if (index === -1) {
        return null;
      }

      return decodeURIComponent(url.pathname.substring(index + marker.length));
    } catch (error) {
      console.error("Could not get storage path:", error);

      return null;
    }
  };

  // --------------------------------
  // DELETE PRODUCT
  // --------------------------------

  const handleDelete = async (product) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.name}"?`,
    );

    if (!confirmed) return;

    try {
      setDeletingId(product.id);

      // 1. Get image path
      const imagePath = getStoragePath(product.image_url);

      // 2. Delete image from Supabase Storage
      if (imagePath) {
        const { error: storageError } = await supabase.storage
          .from("product-images")
          .remove([imagePath]);

        if (storageError) {
          console.error("Error deleting image:", storageError);
        }
      }

      // 3. Delete product from database
      const { error: productError } = await supabase
        .from("products")
        .delete()
        .eq("id", product.id);

      if (productError) {
        throw productError;
      }

      // 4. Remove product from UI
      setProducts((currentProducts) =>
        currentProducts.filter((item) => item.id !== product.id),
      );

      alert("Product deleted successfully.");
    } catch (error) {
      console.error("Error deleting product:", error);

      alert(
        error.message || "Something went wrong while deleting the product.",
      );
    } finally {
      setDeletingId(null);
    }
  };

  // --------------------------------
  // LOADING
  // --------------------------------

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoaderCircle className="animate-spin text-[#7D8770]" size={35} />
      </div>
    );
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-serif text-[#1E3A34]">Products</h2>

        <p className="mt-2 text-[#6E6258]">Manage your ritual products.</p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
          <p className="text-[#6E6258]">No products have been added yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              {/* Image */}

              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Details */}

              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#1E3A34]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-[#6E6258]">
                  {product?.category}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl text-[#7D8770]">£{product?.price}</p>

                  <p className="text-sm text-[#6E6258]">
                    Stock: {product?.stock}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      navigate(`/admin/productform/${product?.id}`)
                    }
                    className="rounded-full border border-[#ddd6cc] p-3 text-[#7D8770] transition hover:bg-[#F8F5EE]"
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    onClick={() => handleDelete(product)}
                    disabled={deletingId === product?.id}
                    className="rounded-full border border-red-200 p-3 text-red-500 transition hover:bg-red-50"
                  >
                    {deletingId === product.id ? (
                      <LoaderCircle size={18} className="animate-spin" />
                    ) : (
                      <Trash2 size={18} />
                    )}
                  </button>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="rounded-full border border-[#ddd6cc] p-3 text-[#7D8770] transition hover:bg-[#F8F5EE]">
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button className="flex items-center justify-center rounded-full bg-red-50 px-5 py-3 text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
