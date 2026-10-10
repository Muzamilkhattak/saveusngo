import { useEffect, useRef } from 'react';
import { ArrowRight, Users, Utensils, HeartHandshake, Globe, Activity, Heart, CheckCircle2 } from 'lucide-react';
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

export function FeedTheHungryPage() {
  const { reveal } = useScrollReveal();

  const goDonate = () => {
    window.location.href = `${appBase}/donate?program=nutrition`;
  };

  const goDonateDollar = () => {
    window.location.href = `${appBase}/donate?amount=30&program=nutrition`;
  };

  return (
    <div className="saveus-app program-page feed-hungry-page">
      <SiteHeader onDonate={goDonate} isSubPage />
      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div className="hero-backdrop" style={{ backgroundImage: `url('/images/Feed the hunger by save us.jfif')`, backgroundPosition: 'center top' }} aria-hidden="true" />
          <div className="container-wide hero-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '600px' }}>
              <span className="eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold' }}>Our Mission</span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', lineHeight: '1.1', marginBottom: '0.75rem', minHeight: 'auto', color: '#fff' }}>Feed the Hungry</h1>
              <p className="hero-intro" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '1.5rem', minHeight: 'auto' }}>
                Food boxes and neighborhood kitchens for families facing an empty cupboard.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: '#fff', fontSize: '1.1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--cta-gold)" /> Serving All: Children, Women & Elderly</li>
              </ul>

              <div className="hero-actions">
                <button className="btn-impact-cta" onClick={goDonateDollar} data-testid="button-hero-impact-cta">
                  $1 a day saves a life <ArrowRight size={18} style={{ color: 'var(--gold)' }} />
                </button>
                <button className="btn btn-primary" onClick={goDonate} style={{ padding: '1rem 2.2rem', fontSize: '1rem', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Donate Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section className="section-pad" style={{ background: 'var(--paper)' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Core Values</span>
              <h2 className="section-title">Nourishing Communities</h2>
            </div>

            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div className="mission-card reveal" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(214, 158, 46, 0.1)', color: 'var(--cta-gold)', marginBottom: '1.5rem' }}>
                  <Users size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>Serving All: Children, Women & Elderly</h3>
                <p style={{ color: 'var(--text-muted)' }}>Ensuring no vulnerable group is left behind. We provide targeted food assistance to those who need it most.</p>
              </div>

              <div className="mission-card reveal stagger-1" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(214, 158, 46, 0.1)', color: 'var(--cta-gold)', marginBottom: '1.5rem' }}>
                  <Utensils size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>Nutritious Meals: Healthy Food for a Better Life</h3>
                <p style={{ color: 'var(--text-muted)' }}>Delivering high-quality, nutritious meals designed to support long-term health and child development.</p>
              </div>

              <div className="mission-card reveal stagger-2" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(214, 158, 46, 0.1)', color: 'var(--cta-gold)', marginBottom: '1.5rem' }}>
                  <HeartHandshake size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>No Discrimination: Every Human, Every Life Matters</h3>
                <p style={{ color: 'var(--text-muted)' }}>Our food distribution programs operate on the principle of absolute equality, serving everyone regardless of background.</p>
              </div>

              <div className="mission-card reveal stagger-3" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(214, 158, 46, 0.1)', color: 'var(--cta-gold)', marginBottom: '1.5rem' }}>
                  <Globe size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>Global Impact: Together We Can End Hunger</h3>
                <p style={{ color: 'var(--text-muted)' }}>Uniting communities and donors worldwide to build sustainable food security networks for the future.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="section-pad" style={{ background: '#ffffff' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Reach</span>
              <h2 className="section-title">Measurable Impact</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div className="reveal" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Utensils size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Meals Served</p>
              </div>
              <div className="reveal stagger-1" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Heart size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Families Supported</p>
              </div>
              <div className="reveal stagger-2" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Users size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Communities Reached</p>
              </div>
              <div className="reveal stagger-3" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Activity size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Donations in Action</p>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS & IMAGE SECTION */}
        <section className="section-pad" style={{ background: 'var(--paper)' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div className="reveal" ref={reveal}>
                <span className="eyebrow">Program Details</span>
                <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Eradicating Hunger, One Community at a Time</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Hunger is not just a lack of food; it's a barrier to education, health, and economic stability. By setting up neighborhood kitchens and delivering comprehensive food boxes to the most vulnerable areas, we tackle this crisis head-on.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Our approach goes beyond immediate relief. We source ingredients locally where possible, empowering local farmers while ensuring that every meal we serve is culturally appropriate and deeply nutritious. We believe in providing sustenance with dignity.
                </p>
                <button className="btn btn-primary" onClick={goDonate}>
                  Join the Fight Against Hunger <ArrowRight size={16} />
                </button>
              </div>
              <div className="reveal stagger-1" ref={reveal} style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src="/images/community-2.jpg" alt="Feeding the community" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
