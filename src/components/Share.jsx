import { Facebook, Instagram, Share2, Video, ThumbsUp } from 'lucide-react';

export default function Share() {
  return (
    <section id="join" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Doe mee & deel je moment</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Start vandaag. Kies een klein gebaar, film kort je moment en deel het. Samen maken we hulp normaal en zichtbaar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1877F2] text-white font-semibold hover:opacity-90 transition">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black border border-white/20 text-white font-semibold hover:bg-white/10 transition">
                <Share2 className="h-4 w-4" /> TikTok
              </a>
            </div>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><Video className="h-5 w-5 text-red-500 mt-0.5" /> Film kort en vriendelijk – vraag toestemming.</li>
              <li className="flex items-start gap-3"><ThumbsUp className="h-5 w-5 text-blue-400 mt-0.5" /> Focus op kleine acties die haalbaar zijn.</li>
              <li className="flex items-start gap-3"><Share2 className="h-5 w-5 text-white mt-0.5" /> Gebruik #HelpOneHomelessADay en nomineer vrienden.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/40 to-black p-1">
              <div className="rounded-2xl overflow-hidden bg-black">
                <img src="https://images.unsplash.com/photo-1684159607944-030be9444b66?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYXJtJTIwZ2ViYWFyJTIwaW4lMjBkZSUyMHN0YWR8ZW58MHwwfHx8MTc2MzM5NjA1M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Warm gebaar in de stad" className="w-full h-80 object-cover opacity-90" />
              </div>
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 to-red-600/20 blur-2xl" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
