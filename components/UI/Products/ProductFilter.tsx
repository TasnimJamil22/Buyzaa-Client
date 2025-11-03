"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/UI/Products";
import { getAllProducts } from "@/services/Product";
import { Input, Select, SelectItem } from "@heroui/react";
import { getAllCategories } from "@/services/Category";
import { TCategory } from "@/types";

interface ProductFilterProps {
  categories: TCategory[];
}
export default function ProductFilter({ categories }: ProductFilterProps) {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      const res = await getAllProducts(); // { success, messagee, data }
      setProducts(res.data || []);
      setFilteredProducts(res.data || []);
    }
    fetchProducts();
  }, []);

  // Filter products based on search & category
  //👉 This runs automatically whenever something inside the dependency array ([search, categoryFilter, products]) changes.
  //So, if:
  //user types in the search box → search changes
  //user selects a category → categoryFilter changes
  //products are fetched from API → products changes
  //then this useEffect will run again.
  useEffect(() => {
    //👉 Start with all products (the full list).
    //We’ll store filtered results step by step in this temp array.
    let temp = products;
    //👉 If there’s any text in the search box:

    //Convert both the product name and search text to lowercase (so it’s case-insensitive)

    //Keep only products whose name includes that search word.
    if (search) {
      temp = temp.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    //👉 If the user selected a specific category:
    //Keep only products whose category field matches the selected category ID.

    //If categoryFilter is empty (""), then it skips this block — meaning all categories are shown.

    if (categoryFilter) {
      temp = temp.filter((p) => p.category?._id === categoryFilter);
    }
    //👉 Finally, update the state with the filtered list.
    //Now your UI re-renders and displays only the matching products.
    setFilteredProducts(temp);
  }, [search, categoryFilter, products]); //👉 This tells React to re-run this filtering whenever any of these values change.

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Products</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
          className="flex-1 max-w-md" // max width 28rem
          // className="w-full md:w-64" // full width on mobile, 16rem on desktop
        />
        <select
          className="border rounded p-2"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories?.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-center">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
