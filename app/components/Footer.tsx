// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-12  shadow-md">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/Images/adods.png"
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
                <Link href="/whoweare" className="text-gray-400 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/whoweare" className="text-gray-400 hover:text-black transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/whatwedo" className="text-gray-400 hover:text-black transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/ourworks" className="text-gray-400 hover:text-black transition-colors">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@addods.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Creative St, Digital City, DC 12345</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Addods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}