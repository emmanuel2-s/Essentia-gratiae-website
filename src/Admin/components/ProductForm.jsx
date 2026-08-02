import { useState } from "react";
import { supabase } from "../../../libs/supabase";
import { createSlug } from "../utils/createSlug";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../../utils/toast";
import { notifyWarning } from "../../utils/toast";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);
  const [size, setSize] = useState("");
  const [scent, setScent] = useState("");

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  // Handle navigation
  const navigate = useNavigate();

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    // Create preview
    const imagePreview = URL.createObjectURL(file);
    setPreview(imagePreview);
  };

  // Upload image to Supabase
  const uploadImage = async () => {
    if (!image) return null;

    // Create unique file name
    const fileExt = image.name.split(".").pop();

    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;

    const filePath = `products/${fileName}`;

    // Upload file
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(filePath, image, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      notifyError(uploadError);
      throw uploadError;
    }

    // Get public URL
    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  // Add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !category || !stock || !image) {
      notifyWarning("Please fill in all fields and select an image.");
      return;
    }

    try {
      setLoading(true);

      // 1. Create slug
      const slug = createSlug(name);

      // 2. Upload image
      const imageUrl = await uploadImage();

      // 3. Insert product into database
      const { data, error } = await supabase
        .from("products")
        .insert([
          {
            name,
            slug,
            price: Number(price),
            category,
            stock: Number(stock),
            size,
            scent,
            image_url: imageUrl,
          },
        ])
        .select();

      if (error) {
        notifyError("Error adding product:", error);
        throw error;
      }

      console.log("Product added successfully:", data);

      notifySuccess("Product added successfully!");
      navigate("/admin/dashboard");

      // Reset form
      setName("");
      setPrice("");
      setCategory("");
      setStock("");
      setScent("");
      setSize("");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error:", error);
      notifyError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto rounded-3xl bg-white p-8 shadow-lg mt-20">
      <div className="flex justify-between items-center">
        <h2 className="mb-8 text-3xl font-serif text-[#1E3A34]">
          Add New Product
        </h2>
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center justify-center gap-2 rounded-full bg-[#1E3A34] cursor-pointer px-6 py-3 text-white transition hover:bg-[#142822]"
        >
          <MoveLeft size={18} />
          Back
        </button>{" "}
      </div>

      <form
        onSubmit={handleSubmit}
        className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Product Name */}
        <div className="">
          <label className="mb-2 block text-sm font-medium">Product Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Stillness Candle"
            className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#7d8770]"
          />
        </div>

        {/* Price */}
        <div className="">
          <label className="mb-2 block text-sm font-medium">Price</label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="34"
            className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#7d8770]"
          />
        </div>

        {/* Category */}
        <div className="">
          <label className="mb-2 block text-sm font-medium">Category</label>

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Candles"
            className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#7d8770]"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="mb-2 block text-sm font-medium">Stock</label>

          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="20"
            className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#7d8770]"
          />
        </div>
        {/* size */}
        <div>
          <label className="mb-2 block text-sm font-medium">Size</label>

          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="1/4"
            className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#7d8770]"
          />
        </div>

        {/* Scent */}
        <div>
          <label className="mb-2 block text-sm font-medium">Scent</label>

          <input
            type="text"
            value={scent}
            onChange={(e) => setScent(e.target.value)}
            placeholder="Vanilla bliss"
            className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#7d8770]"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Product Image
          </label>

          <input
            type="file"
            accept="image/png, image/jpeg, image/webp"
            onChange={handleImageChange}
            className="w-full rounded-xl border border-gray-200 p-4"
          />
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mt-4">
            <p className="mb-3 text-sm text-gray-500">Image Preview</p>

            <img
              src={preview}
              alt="Product preview"
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-[#1E3A34] px-6 py-4 text-white transition hover:bg-[#142822] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Uploading Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
