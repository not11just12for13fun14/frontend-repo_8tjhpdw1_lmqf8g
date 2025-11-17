import { Heart, Quote } from 'lucide-react';

const demo = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop',
    text: 'Vandaag broodjes en thee gedeeld. Korte babbel, grote glimlach.',
    likes: 128,
    user: 'Sara'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=1200&auto=format&fit=crop',
    text: 'Handschoenen gekocht tegen de kou. Samen naar opvanginfo gekeken.',
    likes: 96,
    user: 'Jamal'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    text: 'Luisteren is soms genoeg. 10 minuten aandacht kan een dag maken.',
    likes: 211,
    user: 'Lina'
  }
];

export default function Feed() {
  return (
    <section id="feed" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Gedeelde momenten</h2>
            <p className="mt-2 text-white/70">Laat je inspireren door kleine, warme acties in de stad.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-blue-300/90">
            <Quote className="h-5 w-5" />
            <span className="text-sm">“No one has ever become poor by giving.”</span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demo.map((item) => (
            <article key={item.id} className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
              <div className="relative">
                <img src={item.img} alt="moment" className="h-56 w-full object-cover group-hover:scale-[1.02] transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <p className="text-white/90">{item.text}</p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-blue-300/90">@{item.user}</span>
                  <span className="inline-flex items-center gap-1 text-red-400/90">
                    <Heart className="h-4 w-4 fill-red-500/40" /> {item.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
