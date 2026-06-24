import { productCatalog } from '../data/products';
import BillingSystemCarousel from '../components/BillingSystemCarousel';
import CivilProjectCarousel from '../components/CivilProjectCarousel';

export default function ProductsPage() {
  return (
    <main className="pt-32 pb-24 bg-bg-base">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4 text-center">Products</div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white text-center mb-6 tracking-tighter">
          Business products built for real operations
        </h1>
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          Explore ready-to-adapt systems from Maatrm AI Labs. Each product can be tailored around your team, workflow, approvals, reports, and AI automation needs.
        </p>

        <div className="space-y-10">
          {productCatalog.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-gold">
              <div className="p-8 lg:p-10">
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">{product.category}</span>
                <h2 className="font-heading text-3xl font-bold text-white mt-3 mb-4">{product.name}</h2>
                <p className="text-slate-400 mb-6 max-w-4xl">{product.description}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                  {product.features.map((feature) => (
                    <div key={feature} className="rounded-lg border border-border bg-bg-base px-4 py-3 text-slate-300">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/#contact" className="bg-gradient-to-r from-gold-soft to-gold text-black px-6 py-3 rounded-full font-bold text-center hover:scale-[1.01] transition-all">
                    Contact Us
                  </a>
                  <a href="/#products" className="border border-border text-white px-6 py-3 rounded-full font-bold text-center hover:border-gold hover:text-gold transition-all">
                    View Homepage Products
                  </a>
                </div>
              </div>
              <div className="flex min-h-[320px] w-full items-center justify-center overflow-hidden border-t border-border bg-black/30 p-4 sm:p-6">
                {product.name === 'Invoice Billing System' ? (
                  <BillingSystemCarousel />
                ) : product.name === 'Civil Project Management System' ? (
                  <CivilProjectCarousel />
                ) : (
                  <img
                    src={product.image}
                    alt={`${product.name} screenshot`}
                    className="aspect-[16/9] w-full rounded-xl border border-border object-cover shadow-2xl"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
