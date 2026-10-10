import { useEffect, useRef, useState } from 'react';
import { SiteHeader, SiteFooter } from '@/components/layout';
import {
  ArrowRight, ShieldCheck, Cpu, Rocket, Sparkles,
  HandHeart, Globe2, Radio, Heart, Leaf, Users,
  Bot, Award, Compass, Eye, CheckCircle2
} from 'lucide-react';

const appBase = import.meta.env.BASE_URL.replace(/\/$/, '');

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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
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

export function ExtraterrestrialAffairsPage() {
  const { reveal } = useScrollReveal();
  const [selectedFocus, setSelectedFocus] = useState<number | null>(null);

  const goDonate = () => {
    window.location.href = `${appBase}/donate?program=extraterrestrial-affairs`;
  };

  const goDonateDollar = () => {
    window.location.href = `${appBase}/donate?amount=30&program=extraterrestrial-affairs`;
  };

  // 6 Top Bar Features matching reference image
  const topFeatures = [
    {
      label: 'Extraterrestrial Affairs',
      icon: Eye
    },
    {
      label: 'Planetary Readiness & Disaster Preparedness',
      icon: ShieldCheck
    },
    {
      label: 'Alien / Non-Human Life Protection',
      icon: Compass
    },
    {
      label: 'Advanced Technology, AI & Robotics',
      icon: Cpu
    },
    {
      label: 'Space Vehicle Research & Development',
      icon: Rocket
    },
    {
      label: 'Peaceful Contact & Humanitarian Principles',
      icon: HandHeart
    }
  ];

  // 8 Focus Area Cards matching reference image layout and content
  const focusCards = [
    {
      id: 1,
      title: 'EXTRATERRESTRIAL AFFAIRS',
      desc: 'Researching potential life beyond Earth, monitoring space activity and studying signals, objects and phenomena.',
      image: '/images/spiral-galaxy-card.jpg',
      icon: Eye
    },
    {
      id: 2,
      title: 'PLANETARY READINESS & DISASTER PREPAREDNESS',
      desc: 'Strengthening global resilience for natural disasters, space weather and unexpected planetary threats.',
      image: '/images/coastal-defense-card.jpg',
      icon: ShieldCheck
    },
    {
      id: 3,
      title: 'ALIEN / NON-HUMAN LIFE PROTECTION',
      desc: 'Ensuring the safety, rights and peaceful coexistence of all forms of intelligent life in the universe.',
      image: '/images/alien-dna-card.jpg',
      icon: Users
    },
    {
      id: 4,
      title: 'ADVANCED TECHNOLOGY, AI & ROBOTICS',
      desc: 'Developing AI, robotics, drones and clean energy solutions for a safer, smarter and more sustainable world.',
      image: '/images/robot-ai-card.jpg',
      icon: Cpu
    },
    {
      id: 5,
      title: 'AERIAL / SPACE VEHICLE RESEARCH & DEVELOPMENT',
      desc: 'Advancing spacecraft, exploration vehicles and space infrastructure for a secure and sustainable future.',
      image: '/images/spacecraft-rocket-card.jpg',
      icon: Rocket
    },
    {
      id: 6,
      title: 'SUSTAINABLE PLANET & CLEAN ENERGY',
      desc: 'Promoting renewable energy, reforestation, clean water and environmental conservation for future generations.',
      image: '/images/solar-wind-card.jpg',
      icon: Leaf
    },
    {
      id: 7,
      title: 'HUMANITARIAN AID & GLOBAL SUPPORT',
      desc: 'Delivering food, clean water, healthcare, shelter and education to vulnerable communities worldwide.',
      image: '/images/HUMANITARIANAIDGLOBALSUPPORT.webp',
      icon: Heart
    },
    {
      id: 8,
      title: 'RESEARCH, PARTNERSHIPS & GLOBAL COOPERATION',
      desc: 'Working with governments, scientists, organizations and communities to build a better, safer tomorrow.',
      image: '/images/handshake-earth-card.jpg',
      icon: Globe2
    }
  ];

  return (
    <div className="saveus-app program-page extraterrestrial-page" style={{ background: '#f8fafc', color: '#1e293b' }}>
      <SiteHeader onDonate={goDonate} isSubPage />

      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ minHeight: '82vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div
            className="hero-backdrop"
            style={{
              backgroundImage: `url('/images/extraterrestrial-affairs.webp')`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}
            aria-hidden="true"
          />
          <div className="container-wide hero-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '880px' }}>
              <span className="eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold' }}>SAVEUS NGO</span>
              <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.8rem)', lineHeight: '1.1', marginBottom: '0.75rem', minHeight: 'auto', color: '#fff', textTransform: 'uppercase' }}>
                BUREAU OF EXTRATERRESTRIAL AFFAIRS AND PLANETARY READINESS
              </h1>
              <p className="hero-intro" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', marginBottom: '1.5rem', minHeight: 'auto', lineHeight: '1.55', fontWeight: 500 }}>
                Exploring the unknown. Protecting our planet.<br />
                Building a safer future for all.
              </p>

              {/* TWO CTA BUTTONS */}
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

        {/* 1. TOP STRIP - REFERENCE IMAGE DESIGN */}
        <div
          style={{
            background: '#0a1d37',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            position: 'relative',
            zIndex: 5
          }}
        >
          <div className="container-wide" style={{ padding: 0 }}>
            <div className="extraterrestrial-top-strip">
              {topFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1.1rem 1rem',
                      borderRight: idx < topFeatures.length - 1 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                      color: '#ffffff',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        color: '#0a1d37',
                        display: 'grid',
                        placeItems: 'center',
                        flexShrink: 0,
                        boxShadow: '0 0 12px rgba(34, 197, 94, 0.45)'
                      }}
                    >
                      <Icon size={20} strokeWidth={2.4} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        lineHeight: '1.3',
                        color: 'rgba(255, 255, 255, 0.95)',
                        letterSpacing: '0.01em'
                      }}
                    >
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. OUR MISSION SECTION - REFERENCE IMAGE 3-COLUMN LAYOUT */}
        <section
          style={{
            background: '#ffffff',
            padding: '4.5rem 0',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
          }}
        >
          <div className="container-wide">
            <div
              className="reveal extraterrestrial-mission-grid"
              ref={reveal}
            >
              {/* LEFT: SaveUs Official Emblem Logo */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: '1rem'
                }}
              >
                <img
                  src="/images/saveuslogomain.jpeg"
                  alt="SaveUs - Together For A Better Future"
                  style={{
                    maxWidth: '190px',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '12px'
                  }}
                />
              </div>

              {/* CENTER: Mission Statement with Blue Accent Bar */}
              <div style={{ padding: '0 0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '4px',
                      height: '28px',
                      background: '#1d4ed8',
                      borderRadius: '2px'
                    }}
                  />
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                      fontWeight: 800,
                      color: '#0f294a',
                      fontFamily: 'var(--app-font-display)',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase'
                    }}
                  >
                    OUR MISSION
                  </h2>
                </div>

                <p
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: '1.7',
                    color: '#334155',
                    marginBottom: '1.25rem',
                    fontWeight: 450
                  }}
                >
                  The <strong>Bureau of Extraterrestrial Affairs and Planetary Readiness</strong> is a SaveUs NGO initiative focused on exploring extraterrestrial life, preparing for planetary and space-related risks, and ensuring humanity is ready  through research, technology, cooperation and compassion.
                </p>

                <p
                  style={{
                    fontSize: '0.98rem',
                    lineHeight: '1.65',
                    color: '#475569',
                    margin: 0,
                    fontWeight: 400
                  }}
                >
                  We believe in peaceful exploration, global collaboration and the protection of all life on Earth and beyond.
                </p>
              </div>

              {/* RIGHT: Orbit Space Curve with Quote */}
              <div
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundImage: `url('/images/extraterrestrial-hero.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 40%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '2rem',
                  boxShadow: '0 16px 36px rgba(15, 41, 74, 0.16)'
                }}
              >
                {/* Subtle dark gradient overlay for text legibility */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, rgba(10, 25, 47, 0.2) 0%, rgba(10, 25, 47, 0.75) 100%)'
                  }}
                />
                <blockquote
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    margin: 0,
                    textAlign: 'right',
                    color: '#ffffff',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                    lineHeight: '1.45',
                    fontWeight: 500,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.65)'
                  }}
                >
                  &ldquo;A safer planet.<br />
                  A brighter future.<br />
                  Together.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR FOCUS AREAS SECTION - REFERENCE IMAGE CARDS DESIGN */}
        <section
          style={{
            background: '#f1f5f9',
            padding: '5rem 0',
            position: 'relative'
          }}
        >
          <div className="container-wide">
            {/* Header with horizontal lines & blue theme pills */}
            <div className="reveal" ref={reveal} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.25rem',
                  marginBottom: '0.85rem'
                }}
              >
                <span style={{ width: '80px', height: '2px', background: '#3b82f6', opacity: 0.6 }} />
                <h2
                  style={{
                    margin: 0,
                    fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#0f294a',
                    fontFamily: 'var(--app-font-display)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  OUR FOCUS AREAS
                </h2>
                <span style={{ width: '80px', height: '2px', background: '#3b82f6', opacity: 0.6 }} />
              </div>

              {/* Subtitle dots list matching reference image */}
              <p
                style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#2563eb',
                  letterSpacing: '0.5px'
                }}
              >
                Science &nbsp; • &nbsp; Humanity &nbsp; • &nbsp; Protection &nbsp; • &nbsp; Innovation &nbsp; • &nbsp; Global Collaboration
              </p>
            </div>

            {/* 8 CARDS GRID: 4 columns x 2 rows matching reference image */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {focusCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <article
                    key={card.id}
                    className={`reveal stagger-${(idx % 4) + 1}`}
                    ref={reveal}
                    style={{
                      background: '#ffffff',
                      borderRadius: '14px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      overflow: 'hidden',
                      boxShadow: '0 6px 20px rgba(15, 23, 42, 0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.28s ease, box-shadow 0.28s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(15, 41, 74, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.05)';
                    }}
                  >
                    {/* Card Thumbnail Image */}
                    <div style={{ height: '175px', overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 0.4s ease'
                        }}
                      />
                    </div>

                    {/* Card Body */}
                    <div
                      style={{
                        padding: '1.35rem 1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1
                      }}
                    >
                      {/* Icon + Title Row */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.85rem',
                          marginBottom: '0.85rem'
                        }}
                      >
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: '#0f2744',
                            color: '#ffffff',
                            display: 'grid',
                            placeItems: 'center',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          <IconComponent size={18} strokeWidth={2.2} />
                        </div>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: '0.86rem',
                            fontWeight: 800,
                            color: '#0f294a',
                            lineHeight: '1.3',
                            letterSpacing: '0.01em',
                            textTransform: 'uppercase'
                          }}
                        >
                          {card.title}
                        </h3>
                      </div>

                      {/* Card Description */}
                      <p
                        style={{
                          fontSize: '0.82rem',
                          lineHeight: '1.55',
                          color: '#64748b',
                          margin: 0,
                          flex: 1
                        }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section
          className="final-cta"
          style={{
            background: '#0a1d37',
            color: '#ffffff',
            padding: '5.5rem 0',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <div className="container-wide reveal" ref={reveal}>
            <span className="eyebrow" style={{ color: 'var(--cta-gold)', justifyContent: 'center' }}>
              JOIN THE FRONTIER
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#ffffff', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Stand with Humanity&apos;s Next Chapter.
            </h2>
            <p style={{ maxWidth: '680px', margin: '0 auto 2.5rem', color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Whether safeguarding planetary resilience, funding deep space life research, or securing food and water on Earth  your contribution powers proactive compassion.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn-impact-cta"
                onClick={goDonateDollar}
                style={{ padding: '1.1rem 2.4rem', fontSize: '1.05rem' }}
              >
                $1 a day saves a life <ArrowRight size={18} style={{ color: 'var(--gold)' }} />
              </button>
              <button
                className="btn btn-primary"
                onClick={goDonate}
                style={{ padding: '1.1rem 2.6rem', fontSize: '1.05rem', fontWeight: 'bold' }}
              >
                Support Bureau Initiatives <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
