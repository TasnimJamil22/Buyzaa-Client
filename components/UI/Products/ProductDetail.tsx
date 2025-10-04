"use client";

import { TProduct } from "@/types"; // adjust path to your interface

interface ProductDetailProps {
  product: TProduct;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  console.log(product);
  return (
    <div className="max-w-10xl mx-auto p-6 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
        {/* Left: Product Image */}
        <div className="flex items-center justify-center bg-gray-100">
          <img
            src={product.images?.[0] || "/placeholder.jpg"}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between p-6 space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-sm text-gray-500 mt-1">
              Category: {product.category?._id}
            </p>
            <p className="text-lg text-gray-700 mt-4">{product.description}</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-indigo-600">
              ${product.price}
            </p>
            <p
              className={`mt-1 text-sm ${
                product.quantity > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.quantity > 0
                ? `In Stock (${product.quantity} available)`
                : "Out of Stock"}
            </p>
          </div>

          <button
            disabled={product.quantity <= 0}
            className="
              w-full md:w-auto
              px-6 py-3
              bg-indigo-600 text-white
              font-semibold
              rounded-lg
              shadow-md
              hover:bg-indigo-700
              disabled:bg-gray-400 disabled:cursor-not-allowed
              transition
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
