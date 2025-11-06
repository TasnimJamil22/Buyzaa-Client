"use client";

import BZModal from "@/components/modals/BZModal";
import { TProduct } from "@/types"; // adjust path to your interface
import CreateProductForm from "./CreateProductForm";
import UpdateProductForm from "./UpdateProductForm";
import { useUser } from "@/context/user.provider";

interface IProps {
  product: TProduct;
}

export default function ProductDetail({ product }: IProps) {
  const { user } = useUser();
  console.log(product);
  console.log(product?.category?.name);
  return (
    <div className="max-w-6xl mx-auto my-12 p-3 sm:p-10 rounded-2xl shadow-xl border border-[#f3e5ab]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Product Image */}
        <div className="flex items-center justify-center   rounded-2xl overflow-hidden shadow-inner">
          <img
            src={product.images?.[0] || "/placeholder.jpg"}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between p-4 sm:p-6 space-y-5">
          <div>
            <h1 className="text-3xl font-extrabold text-[#a17c37] tracking-tight">
              {product.name}
            </h1>
            <p className="text-sm text-gray-100 mt-1 italic">
              Category: {product?.category?.name}
            </p>
            <p className="text-lg text-gray-100 mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#c19a6b]">
              ${product.price}
            </p>
            <p
              className={`mt-2 text-sm font-medium ${
                product.quantity > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.quantity > 0
                ? `In Stock (${product.quantity} available)`
                : "Out of Stock"}
            </p>
          </div>

          {user?.role === "USER" && (
            <button
              disabled={product.quantity <= 0}
              className={`w-full md:w-auto px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 
            ${
              product.quantity <= 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-[#f0c14b] to-[#d1a652] text-white hover:from-[#d1a652] hover:to-[#a8732a] hover:shadow-lg"
            }`}
            >
              {product.quantity <= 0 ? "Out of Stock" : "🛒 Add to Cart"}
            </button>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-[#f0e6c8]" />

      {/* Update / Edit Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-full md:w-auto text-center">
          <BZModal
            buttonText="🎨 Update Product"
            body={<UpdateProductForm product={product} />}
          />
        </div>

        <div className="w-full md:w-auto text-center">
          <BZModal
            buttonText="🖌️ Edit Product Details"
            body={<UpdateProductForm product={product} />}
          />
        </div>
      </div>
    </div>
  );
}
