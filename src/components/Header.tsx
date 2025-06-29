import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CircuitBoard } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <CircuitBoard className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Omniflow.id</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/modules/hris" className="text-gray-600 hover:text-blue-600">HRIS</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/modules/hris" className="block text-gray-600 hover:text-blue-600">HRIS</Link>
            <Link to="/blog" className="block text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}