"use client";

import Image from "next/image";
import Link from "next/link";

import heroImg from "@/assets/home/hhhhh.png";
import abstractImg from "@/assets/home/abst.png";
import natureImg from "@/assets/home/nature.png";
import portraitImg from "@/assets/home/portrais.png";
import artistImg from "@/assets/home/abst.png";

export default function HomePage() {
  return (
    <main className="text-gray-800 my-12">
      {/* 🎨 Featured Collections */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="font-dancing text-6xl font-bold text-center mb-10 text-[#a17c37]">
          Featured Collections
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Abstract", img: abstractImg },
            { name: "Nature", img: natureImg },
            { name: "Portraits", img: portraitImg },
          ].map((col, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                alt={col.name}
                className="object-cover w-full h-72 transform group-hover:scale-110 transition"
                src={col.img}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Link
                  className="bg-[#d4af37] text-white px-5 py-2 rounded-lg font-medium"
                  href={`/collection/${col.name.toLowerCase()}`}
                >
                  Explore {col.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden my-12 rounded-lg">
        <Image
          fill
          alt="Art Hero"
          className="object-cover opacity-40"
          src={heroImg}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-dancing text-5xl md:text-6xl font-extrabold mb-6 text-[#a17c37] drop-shadow-lg">
            Bring Color To Your Walls
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Discover hand-crafted paintings that capture emotion, texture, and
            timeless beauty.
          </p>
          <Link
            className="px-8 py-3 bg-[#d4af37] hover:bg-[#c9a235] text-white rounded-lg font-semibold shadow-md transition"
            href="/products"
          >
            Shop Now
          </Link>
        </div>
      </section>
      {/* 🌟 meet our artists Section */}
      <section className="py-32 my-12 relative overflow-hidden">
        {/* Gentle background gradient */}
        <div className="absolute inset-0   opacity-70 -z-10" />

        {/* Elegant Heading */}
        <div className="text-center mb-16">
          <h1 className="font-dancing text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#c9a14a] via-[#d9b24e] to-[#a17c37] bg-clip-text text-transparent animate-fadeIn">
            Meet Our Artists
          </h1>
          <div className="w-32 h-[3px] bg-gradient-to-r from-[#d9b24e] to-[#a17c37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-gray-600 text-lg italic">
            “Where imagination meets emotion — and turns into timeless art.”
          </p>
        </div>

        {/* Main Content */}
        <div className=" bg-default-100 backdrop-blur-md rounded-2xl shadow-xl max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-24">
          <div className="md:w-1/2">
            <Image
              alt="Artist"
              className="rounded-2xl shadow-2xl object-cover   transition-transform duration-500"
              src={artistImg}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-dancing text-4xl font-bold text-[#a17c37] mb-4">
              The Soul Behind the Canvas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every brushstroke tells a story. Our founder,
              <span className="font-semibold text-[#a17c37]">Tara</span>,
              captures the depth of emotions and the elegance of color harmony.
              Her art is a journey of creativity inspired by golden sunsets,
              heartfelt memories, and the gentle rhythm of life.
            </p>
            <Link
              className="px-6 py-3 bg-gradient-to-r from-[#c9a14a] to-[#a17c37] hover:from-[#a17c37] hover:to-[#8b6d2f] text-white rounded-lg shadow-lg font-medium transition-all"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="font-dancing text-6xl font-bold text-[#a17c37] mb-10">
          What Our Collectors Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Absolutely stunning artwork! The details and textures are breathtaking.",
              name: "Sophia M.",
            },
            {
              quote:
                "The painting arrived beautifully packaged. It completely transformed my living room!",
              name: "David L.",
            },
            {
              quote:
                "Elegant, emotional, and timeless — exactly what I was looking for.",
              name: "Rina K.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="   shadow-md rounded-xl p-6 border border-[#f4e2b9]"
            >
              <p className="text-gray-500 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold text-[#a17c37]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💌 Newsletter */}
      <section className="bg-default-100 py-16 text-center rounded-lg px-4">
        <h2 className="font-dancing text-3xl font-bold text-[#a17c37] mb-4">
          Join Our Art Community
        </h2>
        <p className="text-gray-600 mb-8">
          Get updates on new paintings and exclusive offers.
        </p>
        <div className="flex justify-center gap-4 max-w-md mx-auto">
          <input
            className="flex-1 px-4 py-3 rounded-lg border border-[#e6d5aa] focus:outline-none"
            placeholder="Enter your email"
            type="email"
          />
          <button className="px-6 py-3 bg-[#d4af37] hover:bg-[#c9a235] text-white font-medium rounded-lg transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* 🖼️ Footer */}
      <footer className=" py-10 text-center border-t border-[#f4e2b9]">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Artistry by Tara. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-[#a17c37]">
          <Link href="#">Instagram</Link>
          <Link href="#">Pinterest</Link>
          <Link href="#">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
