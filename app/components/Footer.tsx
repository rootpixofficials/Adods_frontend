// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/adods_white_logo.png"
              alt="Addods Logo"
              width={120}
              height={40}
              className="object-contain mb-4"
            />
            <p className="text-gray-400 text-sm">
              We are a creative digital agency dedicated to bringing your vision to life through innovative design and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/whoweare" className="text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white inline-block">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/whatwedo" className="text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white inline-block">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/ourworks" className="text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white inline-block">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: adodsofficial@gmail.com</li>
              <li>Phone: +91 92073 36182</li>
              <li>Address: 2233+R92, Kottakkal, Kerala</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Addods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
