export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4">About Us</div>
            <h2 className="font-heading text-4xl font-bold text-white tracking-tighter mb-6">
              A technology partner for SMEs
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Maatrm AI Labs is a IT solutions studio. We work closely with business owners, operations teams, and industry professionals to convert manual processes into clean, reliable, and easy-to-use digital systems.
            </p>

          </div>

            <div className="mt-8 border-t border-border pt-6">
              <h4 className="font-heading text-xl font-semibold text-gold mb-3">Our Mission</h4>
              <p className="text-slate-400">
                To make professional-grade software and AI accessible to small and medium-scale industries through practical, scalable, and well-supported technology solutions.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
