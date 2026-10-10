import { useEffect, useRef } from 'react';
import { ArrowRight, Droplet, Users, HeartPulse, Recycle, Droplets, Activity } from 'lucide-react';
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

export function CleanDrinkingWaterPage() {
  const { reveal } = useScrollReveal();

  const goDonate = () => {
    window.location.href = `${appBase}/donate?program=water`;
  };

  const goDonateDollar = () => {
    window.location.href = `${appBase}/donate?amount=30&program=water`;
  };

  return (
    <div className="saveus-app program-page clean-water-page">
      <SiteHeader onDonate={goDonate} isSubPage />
      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div className="hero-backdrop" style={{ backgroundImage: `url('/images/Clean Drinking Water hero bg.jpeg')`, backgroundPosition: 'center top' }} aria-hidden="true" />
          <div className="container-wide hero-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '700px' }}>
              <span className="eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold' }}>Our Mission</span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', lineHeight: '1.1', marginBottom: '0.75rem', minHeight: 'auto', color: '#fff' }}>Clean Drinking Water</h1>
              <p className="hero-intro" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '0.75rem', minHeight: 'auto' }}>
                Practical water access that keeps health and hope flowing. Safe water for every human and living being.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                We are committed to providing pure, clean, and safe drinking water to every community, ensuring a healthier life for all.
              </p>

              <div className="hero-actions">
                <button className="btn-impact-cta" onClick={goDonateDollar} data-testid="button-hero-impact-cta">
                  $1 a day saves a life <ArrowRight size={18} style={{ color: 'var(--gold)' }} />
                </button>
                <button className="btn btn-primary" onClick={goDonate} style={{ padding: '1rem 2.2rem', fontSize: '1rem', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Donate for Water <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section className="section-pad" style={{ background: 'var(--paper)' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Core Values</span>
              <h2 className="section-title">Life Starts With Water</h2>
            </div>

            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div className="mission-card reveal" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: '#38A169', marginBottom: '1.5rem' }}>
                  <Droplet size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>PURE & SAFE</h3>
                <p style={{ color: 'var(--text-muted)' }}>Ensuring clean and contaminant-free water for a safe environment and better hydration.</p>
              </div>

              <div className="mission-card reveal stagger-1" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: '#38A169', marginBottom: '1.5rem' }}>
                  <Users size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>FOR EVERYONE</h3>
                <p style={{ color: 'var(--text-muted)' }}>Accessible to all humans and living beings. Because water is a fundamental right, not a privilege.</p>
              </div>

              <div className="mission-card reveal stagger-2" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: '#38A169', marginBottom: '1.5rem' }}>
                  <HeartPulse size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>BETTER HEALTH</h3>
                <p style={{ color: 'var(--text-muted)' }}>Clean water today for a healthier tomorrow, reducing water-borne diseases significantly.</p>
              </div>

              <div className="mission-card reveal stagger-3" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', gridColumn: '1 / -1', justifySelf: 'center', width: '100%', maxWidth: '400px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: '#38A169', marginBottom: '1.5rem' }}>
                  <Recycle size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>SUSTAINABLE FUTURE</h3>
                <p style={{ color: 'var(--text-muted)' }}>Building sustainable water solutions that communities can manage and rely on for generations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="section-pad" style={{ background: '#ffffff' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Reach</span>
              <h2 className="section-title">Making Waves of Impact</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div className="reveal" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Droplets size={40} color="#38A169" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>water Provided Daily</p>
              </div>
              <div className="reveal stagger-1" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Users size={40} color="#38A169" style={{ margin: '0 auto 1rem auto' }} />
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Families Receiving Clean Water</p>
              </div>
              <div className="reveal stagger-2" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Activity size={40} color="#38A169" style={{ margin: '0 auto 1rem auto' }} />
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Communities Reached</p>
              </div>
              <div className="reveal stagger-3" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <HeartPulse size={40} color="#38A169" style={{ margin: '0 auto 1rem auto' }} />
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Commitment to Safe Water</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
