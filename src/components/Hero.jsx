import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Help One Homeless a Day – <span className="text-red-500">Film je moment!</span> Deel & inspireer.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Een sociale uitdaging met impact. Iedere dag een klein gebaar voor iemand op straat – warmte, aandacht, eten, of hulp. Laat het zien en motiveer anderen mee te doen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#join" className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-500 text-white font-semibold shadow-lg shadow-red-600/40 transition">
              Doe mee
            </a>
            <a href="#challenge" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 backdrop-blur">
              Hoe werkt het?
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
