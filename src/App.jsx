import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Share from './components/Share';
import Feed from './components/Feed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <section id="about" className="bg-black py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold">The Game: elke dag één warm gebaar</h2>
                <p className="mt-4 text-white/80">
                  The Game is een sociale uitdaging die kleine acties groot maakt. Iedere dag help je
                  één persoon op straat – eten, aandacht, kleding, tips of doorverwijzing. Je filmt kort je moment,
                  deelt het op je socials en nomineert twee vrienden. Zo bouwen we een zichtbare beweging vol warme,
                  stedelijke vibes en echte impact.
                </p>
              </div>
              <div>
                <div className="rounded-2xl border border-white/10 p-1 bg-gradient-to-br from-blue-900/40 to-black">
                  <div className="rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1630521733800-ba13e5e45c17?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVcmJhbiUyMGhlbHAlMjBtb21lbnR8ZW58MHwwfHx8MTc2MzM5NjA1NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Urban help moment" className="w-full h-80 object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Challenge />
        <Share />
        <Feed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
