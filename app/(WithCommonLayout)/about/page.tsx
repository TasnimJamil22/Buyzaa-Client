// import { title } from "@/components/primitives";

// export default function AboutPage() {
//   return (
//     <div>
//       <h1 className={title()}>About</h1>

//     </div>
//   );
// }
"use client";

import Image from "next/image";

import img1 from "../../../assets/aboutUs/pic1.png";
import img2 from "../../../assets/aboutUs/pic2.png";
import img4 from "../../../assets/aboutUs/pic4.png";
import img5 from "../../../assets/aboutUs/pic5.png";
import img6 from "../../../assets/aboutUs/pic6.png";

import AboutBanner from "@/components/UI/AboutBanner";

export default function About() {
  return (
    <div className=" ">
      <AboutBanner />
      <section className="relative   py-24 lg:py-32 overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute -top-20 -left-20 w-60 h-60   rounded-full opacity-30 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72   rounded-full opacity-20 blur-3xl animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6 text-default-500">
              About <span className="text-yellow-600">Us</span>
            </h2>
            <p className="text-default-500 text-lg md:text-xl leading-relaxed">
              Our painting studio is a sanctuary of creativity, where each
              brushstroke brings ideas to life. We believe in crafting artworks
              that are not only beautiful but also evoke emotions and tell a
              story.
            </p>
            <p className="text-default-400 text-lg md:text-xl leading-relaxed">
              Inspired by nature, color, and imagination, our creations are
              gentle yet striking — perfect for art lovers who appreciate subtle
              elegance and refined beauty.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <button className="px-8 py-3 bg-yellow-600 text-white rounded-lg font-semibold shadow-md hover:bg-orange-200 transition">
                Explore Gallery
              </button>
              <button className="px-8 py-3 border border-amber-200 text-amber-800 rounded-lg font-semibold hover:bg-yellow-600 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Image / Card Section */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 grid grid-cols-2 gap-4">
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
              <Image
                fill
                alt="Art Example"
                className="object-cover"
                src={img1} // main image
              />
            </div>
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
              <Image
                fill
                alt="Art Example"
                className="object-cover"
                src={img4} // secondary image
              />
            </div>
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
              <Image
                fill
                alt="Art Example"
                className="object-cover"
                src={img5} // another art
              />
            </div>
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
              <Image
                fill
                alt="Art Example"
                className="object-cover"
                src={img6} // another art
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center bg-default-100 rounded-lg">
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            fill
            alt="Our Story Image"
            className="object-cover"
            src={img2}
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-default-500">
            Our <span className="text-yellow-600">Story</span>
          </h2>
          <p className="text-default-600 mb-4 leading-relaxed">
            Founded in 2024, we focus on creating digital products that make a
            difference. Our team of designers, developers, and strategists work
            together to build reliable, beautiful, and user-friendly solutions.
          </p>
          <p className="text-default-500 leading-relaxed">
            From ideation to deployment, we emphasize quality, performance, and
            aesthetics to exceed client expectations.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className=" py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-default-500">
            Our <span className="text-yellow-600">Values</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="border bg-default-100 p-10 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-yellow-600 text-2xl font-semibold mb-4 text-gray-900">
                Innovation
              </h3>
              <p className="text-default-500 leading-relaxed">
                We embrace new ideas and technologies to deliver creative,
                forward-thinking solutions.
              </p>
            </div>
            <div className="border bg-default-100 p-10 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-yellow-600 text-2xl font-semibold mb-4 text-gray-900">
                Integrity
              </h3>
              <p className="text-default-500 leading-relaxed">
                Transparency and honesty are core to everything we do, ensuring
                trust with our clients.
              </p>
            </div>
            <div className="border bg-default-100 p-10 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-yellow-600 text-2xl font-semibold mb-4 text-gray-900">
                Excellence
              </h3>
              <p className="text-default-500 leading-relaxed">
                Our focus is on delivering high-quality results, exceeding
                expectations consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-default-500">
          Meet Our <span className="text-yellow-600">Team</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Team Member */}
          <div className=" border p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image
                alt="Team member"
                className="object-cover"
                height={144}
                src="/team1.jpg"
                width={144}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-default-700">
              Jane Doe
            </h3>
            <p className="text-orange-800 mb-3">Lead Developer</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Jane creates beautiful, functional front-end experiences and
              ensures top-notch UX.
            </p>
          </div>

          <div className=" border p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image
                alt="Team member"
                className="object-cover"
                height={144}
                src="/team2.jpg"
                width={144}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-default-700">
              John Smith
            </h3>
            <p className="text-orange-800 mb-3">Backend Engineer</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              John ensures the server-side is secure, scalable, and
              high-performance.
            </p>
          </div>

          <div className=" border p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image
                alt="Team member"
                className="object-cover border"
                height={144}
                src="/team3.jpg"
                width={144}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-default-700">
              Alice Lee
            </h3>
            <p className="text-orange-800 mb-3">Product Manager</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Alice coordinates projects efficiently, ensuring timely delivery
              and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" border rounded-lg py-20 text-center">
        <h2 className="text-4xl font-bold mb-16 text-center text-default-500">
          Join <span className="text-yellow-600">Us</span>
        </h2>
        <p className="mb-6 text-default-400 p-2 text-lg">
          We are always looking for talented individuals to help us create
          amazing products.
        </p>
        <button className="px-8 py-3 bg-yellow-600 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
