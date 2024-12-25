import React from 'react';
import { Menu, X, CircuitBoard } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CircuitBoard className="h-8 w-8 text-blue-600" />
            <a href='/' className="text-2xl font-bold text-gray-800">Omniflow.id</a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#modules" className="text-gray-600 hover:text-blue-600">Modules</a>
            <a href="#advantages" className="text-gray-600 hover:text-blue-600">Advantages</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-600 hover:text-blue-600">Home</a>
            <a href="#modules" className="block text-gray-600 hover:text-blue-600">Modules</a>
            <a href="#advantages" className="block text-gray-600 hover:text-blue-600">Advantages</a>
            <a href="#faq" className="block text-gray-600 hover:text-blue-600">FAQ</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}