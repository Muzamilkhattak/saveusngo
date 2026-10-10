import { useEffect, useRef } from 'react';
import { ArrowRight, Leaf, Zap, TreePine, Cpu, Heart } from 'lucide-react';
import { SiteHeader, SiteFooter, appBase } from '@/components/layout';

function useScrollReveal() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const reveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return { reveal };
}

export function GreenEnergyPage() {
  const { reveal } = useScrollReveal();

  const goDonate = () => {
    window.location.href = `${appBase}/donate?program=green-energy`;
  };

  const goDonateDollar = () => {
    window.location.href = `${appBase}/donate?amount=30&program=green-energy`;
  };

  return (
    <div className="saveus-app program-page green-energy-page">
      <SiteHeader onDonate={goDonate} isSubPage />
      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div className="hero-backdrop" style={{ backgroundImage: `url('/images/Green Energy & AI Robotics hero bg.jpeg')`, backgroundPosition: 'center center', backgroundSize: 'cover' }} aria-hidden="true" />
          <div className="container-wide hero-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '900px' }}>
              <span className="eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold' }}>Our Future Together</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1', marginBottom: '0.75rem', minHeight: 'auto', color: '#fff', textTransform: 'uppercase' }}>
                GREEN ENERGY, PLANTATION,<br/>AI &amp; ROBOTICS
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.5rem', marginBottom: '1.75rem', minHeight: 'auto', fontWeight: 500, letterSpacing: '0.5px' }}>
                Building a sustainable future with technology &amp; nature.
              </p>
              
              <div className="hero-actions">
                <button className="btn-impact-cta" onClick={goDonateDollar} data-testid="button-hero-impact-cta">
                  $1 a day saves a life <ArrowRight size={18} style={{ color: 'var(--gold)' }} />
                </button>
                <button className="btn btn-primary" onClick={goDonate} style={{ padding: '1rem 2.2rem', fontSize: '1.05rem', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Donate Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPTION SECTION */}
        <section className="section-pad" style={{ background: 'var(--pine)', color: '#fff', position: 'relative', zIndex: 10 }}>
          <div className="container-wide reveal" ref={reveal} style={{ textAlign: 'center' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <Leaf size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, lineHeight: '1.5', marginBottom: '0' }}>
                We are committed to a cleaner, greener planet through renewable energy, massive plantation drives and AI-powered robotics for a better tomorrow.
              </h3>
            </div>
          </div>
        </section>

        {/* INITIATIVES / IMAGE CARDS SECTION */}
        <section className="section-pad" style={{ background: 'var(--paper)' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Initiatives</span>
              <h2 className="section-title">Innovating for the Planet</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              
              <div className="reveal" ref={reveal} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#fff' }}>
                <div style={{ height: '250px', backgroundImage: `url('/images/green-energy-card.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#152A49', marginBottom: '0.75rem', textTransform: 'uppercase' }}>CLEAN ENERGY</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Solar &amp; wind energy for a sustainable tomorrow.</p>
                </div>
              </div>
              
              <div className="reveal stagger-1" ref={reveal} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#fff' }}>
                <div style={{ height: '250px', backgroundImage: `url('/images/plantation-card.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#152A49', marginBottom: '0.75rem', textTransform: 'uppercase' }}>PLANTATION</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Plant more trees, restore nature, protect our planet.</p>
                </div>
              </div>

              <div className="reveal stagger-2" ref={reveal} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#fff' }}>
                <div style={{ height: '250px', backgroundImage: `url('/images/ai-robotics-card.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#152A49', marginBottom: '0.75rem', textTransform: 'uppercase' }}>AI & ROBOTICS</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Smart technology for efficiency, safety &amp; growth.</p>
                </div>
              </div>

              <div className="reveal stagger-3" ref={reveal} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#fff' }}>
                <div style={{ height: '250px', backgroundImage: `url('/images/better-future-card.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#152A49', marginBottom: '0.75rem', textTransform: 'uppercase' }}>BETTER FUTURE</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Together we create a greener, healthier world.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* IMPACT STATS SECTION */}
        <section className="section-pad" style={{ background: '#ffffff' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Impact</span>
              <h2 className="section-title">Measurable Change</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              
              <div className="reveal" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Zap size={44} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                <p style={{ color: 'var(--pine)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>Green Energy Units Generated</p>
              </div>
              
              <div className="reveal stagger-1" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <TreePine size={44} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                <p style={{ color: 'var(--pine)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>Trees Planted Worldwide</p>
              </div>
              
              <div className="reveal stagger-2" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Cpu size={44} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                <p style={{ color: 'var(--pine)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>AI & Robotics Projects In Action</p>
              </div>
              
              <div className="reveal stagger-3" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Heart size={44} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                <p style={{ color: 'var(--pine)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>Commitment to a Green & Better Future</p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
