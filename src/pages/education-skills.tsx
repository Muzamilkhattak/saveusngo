import { useEffect, useRef } from 'react';
import { ArrowRight, BookOpen, Code, Wrench, Award, Users, Building2, Globe, ShieldCheck } from 'lucide-react';
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

export function EducationSkillsPage() {
  const { reveal } = useScrollReveal();

  const goDonate = () => {
    window.location.href = `${appBase}/donate?program=education`;
  };

  const goDonateDollar = () => {
    window.location.href = `${appBase}/donate?amount=30&program=education`;
  };

  return (
    <div className="saveus-app program-page education-skills-page">
      <SiteHeader onDonate={goDonate} isSubPage />
      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div className="hero-backdrop" style={{ backgroundImage: `url('/images/education-skills-hero.jpg')`, backgroundPosition: 'center center', backgroundSize: 'cover' }} aria-hidden="true" />
          <div className="container-wide hero-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '850px' }}>
              <span className="eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold' }}>Education & Skills Development</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1', marginBottom: '0.75rem', minHeight: 'auto', color: '#fff', textTransform: 'uppercase' }}>
                Educating Today,<br />Empowering Tomorrow.
              </h1>
              <h4 style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.4rem', marginBottom: '1.75rem', minHeight: 'auto', fontWeight: 400, letterSpacing: '0.5px' }}>
                Knowledge. Skills. Opportunity. For Every Child. Everywhere.
              </h4>

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
        <section className="section-pad" style={{ background: 'var(--paper)', position: 'relative', zIndex: 10, marginTop: '-3rem', paddingTop: '5rem' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Focus Areas</span>
              <h2 className="section-title">Pathways to a Brighter Future</h2>
            </div>

            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div className="mission-card reveal" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <BookOpen size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>QUALITY EDUCATION</h3>
                <p style={{ color: 'var(--text-muted)' }}>Inclusive learning for all ages to ensure no one is left behind.</p>
              </div>

              <div className="mission-card reveal stagger-1" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <Code size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>DIGITAL SKILLS</h3>
                <p style={{ color: 'var(--text-muted)' }}>Coding, AI, robotics &amp; technology training for the modern world.</p>
              </div>

              <div className="mission-card reveal stagger-2" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <Wrench size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>VOCATIONAL TRAINING</h3>
                <p style={{ color: 'var(--text-muted)' }}>Practical skills for secure jobs &amp; sustainable livelihoods.</p>
              </div>

              <div className="mission-card reveal stagger-3" ref={reveal} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: 'var(--pine)', marginBottom: '1.5rem' }}>
                  <Award size={34} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#152A49', textTransform: 'uppercase' }}>LEADERSHIP DEVELOPMENT</h3>
                <p style={{ color: 'var(--text-muted)' }}>Building confident, ethical leaders to guide their communities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT STATS SECTION */}
        <section className="section-pad" style={{ background: '#ffffff' }}>
          <div className="container-wide">
            <div className="program-head reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">The Reach</span>
              <h2 className="section-title">Our Global Impact</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
              <div className="reveal" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Users size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Students Reached Worldwide</p>
              </div>

              <div className="reveal stagger-1" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Building2 size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Schools & Learning Centers Supported</p>
              </div>

              <div className="reveal stagger-2" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Code size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Youth Trained in Digital & Technical Skills</p>
              </div>

              <div className="reveal stagger-3" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <Globe size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Countries Impacted Globally</p>
              </div>

              <div className="reveal stagger-4" ref={reveal} style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: 'var(--paper)' }}>
                <ShieldCheck size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1rem auto' }} />

                <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Commitment to Safe Education</p>
              </div>
            </div>

            {/* DESCRIPTION SECTION */}
            <div className="reveal" ref={reveal} style={{ background: 'var(--pine)', color: '#fff', padding: '4rem 2rem', borderRadius: '24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <BookOpen size={40} color="var(--cta-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, lineHeight: '1.5', marginBottom: '0' }}>
                  We believe every individual deserves access to quality education and the skills to build a better life. Through innovative learning, vocational training, and leadership programs, we empower youth and communities to break barriers and create sustainable change.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
