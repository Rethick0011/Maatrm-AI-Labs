import SectionReveal from './animations/SectionReveal';
import StaggerContainer from './animations/StaggerContainer';
import AnimatedElement from './animations/AnimatedElement';
import { productCatalog } from '../data/products';
import BillingSystemCarousel from './BillingSystemCarousel';
import CivilProjectCarousel from './CivilProjectCarousel';

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-bg-base">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4 text-center">Products</div>
        <h2 className="font-heading text-4xl font-bold text-white text-center mb-6 tracking-tighter">Products We Build</h2>
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          These products represent the type of practical business systems we build: tools that remove confusion, improve tracking, and give teams a single reliable place to manage work.
        </p>
      </SectionReveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {productCatalog.map((product) => (
            <AnimatedElement key={product.name}>
              <div className="flex h-full min-h-[620px] flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-gold">
                <div className="flex flex-1 flex-col p-8">
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-2 mb-4">{product.name}</h3>
                  <p className="text-slate-400 mb-6">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span key={feature} className="bg-bg-base px-3 py-1 rounded-full text-xs text-slate-300 border border-border">{feature}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-4 pt-2">
                    <a href="/products" className="text-gold hover:text-white font-medium">View product details</a>
                    <a href="#contact" className="text-slate-300 hover:text-gold font-medium">Contact Us</a>
                  </div>
                </div>
                <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-t border-border bg-black/25 p-4">
                  {product.name === 'Invoice Billing System' ? (
                    <BillingSystemCarousel />
                  ) : product.name === 'Civil Project Management System' ? (
                    <CivilProjectCarousel />
                  ) : (
                    <img src={product.image} alt={`${product.name} screenshot`} className="h-full w-full rounded-xl object-cover" />
                  )}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
