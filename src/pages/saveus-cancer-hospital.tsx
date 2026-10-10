import { useEffect, useRef } from 'react';
import { ArrowRight, Stethoscope, HeartHandshake, Pill, Heart, Home as HomeIcon, CheckCircle2, Lock, Activity, Users } from 'lucide-react';
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

export function SaveUsCancerHospitalPage() {
  const { reveal } = useScrollReveal();

  const goDonate = () => {
    window.location.href = `${appBase}/donate?program=cancer-hospital`;
  };

  const goDonateDollar = () => {
    window.location.href = `${appBase}/donate?amount=30&program=cancer-hospital`;
  };

  return (
    <div className="saveus-app program-page cancer-hospital-page">
      <SiteHeader onDonate={goDonate} isSubPage />
      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div className="hero-backdrop" style={{ backgroundImage: `url('/images/saveuscancerhospital.jpeg')`, backgroundPosition: 'center 30%', backgroundSize: 'cover' }} aria-hidden="true" />
          <div className="container-wide hero-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '850px' }}>
              <span className="eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold' }}>SaveUs Cancer Hospital</span>
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: '1.1', marginBottom: '0.75rem', minHeight: 'auto', color: '#fff' }}>
                SaveUs Cancer<br/>Hospital
              </h1>
              <p className="hero-intro" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.5rem', marginBottom: '0.75rem', minHeight: 'auto', fontWeight: 500 }}>
                Advanced care. Compassionate support. For a healthier tomorrow.
              </p>
              <p style={{ color: 'var(--cta-gold)', fontSize: '1.25rem', marginBottom: '2.5rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Save a life now
              </p>
              
              <div className="hero-actions">
                <button className="btn-impact-cta" onClick={goDonateDollar} data-testid="button-hero-impact-cta">
                  Your $1 a day can save a life <ArrowRight size={18} style={{ color: 'var(--gold)' }} />
                </button>
                <button className="btn btn-primary" onClick={goDonate} style={{ padding: '1rem 2.2rem', fontSize: '1.05rem', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Donate Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS / CARDS SECTION */}
        <section className="section-pad" style={{ background: 'var(--paper)' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Approach</span>
              <h2 className="section-title">Core Services & Pillars</h2>
            </div>
            
            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              <div className="mission-card reveal" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <Stethoscope size={34} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>MEDICAL CARE</h3>
                <p style={{ color: 'var(--text-muted)' }}>Free checkups, treatment & medicines.</p>
              </div>

              <div className="mission-card reveal stagger-1" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <HeartHandshake size={34} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>ELDERLY SUPPORT</h3>
                <p style={{ color: 'var(--text-muted)' }}>Care, compassion & assistance for our elderly.</p>
              </div>

              <div className="mission-card reveal stagger-2" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <Pill size={34} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>FREE MEDICINES</h3>
                <p style={{ color: 'var(--text-muted)' }}>Providing essential medicines to those in need.</p>
              </div>
              
              <div className="mission-card reveal stagger-3" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <Heart size={34} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>HEALTH FOR ALL</h3>
                <p style={{ color: 'var(--text-muted)' }}>Everyone deserves access to quality healthcare.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPARENCY SECTION */}
        <section className="section-pad" style={{ background: 'var(--pine)', color: '#fff' }}>
          <div className="container-wide">
            <div className="reveal" ref={reveal} style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem', textAlign: 'center' }}>
              <div style={{ flex: '1 1 250px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'var(--cta-gold)', marginBottom: '1rem' }}>
                  <CheckCircle2 size={30} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff', textTransform: 'uppercase' }}>100% TRANSPARENT</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Every donation makes an impact.</p>
              </div>
              <div style={{ flex: '1 1 250px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'var(--cta-gold)', marginBottom: '1rem' }}>
                  <HeartHandshake size={30} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff', textTransform: 'uppercase' }}>ZAKAT & SADAQAH</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Accepted for those in need.</p>
              </div>
              <div style={{ flex: '1 1 250px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'var(--cta-gold)', marginBottom: '1rem' }}>
                  <Lock size={30} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff', textTransform: 'uppercase' }}>SECURE DONATIONS</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Your generosity is safe with us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT STATS SECTION */}
        <section className="section-pad" style={{ background: '#ffffff' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Impact</span>
              <h2 className="section-title">Together We Stand</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              
              <div className="reveal" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Users size={44} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Patients Helped</p>
              </div>
              
              <div className="reveal stagger-1" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <HeartHandshake size={44} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Elderly Supported</p>
              </div>
              
              <div className="reveal stagger-2" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Stethoscope size={44} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Treatments Provided</p>
              </div>
              
              <div className="reveal stagger-3" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <Heart size={36} color="var(--cta-gold)" />
                  <HomeIcon size={36} color="var(--cta-gold)" />
                  <Pill size={36} color="var(--cta-gold)" />
                </div>
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Donations in Action</p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
