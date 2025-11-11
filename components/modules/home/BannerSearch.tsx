"use client";

import { useState, FormEvent } from "react";
import { Input } from "@heroui/input";
import { SearchIcon } from "lucide-react";

interface BannerSearchProps {
  onSearch?: (query: string) => void; // 👈 typed here
}

export default function BannerSearch({ onSearch }: BannerSearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      console.log("Searching for:", query);
    }
  };

  return (
    <div className="max-w-xl mx-auto w-full px-4">
      <form onSubmit={handleSubmit} className="flex-1">
        <Input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          classNames={{
            inputWrapper:
              "bg-default-100 focus-within:ring-2 focus-within:ring-indigo-400",
            input: "text-sm",
          }}
          startContent={<SearchIcon className="text-gray-400" />}
          type="text"
        />
      </form>
    </div>
  );
}
