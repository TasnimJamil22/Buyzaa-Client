import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@heroui/react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black/95 text-white px-6">
      <div className="mb-6 flex justify-center">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-2xl">
          <AlertTriangle size={30} className="text-black" />
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-br from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
        Page Not Found
      </h1>

      <p className="text-gray-300 mb-6 text-lg text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Button className="rounded-2xl px-6 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-700 hover:opacity-90 shadow-xl">
        <Link href="/" className="w-full h-full block text-center">
          Go Back Home
        </Link>
      </Button>
    </div>
  );
}
