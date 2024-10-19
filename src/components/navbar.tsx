import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-500 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold">
              <Link href="/">Chulinxz</Link>
            </div>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>
            <Link href="/uses" className="text-white hover:text-gray-200">Uses</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <Link href="/" className="block text-white py-2">Home</Link>
            <Link href="/uses" className="block text-white py-2">Uses</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;