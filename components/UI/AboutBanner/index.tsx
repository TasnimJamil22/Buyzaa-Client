import Image from "next/image";
import img from "../../../assets/aboutUs/pic3.png";

export default function AboutBanner() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden rounded-b-3xl">
      <Image
        src={img}
        alt="About Us Banner"
        fill
        className="object-cover filter brightness-90"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
          About Our Art Studio
        </h1>
        <p className="text-white text-xl max-w-3xl drop-shadow-md">
          Discover our passion for painting and creativity. Each piece is
          crafted with love and inspired by the colors of life.
        </p>
      </div>
    </section>
  );
}
