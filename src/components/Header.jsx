import { Menu, HeartHandshake } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-red-700 to-red-500 flex items-center justify-center ring-2 ring-red-400/30 group-hover:scale-105 transition-transform">
              <HeartHandshake className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-wide">
                The Game
              </p>
              <p className="text-xs text-blue-300/80">
                Help One Homeless a Day
              </p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-white/80 hover:text-white transition">Over</a>
            <a href="#challenge" className="text-white/80 hover:text-white transition">Challenge</a>
            <a href="#feed" className="text-white/80 hover:text-white transition">Moments</a>
            <a href="#join" className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-semibold shadow-lg shadow-red-600/30 transition">Doe mee</a>
          </nav>
          <button className="md:hidden text-white/80" aria-label="menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
