import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900">All Pass</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#download" className="hover:text-gray-900 transition">Download</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a href="#get" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition">
            Get All Pass <Star className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
