import { useEffect, useRef } from 'react';
import { ArrowRight, Home as HomeIcon, Bath, Utensils, Shield, HeartHandshake, ShieldCheck, Zap, Users } from 'lucide-react';
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

export function DisasterReliefPage() {
  const { reveal } = useScrollReveal();

  const goDonate = () => {
    window.location.href = `${appBase}/donate?program=disaster-relief`;
  };

  const goDonateDollar = () => {
    window.location.href = `${appBase}/donate?amount=30&program=disaster-relief`;
  };

  return (
    <div className="saveus-app program-page disaster-relief-page">
      <SiteHeader onDonate={goDonate} isSubPage />
      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div className="hero-backdrop" style={{ backgroundImage: `url('/images/Disaster relief hero bg.jpeg')`, backgroundPosition: 'center center', backgroundSize: 'cover' }} aria-hidden="true" />
          <div className="container-wide hero-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '800px' }}>
              <span className="eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold' }}>Disaster Relief</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', marginBottom: '0.75rem', minHeight: 'auto', color: '#fff' }}>When Disaster Strikes, A Safe Home Saves Lives.</h1>
              <p className="hero-intro" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', marginBottom: '1.5rem', minHeight: 'auto', fontWeight: 500 }}>
                SaveUs builds fast, affordable, durable shelters for families who lose everything in tornadoes, storms, floods, and disasters.
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

        {/* KEY VALUES STRIP */}
        <section style={{ background: 'var(--pine)', color: '#fff', padding: '3rem 0', position: 'relative', zIndex: 10, marginTop: '-2rem' }}>
          <div className="container-wide reveal" ref={reveal} style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem', flexWrap: 'wrap', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
              <ShieldCheck size={36} color="var(--cta-gold)" /> Fast Relief
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
              <HeartHandshake size={36} color="var(--cta-gold)" /> Dignity Restored
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
              <HomeIcon size={36} color="var(--cta-gold)" /> Hope Rebuilt
            </div>
          </div>
        </section>

        {/* FEATURES / SHELTER SPECS SECTION */}
        <section className="section-pad" style={{ background: 'var(--paper)' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Shelters</span>
              <h2 className="section-title">Built for Dignity & Survival</h2>
              <p className="section-copy" style={{ margin: '0 auto' }}>Fast, local support when storms, fires, and loss turn life upside down.</p>
            </div>

            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div className="mission-card reveal" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(21, 42, 73, 0.05)', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                  <HomeIcon size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>1 BEDROOM</h3>
                <p style={{ color: 'var(--text-muted)' }}>Comfortable private sleeping space for the whole family.</p>
              </div>

              <div className="mission-card reveal stagger-1" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(21, 42, 73, 0.05)', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                  <Bath size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>1 BATHROOM</h3>
                <p style={{ color: 'var(--text-muted)' }}>Clean, safe and hygienic facilities to restore normalcy.</p>
              </div>

              <div className="mission-card reveal stagger-2" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(21, 42, 73, 0.05)', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                  <Utensils size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>KITCHEN STATION</h3>
                <p style={{ color: 'var(--text-muted)' }}>Basic cooking and storage area to provide warm meals.</p>
              </div>

              <div className="mission-card reveal stagger-3" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(21, 42, 73, 0.05)', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                  <Shield size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>BUILT FOR DISASTERS</h3>
                <p style={{ color: 'var(--text-muted)' }}>Withstands tornado, hurricane, storm, flood and more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY YOUR SUPPORT MATTERS SECTION */}
        <section className="section-pad" style={{ background: '#ffffff' }}>
          <div className="container-wide">
            <div className="reveal" ref={reveal} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>The Impact</span>
              <h2 className="section-title">Why Your Support Matters</h2>
              <p className="section-copy" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
                Every year thousands of families lose their homes to tornadoes, hurricanes, and extreme weather. Your donation today can give them shelter, safety, and a chance to rebuild.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              <div className="reveal" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <HomeIcon size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '2.5rem', color: '#152A49', marginBottom: '0.5rem' }}>1 SHELTER</h3>
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>1 Family</p>
              </div>
              <div className="reveal stagger-1" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Users size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '2.5rem', color: '#152A49', marginBottom: '0.5rem' }}>1 ACT</h3>
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Many Lives</p>
              </div>
              <div className="reveal stagger-2" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <HeartHandshake size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '2.5rem', color: '#152A49', marginBottom: '0.5rem' }}>1 DONATION</h3>
                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>A Lasting Impact</p>
              </div>
            </div>

            {/* TESTIMONIAL */}
            <div className="reveal" ref={reveal} style={{ background: 'var(--pine)', color: '#fff', padding: '4rem 2rem', borderRadius: '24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.05 }}>
                <HomeIcon size={400} />
              </div>
              <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <Zap size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, lineHeight: '1.4', fontStyle: 'italic', marginBottom: '2rem' }}>
                  "We lost our home in the tornado. SaveUs gave us a roof, and life again."
                </h3>
                <p style={{ color: 'var(--cta-gold)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>— A Family Rebuilt</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
