import { Lightbulb, Camera, HeartHandshake, Share2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Maak je moment',
    text: 'Kleine daden, groot verschil: geef eten, deel tijd, luister, koop een koffie, wijs de weg.'
  },
  {
    icon: Lightbulb,
    title: 'Film & vertel',
    text: 'Leg kort vast wat je doet en waarom. Vraag toestemming en respecteer privacy.'
  },
  {
    icon: Share2,
    title: 'Deel & inspireer',
    text: 'Plaats op je socials met #HelpOneHomelessADay en tag je vrienden.'
  },
  {
    icon: HeartHandshake,
    title: 'Daag iemand uit',
    text: 'Nomineer 2 vrienden voor morgen. Samen houden we het gaande.'
  },
  {
    icon: CheckCircle2,
    title: 'Herhaal dagelijks',
    text: 'Elke dag één moment. Klein maar consequent: dat is The Game.'
  }
];

export default function Challenge() {
  return (
    <section id="challenge" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(220,38,38,0.15),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">De dagelijkse challenge</h2>
          <p className="mt-4 text-white/70">Zo doe je mee – simpel, sociaal en met een voelbare impact.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition group">
              <div className="h-11 w-11 rounded-md bg-gradient-to-br from-red-700 to-red-500 flex items-center justify-center ring-2 ring-red-400/30 group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#join" className="inline-block px-6 py-3 rounded-md bg-red-600 hover:bg-red-500 text-white font-semibold shadow-lg shadow-red-600/40 transition">Ik doe mee</a>
        </div>
      </div>
    </section>
  );
}
