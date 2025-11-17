import { Facebook, Instagram, Mail, Phone, HeartHandshake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white/80">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-gradient-to-br from-red-700 to-red-500 flex items-center justify-center ring-2 ring-red-400/30">
                <HeartHandshake className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-white">The Game</span>
            </div>
            <p className="mt-3 text-sm">Help One Homeless a Day – samen bouwen we aan warme steden.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@thegame.org</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +31 6 1234 5678</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Volg ons</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold">Meedoen</h4>
            <p className="mt-3 text-sm">Begin vandaag met een klein gebaar. Deel je moment en inspireer je netwerk.</p>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} The Game – Help One Homeless a Day. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
