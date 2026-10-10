import { useEffect, useRef } from 'react';
import { ArrowRight, Stethoscope, Users, Pill, Heart, ShieldCheck, HeartHandshake, Lock, Activity } from 'lucide-react';
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

export function MedicalElderlyCarePage() {
  const { reveal } = useScrollReveal();

  const goDonate = () => {
    window.location.href = `${appBase}/donate?program=medical`;
  };

  const goDonateDollar = () => {
    window.location.href = `${appBase}/donate?amount=30&program=medical`;
  };

  return (
    <div className="saveus-app program-page medical-elderly-page">
      <SiteHeader onDonate={goDonate} isSubPage />
      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div className="hero-backdrop" style={{ backgroundImage: `url('/images/medical_care_1787912195618.jpg')`, backgroundPosition: 'center top' }} aria-hidden="true" />
          <div className="container-wide hero-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '700px' }}>
              <span className="eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold' }}>Our Mission</span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', lineHeight: '1.1', marginBottom: '0.75rem', minHeight: 'auto', color: '#fff' }}>Mental Health & Elderly Care</h1>
              <p className="hero-intro" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '1.5rem', minHeight: 'auto' }}>
                Healthcare, support & dignity for all ages.
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

        {/* PILLARS SECTION */}
        <section className="section-pad" style={{ background: 'var(--paper)' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Core Values</span>
              <h2 className="section-title">Compassionate Care For All</h2>
            </div>

            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div className="mission-card reveal" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(229, 62, 62, 0.1)', color: '#E53E3E', marginBottom: '1.5rem' }}>
                  <Stethoscope size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>MEDICAL CARE</h3>
                <p style={{ color: 'var(--text-muted)' }}>Free checkups, treatment & medicines.</p>
              </div>

              <div className="mission-card reveal stagger-1" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(229, 62, 62, 0.1)', color: '#E53E3E', marginBottom: '1.5rem' }}>
                  <Users size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>ELDERLY SUPPORT</h3>
                <p style={{ color: 'var(--text-muted)' }}>Care, compassion & assistance for our elderly.</p>
              </div>

              <div className="mission-card reveal stagger-2" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(229, 62, 62, 0.1)', color: '#E53E3E', marginBottom: '1.5rem' }}>
                  <Pill size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>FREE MEDICINES</h3>
                <p style={{ color: 'var(--text-muted)' }}>Providing essential medicines to those in need.</p>
              </div>

              <div className="mission-card reveal stagger-3" ref={reveal} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(229, 62, 62, 0.1)', color: '#E53E3E', marginBottom: '1.5rem' }}>
                  <Heart size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49' }}>Mental Health PTHD and Elderly Care</h3>
                <p style={{ color: 'var(--text-muted)' }}>Everyone deserves access to quality healthcare.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="section-pad" style={{ background: '#ffffff' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Guarantee</span>
              <h2 className="section-title">Giving With Confidence</h2>
            </div>

            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
              <div className="mission-card reveal" ref={reveal} style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#fff', color: '#3182ce', marginBottom: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <ShieldCheck size={28} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#152A49' }}>100% TRANSPARENT</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Every donation makes an impact.</p>
              </div>

              <div className="mission-card reveal stagger-1" ref={reveal} style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#fff', color: '#3182ce', marginBottom: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <HeartHandshake size={28} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#152A49' }}>ZAKAT & SADAQAH</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Accepted for those in need.</p>
              </div>

              <div className="mission-card reveal stagger-2" ref={reveal} style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#fff', color: '#3182ce', marginBottom: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <Lock size={28} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#152A49' }}>SECURE DONATIONS</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Your generosity is safe with us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="section-pad" style={{ background: 'var(--paper)' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Reach</span>
              <h2 className="section-title">Measurable Impact</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div className="reveal" ref={reveal} style={{ textAlign: 'center', padding: '2rem', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Stethoscope size={40} color="#E53E3E" style={{ margin: '0 auto 1rem auto' }} />
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Patients Helped</p>
              </div>
              <div className="reveal stagger-1" ref={reveal} style={{ textAlign: 'center', padding: '2rem', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Users size={40} color="#E53E3E" style={{ margin: '0 auto 1rem auto' }} />
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Elderly Supported</p>
              </div>
              <div className="reveal stagger-2" ref={reveal} style={{ textAlign: 'center', padding: '2rem', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Pill size={40} color="#E53E3E" style={{ margin: '0 auto 1rem auto' }} />
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Treatments Provided</p>
              </div>
              <div className="reveal stagger-3" ref={reveal} style={{ textAlign: 'center', padding: '2rem', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <Activity size={40} color="#E53E3E" style={{ margin: '0 auto 1rem auto' }} />

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
