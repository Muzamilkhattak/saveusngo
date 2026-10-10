import { useEffect, useRef } from 'react';
import { ArrowRight, Bone, Stethoscope, Home as HomeIcon, Heart } from 'lucide-react';
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

export function AnimalWelfarePage() {
  const { reveal } = useScrollReveal();

  const goDonate = () => {
    window.location.href = `${appBase}/donate?program=animal-welfare`;
  };

  const goDonateDollar = () => {
    window.location.href = `${appBase}/donate?amount=30&program=animal-welfare`;
  };

  return (
    <div className="saveus-app program-page animal-welfare-page">
      <SiteHeader onDonate={goDonate} isSubPage />
      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div className="hero-backdrop" style={{ backgroundImage: `url('/images/animal-welfare-hero.jpg')`, backgroundPosition: 'center center', backgroundSize: 'cover' }} aria-hidden="true" />
          <div className="container-wide hero-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '800px' }}>
              <span className="eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold' }}>Animal Welfare</span>
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1', marginBottom: '0.75rem', minHeight: 'auto', color: '#fff', textTransform: 'uppercase' }}>
                ANIMAL<br />WELFARE
              </h1>
              <p className="hero-intro" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.35rem', marginBottom: '1.5rem', minHeight: 'auto', fontWeight: 500, lineHeight: '1.6' }}>
                We provide nutritious food, medical treatment, shelter, and love to animals in need. Every life matters.
              </p>

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

        {/* PILLARS / CARDS SECTION */}
        <section className="section-pad" style={{ background: 'var(--paper)', position: 'relative', zIndex: 10, marginTop: '-2rem', paddingTop: '5rem' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Mission</span>
              <h2 className="section-title">Care & Compassion For All</h2>
            </div>

            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div className="mission-card reveal" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <Bone size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>FOOD & NUTRITION</h3>
                <p style={{ color: 'var(--text-muted)' }}>Nutritious food for stray &amp; rescued animals to keep them healthy.</p>
              </div>

              <div className="mission-card reveal stagger-1" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <Stethoscope size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>MEDICAL CARE</h3>
                <p style={{ color: 'var(--text-muted)' }}>Vaccination, emergency treatment, and regular health checkups.</p>
              </div>

              <div className="mission-card reveal stagger-2" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <HomeIcon size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>SHELTER & SAFETY</h3>
                <p style={{ color: 'var(--text-muted)' }}>Safe shelter, warmth, and a loving environment to call home.</p>
              </div>

              <div className="mission-card reveal stagger-3" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <Heart size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>LOVE & COMPASSION</h3>
                <p style={{ color: 'var(--text-muted)' }}>Every animal deserves care, kindness, and a second chance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT IMAGES CARDS SECTION */}
        <section className="section-pad" style={{ background: '#ffffff' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Impact</span>
              <h2 className="section-title">Lives We Touch</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

              <div className="reveal" ref={reveal} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#fff' }}>
                <div style={{ height: '220px', backgroundImage: `url('/images/animal-fed.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#152A49', margin: 0 }}>Animals Fed Every Month</h3>
                </div>
              </div>

              <div className="reveal stagger-1" ref={reveal} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#fff' }}>
                <div style={{ height: '220px', backgroundImage: `url('/images/animaltreated.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#152A49', margin: 0 }}>Animals Treated & Vaccinated</h3>
                </div>
              </div>

              <div className="reveal stagger-2" ref={reveal} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#fff' }}>
                <div style={{ height: '220px', backgroundImage: `url('/images/animal-sheltered.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#152A49', margin: 0 }}>Animals Sheltered & Protected</h3>
                </div>
              </div>

              <div className="reveal stagger-3" ref={reveal} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#fff' }}>
                <div style={{ height: '220px', backgroundImage: `url('/images/cowsandhorses.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#152A49', margin: 0 }}>Commitment to Animal Welfare</h3>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
