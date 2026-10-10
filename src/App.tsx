import { useEffect, useRef, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { FeedTheHungryPage } from '@/pages/feed-the-hungry';
import { CleanDrinkingWaterPage } from '@/pages/clean-drinking-water';
import { MedicalElderlyCarePage } from '@/pages/medical-elderly-care';
import { DisasterReliefPage } from '@/pages/disaster-relief';
import { EducationSkillsPage } from '@/pages/education-skills';
import { AnimalWelfarePage } from '@/pages/animal-welfare';
import { SaveUsCancerHospitalPage } from '@/pages/saveus-cancer-hospital';
import { GreenEnergyPage } from '@/pages/green-energy';
import { ExtraterrestrialAffairsPage } from '@/pages/extraterrestrial-affairs';
import { SiteHeader, SiteFooter } from '@/components/layout';

import {
  ArrowRight, BadgeCheck, BookOpen, Check, ChevronLeft, ChevronRight,
  Droplets, FileCheck2, Heart, HeartHandshake, HandHeart, ShieldCheck,
  Sprout, Stethoscope, Users, Utensils, Zap, Cpu, Globe, Building2,
  Sparkles, CheckCircle2, Clock, Plane, TreePine, Award, Eye, Bot,
  ShieldAlert, Truck, Wind, Lock, GraduationCap, Send,
  Phone, PawPrint, Target, TrendingUp, Youtube, Rocket, Mail, Hospital
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();
const appBase = import.meta.env.BASE_URL.replace(/\/$/, '');
const homeHref = `${appBase}/`;

function AlienUfoIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* UFO / Saucer at top right */}
      <g transform="rotate(-18 24.5 7)">
        <ellipse cx="24.5" cy="7" rx="5.5" ry="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M22.5 6 C22.5 4, 26.5 4, 26.5 6" stroke="currentColor" strokeWidth="1.6" />
        <line x1="20.5" y1="7.2" x2="28.5" y2="7.2" stroke="currentColor" strokeWidth="1.1" opacity="0.6" />
      </g>

      {/* Alien Head Silhouette */}
      <path
        d="M13.5 7.5 C6.8 7.5, 3.8 13.5, 3.8 19 C3.8 24.5, 9.2 29, 13.5 29 C17.8 29, 23.2 24.5, 23.2 19 C23.2 13.5, 20.2 7.5, 13.5 7.5 Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Tilted Almond Alien Eyes */}
      <ellipse
        cx="8.8"
        cy="18"
        rx="2"
        ry="3.5"
        transform="rotate(-20 8.8 18)"
        fill="currentColor"
        stroke="none"
      />
      <ellipse
        cx="18.2"
        cy="18"
        rx="2"
        ry="3.5"
        transform="rotate(20 18.2 18)"
        fill="currentColor"
        stroke="none"
      />

      {/* Nostril Dots */}
      <circle cx="12.2" cy="23.5" r="0.65" fill="currentColor" />
      <circle cx="14.8" cy="23.5" r="0.65" fill="currentColor" />

      {/* Subtle Mouth line */}
      <path d="M12 26 Q13.5 26.7 15 26" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (heroPaused || !heroVisible) return;
    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [heroPaused, heroVisible]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const node = entry.target as HTMLElement;
          if (node.dataset.counter === 'true') {
            const end = Number(node.dataset.value);
            let current = 0;
            const timer = window.setInterval(() => {
              current = Math.min(end, current + Math.ceil(end / 35));
              node.textContent = current.toLocaleString();
              if (current >= end) window.clearInterval(timer);
            }, 35);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '200px' });
    revealRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);
  const reveal = (el: HTMLElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };
  const scrollToDonate = () => {
    window.location.href = `${appBase}/donate`;
  };
  const heroSlides = [
    {
      eyebrow: 'A hand across a hard moment',
      title: <>
        <span className="typewriter-line typewriter-line-one" style={{ textTransform: 'uppercase', display: 'block', lineHeight: 1, whiteSpace: 'nowrap' }}>NO RELIGION,</span>
        <span className="typewriter-line typewriter-line-two" style={{ textTransform: 'uppercase', display: 'block', lineHeight: 1, whiteSpace: 'nowrap' }}>NO BORDERS,</span>
        <span className="typewriter-line typewriter-line-three" style={{ color: 'var(--cta-gold)', textTransform: 'uppercase', fontStyle: 'normal', fontWeight: 'inherit', display: 'block', lineHeight: 1, whiteSpace: 'nowrap' }}>JUST HUMANITY!</span>
      </>,
      copy: 'SaveUs helps families and communities move from urgent need toward a better future with practical care, honest partnership, and people at the center.',
      image: '/images/hero1.jpeg',
      noteNumber: '9',
      note: 'ways to show up for our planet and people, from dinner tonight to a safer tomorrow.',
    },
    {
      eyebrow: 'Dignity starts with enough',
      title: <>
        <span className="typewriter-line typewriter-line-one">Good days</span>
        <em className="typewriter-line typewriter-line-two">grow here.</em>
      </>,
      copy: 'A warm meal, clean water, and a safe place to learn can change the shape of a whole week. We help communities build from there.',
      image: '/images/children-1.jpg',
      note: 'water access projects keeping health and hope flowing.',
    },
    {
      eyebrow: 'Small acts, real reach',
      title: <>
        <span className="typewriter-line typewriter-line-one">Care that</span>
        <em className="typewriter-line typewriter-line-two">keeps going.</em>
      </>,
      copy: 'When neighbors share what they can, urgent help becomes lasting momentum, one family, one classroom, one community at a time.',
      image: '/images/care.webp',

    },

  ];
  const currentHeroSlide = heroSlides[activeSlide];
  const programs = [
    { title: 'Feed the Hungry', text: 'Food boxes and neighborhood kitchens for families facing an empty cupboard.', Icon: Utensils, image: '/images/community-2.jpg', alt: 'Children gathered together in a community setting', path: '/feed-the-hungry' },
    { title: 'Clean Drinking Water', text: 'Practical water access that keeps health and hope flowing.', Icon: Droplets, image: '/images/Clean Drinking Water hero bg.jpeg', alt: 'Community members reaching their hands together', path: '/clean-drinking-water' },
    { title: 'MentalHealth & Elderly Care', text: 'Compassionate care, medicine, and a hand to hold when it matters.', Icon: Stethoscope, image: '/images/mental_health_1787912267188.jpg', alt: 'Hands joined in a circle', path: '/medical-elderly-care' },
    { title: 'Disaster Relief', text: 'Fast, local support when storms, fires, and loss turn life upside down.', Icon: ShieldCheck, image: '/images/Disaster relief portable.jpeg', alt: 'People coming together after a difficult moment', path: '/disaster-relief' },
    { title: 'Education & Skills', text: 'Tools, teachers, and pathways that help young people write their next chapter.', Icon: BookOpen, image: '/images/education-skills-hero.jpg', alt: 'Children gathered outside a community center', path: '/education-skills' },
    { title: 'Animal Welfare', text: 'Care for the animals who share our homes and our communities.', Icon: Heart, image: '/images/animal_sanctuary_1787912223609.jpg', alt: 'Volunteer supporting a community event', path: '/animal-welfare' },
    { title: 'Cancer Hospital', text: 'Advanced care. Compassionate support. For a healthier tomorrow.', Icon: Hospital, image: '/images/saveuscancerhospital.jpeg', alt: 'SaveUs Cancer Hospital', path: '/saveuscancerhospital' },
    { title: 'Green Energy, Plantation, AI & Robotics', text: 'Big-hearted ideas for a healthier, more capable future.', Icon: Zap, image: '/images/Green Energy & AI Robotics hero bg.jpeg', alt: 'Young people learning together', path: '/green-energy' },
    { title: 'Extraterrestrial Affairs & Planetary Readiness', text: 'Exploring the unknown, preparing for planetary risks, and protecting life on Earth and beyond.', Icon: Rocket, image: '/images/extraterrestrial-affairs.webp', alt: 'Bureau of Extraterrestrial Affairs and Planetary Readiness', path: '/extraterrestrial-affairs' },
  ];
  return <div className="saveus-app">
    <SiteHeader onDonate={scrollToDonate} />

    <main>
      <section ref={heroRef} className="hero" id="home" onMouseEnter={() => setHeroPaused(true)} onMouseLeave={() => setHeroPaused(false)} onFocusCapture={() => setHeroPaused(true)} onBlurCapture={() => setHeroPaused(false)}>
        <div key={activeSlide} className="hero-backdrop" style={{ backgroundImage: `url(${currentHeroSlide.image})` }} aria-hidden="true" />
        <svg className="leaf one" width="50" height="90" viewBox="0 0 50 90" aria-hidden="true"><path d="M25 88C22 55 4 32 2 2c25 7 47 27 45 51-2 20-18 29-22 35Z" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M5 7c12 24 22 42 20 78" fill="none" stroke="currentColor" /></svg>
        <svg className="leaf two" width="50" height="90" viewBox="0 0 50 90" aria-hidden="true"><path d="M25 88C22 55 4 32 2 2c25 7 47 27 45 51-2 20-18 29-22 35Z" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
        <div className="container-wide hero-grid">
          <div>
            <span className="eyebrow">{currentHeroSlide.eyebrow}</span>
            <h1 key={`title-${activeSlide}`}>{currentHeroSlide.title}</h1>
            <p className="hero-intro" key={`copy-${activeSlide}`}>{currentHeroSlide.copy}</p>
            <div className="hero-actions">
              <button className="btn-impact-cta" onClick={() => window.location.href = `${appBase}/donate?amount=30`} data-testid="button-hero-impact-cta">
                $1 a day saves a life <ArrowRight size={18} style={{ color: 'var(--gold)' }} />
              </button>
              <button className="btn btn-primary" onClick={scrollToDonate} style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} data-testid="button-hero-donate-now">
                Donate Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="hero-side">
            <div className="hero-note"><strong>{currentHeroSlide.noteNumber}</strong><span>{currentHeroSlide.note}</span></div>
            <div className="hero-slider-controls" aria-label="Hero slides">
              <button type="button" className="hero-arrow" aria-label="Previous hero slide" onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)}><ChevronLeft size={18} /></button>
              <div className="hero-dots">
                {heroSlides.map((slide, index) => <button type="button" key={slide.eyebrow} aria-label={`Show slide ${index + 1}`} aria-current={index === activeSlide} className={`hero-dot ${index === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(index)} />)}
              </div>
              <button type="button" className="hero-arrow" aria-label="Next hero slide" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)}><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Feature Pillars Strip (Matching provided reference design) */}
      <section className="hero-features-section" aria-label="Our Core Pillars">
        <div className="container-wide">
          <div className="hero-features-grid">
            <div className="hero-feature-card">
              <div className="hero-feature-icon" aria-hidden="true">
                <Utensils size={26} />
              </div>
              <div className="hero-feature-text">
                <h4 className="hero-feature-title">FEED THE HUNGER</h4>
                <p className="hero-feature-desc">Providing warm meals and food security.</p>
              </div>
            </div>

            <div className="hero-feature-card">
              <div className="hero-feature-icon" aria-hidden="true">
                <ShieldAlert size={26} />
              </div>
              <div className="hero-feature-text">
                <h4 className="hero-feature-title">DISASTER RELIEF</h4>
                <p className="hero-feature-desc">Emergency response and rebuilding lives.</p>
              </div>
            </div>

            <div className="hero-feature-card">
              <div className="hero-feature-icon" aria-hidden="true">
                <GraduationCap size={26} />
              </div>
              <div className="hero-feature-text">
                <h4 className="hero-feature-title">EDUCATION</h4>
                <p className="hero-feature-desc">Building schools and resources for children.</p>
              </div>
            </div>

            <div className="hero-feature-card">
              <div className="hero-feature-icon" aria-hidden="true">
                <Stethoscope size={26} />
              </div>
              <div className="hero-feature-text">
                <h4 className="hero-feature-title">HEALTH CARE</h4>
                <p className="hero-feature-desc">Medical assistance for every community.</p>
              </div>
            </div>

            <div className="hero-feature-card">
              <div className="hero-feature-icon" aria-hidden="true">
                <Droplets size={26} />
              </div>
              <div className="hero-feature-text">
                <h4 className="hero-feature-title">CLEAN WATER</h4>
                <p className="hero-feature-desc">Safe drinking water and sanitation.</p>
              </div>
            </div>

            <div className="hero-feature-card">
              <div className="hero-feature-icon" aria-hidden="true">
                <PawPrint size={26} />
              </div>
              <div className="hero-feature-text">
                <h4 className="hero-feature-title">ANIMAL WELFARE</h4>
                <p className="hero-feature-desc">Protecting and caring for animals in need.</p>
              </div>
            </div>

            <div className="hero-feature-card">
              <div className="hero-feature-icon" aria-hidden="true">
                <Users size={26} />
              </div>
              <div className="hero-feature-text">
                <h4 className="hero-feature-title">SENIOR CARE</h4>
                <p className="hero-feature-desc">Support and companionship for the elderly.</p>
              </div>
            </div>

            <div
              className="hero-feature-card"
              onClick={() => window.location.href = `${appBase}/extraterrestrial-affairs`}
              style={{ cursor: 'pointer' }}
            >
              <div className="hero-feature-icon" aria-hidden="true">
                <AlienUfoIcon size={28} />
              </div>
              <div className="hero-feature-text">
                <h4 className="hero-feature-title" style={{ fontSize: '0.86rem', lineHeight: '1.25' }}>
                  THE BUREAU FOR EXTRATERRESTRIAL HUMANITARIAN ASSISTANCE
                </h4>
                <p className="hero-feature-desc">
                  Coordinating relief efforts and diplomatic relations for off-world species in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-strip" aria-label="SaveUs trust and donation disclosure">
        <span className="trust-orbit trust-orbit-left" aria-hidden="true" />
        <span className="trust-orbit trust-orbit-right" aria-hidden="true" />
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Set 1 */}
            <div className="trust-card trust-card-coral">
              <span className="trust-icon"><BadgeCheck size={22} /></span>
              <span className="trust-card-copy"><strong>U.S.-registered humanitarian nonprofit</strong><small>People-first work, rooted in care</small></span>
            </div>
            <div className="trust-card trust-card-teal">
              <span className="trust-icon"><FileCheck2 size={22} /></span>
              <span className="trust-card-copy"><strong>501(c)(3) status pending</strong><small>EIN 88-4172639 · We share the work clearly</small></span>
            </div>
            <div className="trust-card trust-card-pine">
              <span className="trust-icon"><ShieldCheck size={22} /></span>
              <span className="trust-card-copy"><strong>Donations are not yet tax-deductible</strong><small>Being honest from day one matters to us</small></span>
            </div>

            {/* Set 2 (Duplicate for seamless loop) */}
            <div className="trust-card trust-card-coral" aria-hidden="true">
              <span className="trust-icon"><BadgeCheck size={22} /></span>
              <span className="trust-card-copy"><strong>U.S.-registered humanitarian nonprofit</strong><small>People-first work, rooted in care</small></span>
            </div>
            <div className="trust-card trust-card-teal" aria-hidden="true">
              <span className="trust-icon"><FileCheck2 size={22} /></span>
              <span className="trust-card-copy"><strong>501(c)(3) status pending</strong><small>EIN 88-4172639 · We share the work clearly</small></span>
            </div>
            <div className="trust-card trust-card-pine" aria-hidden="true">
              <span className="trust-icon"><ShieldCheck size={22} /></span>
              <span className="trust-card-copy"><strong>Donations are not yet tax-deductible</strong><small>Being honest from day one matters to us</small></span>
            </div>

            {/* Set 3 (Duplicate for seamless loop on ultrawide screens) */}
            <div className="trust-card trust-card-coral" aria-hidden="true">
              <span className="trust-icon"><BadgeCheck size={22} /></span>
              <span className="trust-card-copy"><strong>U.S.-registered humanitarian nonprofit</strong><small>People-first work, rooted in care</small></span>
            </div>
            <div className="trust-card trust-card-teal" aria-hidden="true">
              <span className="trust-icon"><FileCheck2 size={22} /></span>
              <span className="trust-card-copy"><strong>501(c)(3) status pending</strong><small>EIN 88-4172639 · We share the work clearly</small></span>
            </div>
            <div className="trust-card trust-card-pine" aria-hidden="true">
              <span className="trust-icon"><ShieldCheck size={22} /></span>
              <span className="trust-card-copy"><strong>Donations are not yet tax-deductible</strong><small>Being honest from day one matters to us</small></span>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Banner Section */}
      <section className="youtube-banner-section" aria-label="SaveUs Official YouTube Channel">
        <div className="container-wide">
          <a
            href="https://www.youtube.com/@SaveUsInc"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-banner-link reveal"
            ref={reveal}
            aria-label="Visit SaveUs Inc on YouTube @SaveUsInc (opens in a new tab)"
          >
            <div className="youtube-banner-container">
              <img
                src={`${appBase}/images/SAVEUSYOUTUBETHUMBNAIL.jpeg`}
                alt="SaveUs Official YouTube Channel - Watch Our Journey & Community Impact"
                className="youtube-banner-img"
                loading="lazy"
                decoding="async"
              />
              <div className="youtube-banner-overlay">
                <div className="youtube-badge-pill">
                  <span className="youtube-badge-icon" aria-hidden="true">
                    <Youtube size={22} />
                  </span>

                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="programs section-pad" id="programs">
        <div className="container-wide">
          <div className="program-head reveal" ref={reveal}><div><span className="eyebrow">Our promise</span><h2 className="section-title">Useful today. Stronger tomorrow.</h2></div><p className="section-copy">We meet urgent needs without losing sight of what comes next. Every program is shaped with local people, not simply delivered to them.</p></div>
          <div className="program-grid">
            {programs.map(({ title, text, Icon, image, alt, path }, index) => <article onClick={() => path && (window.location.href = `${appBase}${path}`)} style={{ cursor: path ? 'pointer' : 'default' }} className={`program-card reveal stagger-${(index % 3) + 1}`} ref={reveal} key={title} data-testid={`card-program-${index + 1}`}><span className="program-number">0{index + 1}</span><div className="program-card-image"><img src={image} alt={alt} loading="lazy" decoding="async" /></div><Icon className="program-icon" size={30} /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="services section-pad" id="professional-services" style={{ background: 'var(--paper)', position: 'relative' }}>
        <div className="container-wide services-split">
          <div className="services-left">
            <div className="reveal" ref={reveal}>
              <span className="eyebrow">Expertise at scale</span>
              <h2 className="section-title">Our Professional Services.</h2>
              <p className="section-copy">Tailored solutions to power your business growth, from targeted outreach to seamless team scaling.</p>
            </div>

            <div className="services-grid">
              <div className="service-card reveal stagger-1" ref={reveal}>
                <h3><Phone className="service-icon" size={24} /> COLD CALLING</h3>
                <ul>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> B2B & B2C Outreach</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Appointment Setting</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Sales & Telemarketing</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Customer Follow-up</li>
                </ul>
              </div>

              <div className="service-card reveal stagger-2" ref={reveal}>
                <h3><Bot className="service-icon" size={24} /> VIRTUAL ASSISTANTS</h3>
                <ul>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Admin & Data Entry</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Email & Calendar Mgmt.</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> CRM Management</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> E-commerce Support</li>
                </ul>
              </div>

              <div className="service-card reveal stagger-3" ref={reveal}>
                <h3><Target className="service-icon" size={24} /> LEAD GENERATION</h3>
                <ul>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Verified Lead Lists</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Data Scraping</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Prospect Research</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Market Targeting</li>
                </ul>
              </div>

              <div className="service-card reveal stagger-4" ref={reveal}>
                <h3><TrendingUp className="service-icon" size={24} /> BUSINESS GROWTH SUPPORT</h3>
                <ul>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Sales Funnel Building</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Client Acquisition</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Social Media Support</li>
                  <li><Check size={16} style={{ color: 'var(--gold)' }} /> Remote Team Setup</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services-right reveal stagger-2" ref={reveal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/images/virtual assitant service.jpeg"
              alt="Virtual Assistant Services"
              style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '1.25rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="impact section-pad" id="impact">
        <div className="container-wide impact-grid">
          <div className="reveal" ref={reveal}><span className="eyebrow">Small acts, real reach</span><h2 className="section-title">The proof is in the people.</h2><p className="section-copy">We measure what matters: meals shared, elders cared for, water reached, and young minds given room to grow.</p></div>
          <div className="impact-photo reveal stagger-1" ref={reveal}><div className="photo-frame big"><img src="/images/community-2.jpg" alt="Children smiling and reaching toward the camera" loading="lazy" decoding="async" /></div><div className="photo-frame"><img src="/images/elderpeople.webp" alt="Volunteer in a bright pink shirt at a community event" loading="lazy" decoding="async" /></div><div className="photo-frame small"><img src="/images/catsanddogs.webp" alt="Children gathered together outside a community center" loading="lazy" decoding="async" /></div></div>
        </div>
      </section>

      <section className="story section-pad" id="story">
        <div className="container-wide story-grid">
          <div className="story-image reveal" ref={reveal}><img src="/images/children-1.jpg" alt="Children listening together in a classroom" loading="lazy" decoding="async" /></div>
          <div className="reveal stagger-1" ref={reveal}><span className="eyebrow">A story from the circle</span><h2 className="section-title">“Now I know I can try.”</h2><p className="quote">Before SaveUs, school felt like a place I was always arriving late to. Now I have the books, the light, and someone who asks what I think.</p><div className="story-credit"><div style={{ background: 'var(--pine)', color: '#ffffff', borderRadius: '50%', width: '2.5rem', height: '2.5rem', display: 'grid', placeItems: 'center', fontWeight: 900 }}>A</div><span><strong>Asha, age 12</strong> Student and aspiring engineer</span></div></div>
        </div>
      </section>

      <section className="contact-cta-strip" id="contact-cta">
        <div className="container-wide">
          <div className="contact-cta-flex reveal" ref={reveal}>
            <div className="contact-cta-text">
              <h2>Have questions about SaveUs? We're here to help.</h2>
              <p>Connect with our team to learn more about our initiatives or partner with us.</p>
            </div>
            <div className="contact-cta-action">
              <a href={`${appBase}/contact`} className="btn btn-primary btn-cta-light" data-testid="link-home-contact-cta">
                Contact Us Now <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="people section-pad" id="people">
        <div className="container-wide people-grid">
          <div className="reveal" ref={reveal}><span className="eyebrow">Good work needs good roots</span><h2 className="section-title">People you can call.</h2><p className="section-copy">SaveUs is built by organizers, educators, caregivers, and neighbors who believe transparency is a form of respect.</p><div className="leader-list"><div className="leader"><img src="/images/jamilMohsin.webp" alt="Jamil Mohsin" loading="lazy" decoding="async" /><h3>Jamil Mohsin</h3><p>Co-President</p></div><div className="leader"><img src="/images/umermohsin.webp" alt="Umer Mohsin" loading="lazy" decoding="async" /><h3>Umer Mohsin</h3><p>President</p></div></div></div>
          <div className="validation reveal stagger-1" ref={reveal}><h3>Trust is part of the work.</h3><p>We publish where funds go, listen to the people closest to the need, and keep our promises specific. Independent validation is in progress.</p><div className="badges"><span className="badge-placeholder"><BadgeCheck size={16} /> GuideStar · reserved</span><span className="badge-placeholder"><BadgeCheck size={16} /> Charity Navigator · reserved</span></div><div className="disclosure"><strong>501(c)(3) status pending</strong><br />EIN 88-4172639 · Donations are not yet tax-deductible.</div></div>
        </div>
      </section>

      <section className="involved section-pad" id="involved">
        <div className="container-wide"><span className="eyebrow">There is a place for you here</span><h2 className="section-title">Bring what you have.</h2><div className="involved-grid"><div className="involved-card reveal" ref={reveal}><HandHeart size={30} /><h3>Give</h3><p>Make a one-time or monthly gift that meets a real need, clearly and carefully.</p></div><div className="involved-card reveal stagger-1" ref={reveal}><Users size={30} /><h3>Show up</h3><p>Join a local action day, lend a skill, or help us listen to a community well.</p></div><div className="involved-card reveal stagger-2" ref={reveal}><Sprout size={30} /><h3>Spread the word</h3><p>Tell one person why you care. A wider circle makes a stronger safety net.</p></div></div></div>
      </section>

      <section className="final-cta"><div className="container-wide"><span className="eyebrow" style={{ justifyContent: 'center' }}>Ready when you are</span><h2>Keep a little hope moving.</h2><p>When you give to SaveUs, you are not rescuing a stranger. You are standing with a neighbor.</p><button className="btn btn-primary" onClick={scrollToDonate} data-testid="button-final-donate">Choose your gift <ArrowRight size={16} /></button></div></section>
    </main>
    <SiteFooter />
  </div>;
}

function About() {
  const goDonate = () => { window.location.href = `${appBase}/donate`; };
  return (
    <div className="saveus-app about-page-v2">
      <SiteHeader onDonate={goDonate} aboutPage />
      <main>
        {/* 1. CINEMATIC HERO */}
        <section className="about-hero-v2">
          <div className="container-wide">
            <div className="about-hero-pill">
              <span className="about-hero-pill-dot" />
              SaveUs INC · U.S. Registered Humanitarian Movement
            </div>
            <h1 className="about-hero-title">
              No Religion, No Borders,<br />
              <em style={{ color: 'var(--cta-gold)' }}>Just Humanity!</em>
            </h1>
            <p className="about-hero-lead">
              What began as a sacred childhood promise between two orphaned brothers has evolved into an uncompromising global movement. We exist to ensure that no child, no senior citizen, and no vulnerable soul ever has to suffer alone.
            </p>
            <div className="about-hero-actions">
              <button className="btn-impact-cta" onClick={() => window.location.href = `${appBase}/donate?amount=30`} data-testid="button-about-hero-impact-cta">
                $1 a day saves a life <ArrowRight size={18} style={{ color: 'var(--gold)' }} />
              </button>
              <button className="btn btn-primary" onClick={goDonate} style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} data-testid="button-about-hero-donate-now">
                Donate Now <ArrowRight size={16} />
              </button>
            </div>


          </div>
        </section>

        {/* 2. LEGAL & CLARITY NOTICE STRIP */}
        <section className="about-legal-banner-v2">
          <div className="container-wide">
            <div className="about-legal-card-v2">
              <div className="about-legal-info">
                <div className="about-legal-icon">
                  <ShieldCheck size={28} />
                </div>
                <div className="about-legal-text">
                  <h4>Clear, Honest Stewardship From Day One</h4>
                  <p>
                    SaveUs INC is an active, registered non-profit corporation in the United States. Our 501(c)(3) tax-exempt application is currently in progress with the IRS. In the spirit of total clarity, donations are not yet tax-deductible until approval is finalized.
                  </p>
                </div>
              </div>
              <div className="about-legal-badge-group">
                <span className="about-legal-pill">EIN: 88-4172639</span>
                <span className="about-legal-pill">501(c)(3) Pending</span>
                <span className="about-legal-pill">Florida Incorporated</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FOUNDERS' ORIGIN STORY */}
        <section className="about-story-v2 section-pad" id="about-story">
          <div className="container-wide">
            <div className="about-story-grid-v2">
              <div className="about-story-photo-wrap">
                <img
                  src="/images/our living story.webp"
                  alt="SaveUs founders and community members"
                  className="about-story-img-main"
                  loading="lazy"
                  decoding="async"
                />
                <div className="about-story-quote-card">
                  <Heart size={26} />
                  <p>"No child, no senior citizen, and no human should ever suffer alone."</p>
                  <span>A Sacred Promise Between Two Brothers</span>
                </div>
              </div>
              <div className="about-story-content-v2">
                <span className="eyebrow">Our Living History</span>
                <h2 className="section-title">Our Loving History</h2>
                <p>
                  SaveUs Inc. was built on a single, unwavering vision: to break down barriers and bring aid where it is needed most, without discrimination of faith, nationality, or origin.
                </p>
                <p>
                  Starting as a collective effort to deliver immediate relief during crisis situations, SaveUs evolved into a structured global initiative combining grassroots outreach, service-based sustainability, and forward-looking technology.
                </p>
                <p>
                  Today, we continue to scale our programs across food security, healthcare, disaster response, and education, ensuring that every contribution creates real, verifiable change in human lives.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* 5. RAPID DISASTER RELIEF SHELTER SPOTLIGHT */}
        <section className="about-shelter-spotlight section-pad">
          <div className="container-wide">
            <div className="about-shelter-grid">
              <div>
                <span className="eyebrow">Engineering Innovation</span>
                <h2 className="section-title" style={{ color: '#ffffff' }}>
                  Rapid Disaster Relief Shelters.
                </h2>
                <p className="section-copy" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
                  When hurricanes, earthquakes, and flash floods shatter lives, traditional aid is too slow. SaveUs INC engineers and deploys fully functional, storm-resistant synthetic modular homes in as fast as 3 to 5 days.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary" onClick={goDonate}>
                    Sponsor a Shelter Unit <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              <div className="about-shelter-spec-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>

                  </div>
                  <span style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                    3-5 Days Setup
                  </span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1.5rem' }}>
                  All-inclusive coverage: high-grade synthetic materials, specialized labor, rapid international transportation, and complete on-ground turnkey installation.
                </p>
                <div className="about-shelter-specs-list">
                  <div className="about-shelter-spec-item">
                    <strong>1 Private Bedroom</strong>
                    <span>Insulated living space</span>
                  </div>
                  <div className="about-shelter-spec-item">
                    <strong>1 Complete Bath</strong>
                    <span>Sanitary plumbing &amp; water</span>
                  </div>
                  <div className="about-shelter-spec-item">
                    <strong>Kitchen Station</strong>
                    <span>Cooktop &amp; prep area</span>
                  </div>
                  <div className="about-shelter-spec-item">
                    <strong>Storm Proof</strong>
                    <span>Hurricane &amp; Tornado safe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. AI INNOVATION & VISION 2030 ROADMAP */}
        <section className="about-tech-v2 section-pad">
          <div className="container-wide">
            <div className="about-beliefs-head">
              <div>
                <span className="eyebrow">The Next Frontier</span>
                <h2 className="section-title">
                  Powered by Compassion &amp;<br />
                  Advanced AI Robotics.
                </h2>
              </div>
              <p className="section-copy">
                True philanthropy demands relentless technological progress. We combine deep human empathy with Google Gemini AI to build an unshakeable future.
              </p>
            </div>

            <div className="about-tech-grid">
              <div className="about-tech-feature-card">
                <div className="about-tech-icon-wrap" style={{ background: 'rgba(18,61,51,0.08)', color: 'var(--pine)' }}>
                  <Cpu size={32} />
                </div>
                <h3>Google Gemini AI Systems</h3>
                <p>
                  We integrate cutting-edge Google Gemini AI algorithms into global disaster supply chains to forecast emergency hot-spots, optimize delivery routes, and provide real-time, transparent tracking to donors worldwide.
                </p>
              </div>

              <div className="about-tech-feature-card">
                <div className="about-tech-icon-wrap">
                  <Building2 size={32} />
                </div>
                <h3>Hr Economic Engine</h3>
                <p>
                  True charity creates self-sufficiency. We run commercial B2B and B2C outsourcing services (virtual assistance, digital support teams) at $6/hour, channeling proceeds directly into high-paying local jobs and funding our charity missions.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '5rem' }}>
              <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 3rem' }}>
                <span className="eyebrow" style={{ justifyContent: 'center' }}>Vision 2030 Roadmap</span>
                <h3 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                  Pioneering Tomorrow's Aid.
                </h3>
                <p className="section-copy" style={{ margin: '0 auto' }}>
                  Our technical roadmap engineered to combat the most demanding challenges of humanity and planetary survival.
                </p>
              </div>

              <div className="about-roadmap-matrix">
                <div className="about-roadmap-card">
                  <div className="about-roadmap-card-image">
                    <img src="/images/drone_rescue.jpg" alt="Autonomous Rescue Drones" loading="lazy" decoding="async" />
                  </div>
                  <div className="about-roadmap-card-content">
                    <div className="about-roadmap-card-icon">
                      <Plane size={24} />
                    </div>
                    <h4>Autonomous Rescue Drones</h4>
                    <p>Deploying heavy-payload autonomous aerial drones for rapid medical and supply drops in inaccessible disaster zones.</p>
                  </div>
                </div>

                <div className="about-roadmap-card">
                  <div className="about-roadmap-card-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMc7hBR5Xa1l1VJzqxQCwB5HFp-ZL9l0C72HxPADaFLwGEeGBbkDPSNHA&s=10" alt="EV Emergency Fleets" loading="lazy" decoding="async" />
                  </div>
                  <div className="about-roadmap-card-content">
                    <div className="about-roadmap-card-icon">
                      <Truck size={24} />
                    </div>
                    <h4>EV Emergency Fleets</h4>
                    <p>Zero-emission all-terrain electric vehicle emergency fleets equipped with mobile surgical and trauma units.</p>
                  </div>
                </div>

                <div className="about-roadmap-card">
                  <div className="about-roadmap-card-image">
                    <img src="/images/anti_smog.jpg" alt="Anti-Smog Bioreactors" loading="lazy" decoding="async" />
                  </div>
                  <div className="about-roadmap-card-content">
                    <div className="about-roadmap-card-icon">
                      <TreePine size={24} />
                    </div>
                    <h4>Anti-Smog Bioreactors</h4>
                    <p>Deploying urban liquid tree technology and microalgae photobioreactors to clean urban air pollution and smog.</p>
                  </div>
                </div>

                <div className="about-roadmap-card">
                  <div className="about-roadmap-card-image">
                    <img src="/images/climate_defense.jpg" alt="Climate Overheat Defense" loading="lazy" decoding="async" />
                  </div>
                  <div className="about-roadmap-card-content">
                    <div className="about-roadmap-card-icon">
                      <Wind size={24} />
                    </div>
                    <h4>Climate Overheat Defense</h4>
                    <p>Deploying localized atmospheric cooling hubs and extreme heat shelters in vulnerable, dense communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. RADICAL TRUST & SECURITY MATRIX */}
        <section className="about-trust-v2 section-pad">
          <div className="container-wide">
            <div style={{ maxWidth: '45rem', marginBottom: '3rem' }}>
              <span className="eyebrow">Total Legitimacy &amp; Security</span>
              <h2 className="section-title">
                Open Books. Open Hands.
              </h2>
              <p className="section-copy">
                Trust is not assumed, it is earned through transparent financial stewardship, strong encryption, and the courage to operate in plain daylight.
              </p>
            </div>

            <div className="about-trust-grid-v2">
              <div className="about-trust-card-v2">
                <BadgeCheck size={26} />
                <div>
                  <strong>U.S. Registered Nonprofit</strong>
                  <span>Legally incorporated under strict state and federal compliance standards.</span>
                </div>
              </div>

              <div className="about-trust-card-v2">
                <FileCheck2 size={26} />
                <div>
                  <strong>Verified EIN 88-4172639</strong>
                  <span>Official Federal Employer Identification Number on public record.</span>
                </div>
              </div>

              <div className="about-trust-card-v2">
                <Clock size={26} />
                <div>
                  <strong>501(c)(3) Pending</strong>
                  <span>Formal application actively undergoing review by the IRS.</span>
                </div>
              </div>

              <div className="about-trust-card-v2">
                <Lock size={26} />
                <div>
                  <strong>256-Bit SSL Encryption</strong>
                  <span>Bank-grade security protecting every single data interaction.</span>
                </div>
              </div>

              <div className="about-trust-card-v2">
                <ShieldCheck size={26} />
                <div>
                  <strong>Stripe Protected</strong>
                  <span>Zero raw card storage, 100% compliant online giving integration.</span>
                </div>
              </div>

              <div className="about-trust-card-v2">
                <Globe size={26} />
                <div>
                  <strong>GDPR &amp; CCPA Compliant</strong>
                  <span>Strict adherence to European and California data privacy laws.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. EMOTIONAL HIGH-CONVERTING CTA ($1 A DAY) */}
        <section className="about-cta-v2">
          <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Join The Movement
            </span>
            <h2>$1 a Day to Save a Life.</h2>
            <p>
              Designed to meet the rigorous standards expected by global institutions, governments, the United Nations, and everyday changemakers alike, SaveUs INC stands on a foundation of absolute accountability.
            </p>
            <p style={{ fontWeight: 600, color: '#ffffff' }}>
              We are asking individuals, families, and businesses everywhere to pledge just one dollar a day ($1/day) to save a life right now. Together, we engineer a future where humanity thrives without barriers.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={goDonate} style={{ padding: '1.1rem 2.8rem', fontSize: '1rem' }}>
                Donate $1 A Day <ArrowRight size={16} />
              </button>
              <a className="btn btn-outline" href={`${homeHref}#involved`} style={{ padding: '1.1rem 2.5rem', fontSize: '1rem', borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff' }}>
                Partner With Us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div >
  );
}

function Terms() {
  const goDonate = () => { window.location.href = `${homeHref}#donate`; };
  return (
    <div className="saveus-app about-page">
      <SiteHeader onDonate={goDonate} aboutPage />
      <main>
        <section className="about-hero" style={{ padding: '9rem 0 4rem', minHeight: 'auto' }}>
          <div className="about-hero-wash" style={{ backgroundImage: "none", backgroundColor: "var(--pine)" }} aria-hidden="true" />
          <div className="container-wide">
            <span className="eyebrow">Saveus INC</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1rem 0 0.5rem' }}>Terms &amp; Conditions</h1>
            <p className="hero-intro" style={{ maxWidth: '45rem', fontSize: '1rem', opacity: 0.9 }}>
              Effective Date: August 28, 2026. Please read these terms carefully before using our platform.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
          <div className="container-wide" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.75' }}>
            <div className="legal-content" style={{ display: 'grid', gap: '2rem' }}>
              <div>
                <h3 className="display" style={{ font: '600 1.4rem var(--app-font-display)', marginBottom: '0.8rem', color: 'var(--pine)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>
                  1. Introduction &amp; Acceptance of Terms
                </h3>
                <p>
                  Welcome to Saveus INC. By accessing, browsing, or utilizing this website (saveus.org.pk / saveusngo.org), and by making any donation, contribution, or engagement, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully. If you do not agree to these terms, you must immediately discontinue use of this website.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', borderLeft: '4px solid var(--pine)', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <h3 className="display" style={{ font: '600 1.4rem var(--app-font-display)', marginBottom: '0.8rem', color: 'var(--pine)' }}>
                  2. Strict No-Refund Policy for Donations &amp; Contributions
                </h3>
                <p style={{ fontWeight: 700, color: 'var(--ink)' }}>
                  All financial contributions, donations, or payments made to Saveus INC are strictly non-refundable under any and all circumstances.
                </p>
                <p style={{ fontSize: '0.92rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                  This includes, but is not limited to, situations where a contribution was made in error, entered as a recurring payment unintentionally, or where a user's intent, status, or personal circumstances change post-transaction. All sales and donations are final.
                </p>
              </div>

              <div>
                <h3 className="display" style={{ font: '600 1.4rem var(--app-font-display)', marginBottom: '0.8rem', color: 'var(--pine)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>
                  3. Complete Limitation of Liability &amp; Hold Harmless
                </h3>
                <p>
                  Saveus INC, along with its directors, officers, employees, volunteers, contractors, and agents, shall not be held liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of or related to your use of this portal, its content, donations, or services. By using this site, you agree to indemnify, defend, and hold Saveus INC harmless from any claims, demands, liabilities, or legal expenses.
                </p>
              </div>

              <div>
                <h3 className="display" style={{ font: '600 1.4rem var(--app-font-display)', marginBottom: '0.8rem', color: 'var(--pine)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>
                  4. Cyber Incidents, Hacks &amp; Server Downtime Waiver
                </h3>
                <p>
                  Saveus INC explicitly disclaims liability for any loss, theft, corruption, or compromise of user data, unauthorized server access, security breaches, malicious cyberattacks, hacking incidents, or extended server downtime. We are not responsible for technical failures, interruptions, or data losses caused by third-party hosting providers, internet service disruptions, or malicious actors beyond our reasonable operational control.
                </p>
              </div>

              <div>
                <h3 className="display" style={{ font: '600 1.4rem var(--app-font-display)', marginBottom: '0.8rem', color: 'var(--pine)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>
                  5. Financial, Data &amp; Operational Loss Disclaimer
                </h3>
                <p>
                  Saveus INC bears zero responsibility or financial liability for any monetary losses, payment gateway failures, transaction errors, data inaccuracies, or damages resulting from third-party tool integrations, network glitches, or user input errors.
                </p>
              </div>

              <div>
                <h3 className="display" style={{ font: '600 1.4rem var(--app-font-display)', marginBottom: '0.8rem', color: 'var(--pine)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>
                  6. Governing Law &amp; Dispute Resolution
                </h3>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States and the State of Florida (where Saveus INC is incorporated), without regard to conflict of law principles. Any legal disputes arising out of these terms shall be resolved exclusively within the competent courts of the applicable jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Privacy() {
  const goDonate = () => { window.location.href = `${homeHref}#donate`; };
  return (
    <div className="saveus-app about-page">
      <SiteHeader onDonate={goDonate} aboutPage />
      <main>
        <section className="about-hero" style={{ padding: '9rem 0 4rem', minHeight: 'auto' }}>
          <div className="about-hero-wash" style={{ backgroundImage: "none", backgroundColor: "var(--pine)" }} aria-hidden="true" />
          <div className="container-wide">
            <span className="eyebrow">Saveus INC</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1rem 0 0.5rem' }}>Privacy Policy</h1>
            <p className="hero-intro" style={{ maxWidth: '45rem', fontSize: '1rem', opacity: 0.9 }}>
              Effective Date: August 28, 2026. Learn how we handle and protect user data across different global jurisdictions.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
          <div className="container-wide" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.75' }}>
            <div className="legal-content" style={{ display: 'grid', gap: '2rem' }}>
              <div>
                <h3 className="display" style={{ font: '600 1.4rem var(--app-font-display)', marginBottom: '0.8rem', color: 'var(--pine)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>
                  Privacy, International &amp; Cross-Border Compliance
                </h3>
                <p>
                  We respect your privacy and are committed to protecting personal data across jurisdictions. Our data collection, processing, and storage activities comply with major international and local compliance standards:
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--pine)', paddingLeft: '1.2rem' }}>
                <h4 className="display" style={{ font: '600 1.2rem var(--app-font-display)', marginBottom: '0.5rem', color: 'var(--pine)' }}>
                  GDPR Compliance (European Union Visitors)
                </h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  If you access our platform from the European Union, you possess specific data rights under the General Data Protection Regulation (GDPR), including the right to access, correct, or request deletion of your information. We utilize compliant cookie consent mechanisms and data minimization practices.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--pine)', paddingLeft: '1.2rem' }}>
                <h4 className="display" style={{ font: '600 1.2rem var(--app-font-display)', marginBottom: '0.5rem', color: 'var(--pine)' }}>
                  CCPA Compliance (California Residents)
                </h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  If you are a California resident, you possess rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and the right to opt-out of the sale or sharing of your personal information ("Do Not Sell or Share My Personal Information").
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--pine)', paddingLeft: '1.2rem' }}>
                <h4 className="display" style={{ font: '600 1.2rem var(--app-font-display)', marginBottom: '0.5rem', color: 'var(--pine)' }}>
                  Pakistan &amp; International Jurisdictions
                </h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  Users accessing this platform from Pakistan or other international regions acknowledge that data is processed in accordance with applicable local and international data protection standards, ensuring reasonable security safeguards against unauthorized access.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', borderLeft: '4px solid var(--pine)', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <h3 className="display" style={{ font: '600 1.25rem var(--app-font-display)', marginBottom: '0.8rem', color: 'var(--pine)' }}>
                  Data Integrity and Security Disclaimer
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Consistent with our terms, Saveus INC implements reasonable administrative, technical, and physical security controls. However, due to the nature of digital communication and internet networks, we disclaim liability for any compromise of user data resulting from malicious hacking, cyberattacks, or server downtime outside our reasonable operational control.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const goDonate = () => { window.location.href = `${homeHref}#donate`; };

  return (
    <div className="saveus-app contact-page">
      <SiteHeader onDonate={goDonate} aboutPage />
      <main>
        <section className="contact-hero">
          <div className="container-wide">
            <span className="eyebrow">Get In Touch</span>
            <h1>Contact Us</h1>
            <p>
              Have questions, partnership inquiries, or need support? Reach out via email, direct call, WhatsApp, or send us a message below.
            </p>
            <div className="contact-info-cards" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a
                href="mailto:Info@saveusngo.org"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '50px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
                data-testid="link-contact-email"
              >
                <Mail size={18} style={{ color: 'var(--cta-gold)' }} />
                <span>Email: Info@saveusngo.org</span>
              </a>
              <a
                href="tel:+17276660796"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '50px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
                data-testid="link-contact-direct-phone"
              >
                <Phone size={18} />
                <span>Direct: +17276660796</span>
              </a>
              <a
                href="https://wa.me/17276660796"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '50px',
                  background: '#25D366',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                data-testid="link-contact-whatsapp"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp: +17276660796</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container-wide">
            <div className="contact-card-wrapper">
              {submitted ? (
                <div className="contact-success-card" data-testid="contact-success-message">
                  <div className="contact-success-icon">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3>Message Received</h3>
                  <p>
                    Thank you for reaching out to SaveUs. We have received your inquiry and our team will get back to you within 24 to 48 hours.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    data-testid="button-contact-reset"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" data-testid="form-contact">
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="contact-phone">Phone Number (Optional)</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        data-testid="input-contact-phone"
                      />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-subject">Inquiry Subject *</label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        data-testid="select-contact-subject"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Donation & Support">Donation &amp; Support</option>
                        <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                        <option value="Corporate Partnerships">Corporate Partnerships</option>
                        <option value="Media & Press">Media &amp; Press</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-message">Your Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      placeholder="How can we assist you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      data-testid="input-contact-message"
                    />
                  </div>

                  <button type="submit" className="contact-submit-btn" data-testid="button-contact-submit">
                    Send Message <Send size={16} />
                  </button>
                  <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Prefer direct email? Reach us at{' '}
                    <a href="mailto:Info@saveusngo.org" style={{ color: 'var(--pine)', fontWeight: 600, textDecoration: 'underline' }}>
                      Info@saveusngo.org
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function MissionPage() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const reveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const goDonate = (preset?: number) => {
    if (preset) {
      window.location.href = `${appBase}/donate?amount=${preset}`;
    } else {
      window.location.href = `${appBase}/donate`;
    }
  };

  return (
    <div className="saveus-app mission-page">
      <SiteHeader onDonate={() => goDonate(30)} isSubPage />
      <main>
        {/* 1. CINEMATIC HERO */}
        <section className="mission-hero">
          <div className="container-wide">
            <div className="mission-hero-pill">
              <span className="about-hero-pill-dot" />
              SaveUs INC · Global Humanitarian Mission
            </div>
            <h1 className="mission-hero-title">
              Join Our Mission:<br />
              <span>$1  a Day to Save a Life.</span>
            </h1>
            <p className="mission-hero-lead">
              Engineering a future where humanity thrives without barriers through direct relief, radical accountability, and technological innovation.
            </p>
            <div className="mission-hero-actions">
              <button className="btn-impact-cta" onClick={() => goDonate(30)} data-testid="button-mission-pledge-hero">
                $1 a day saves a life <ArrowRight size={18} style={{ color: 'var(--gold)' }} />
              </button>
              <button className="btn btn-primary" onClick={() => goDonate()} style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} data-testid="button-mission-donate-now">
                Donate Now <ArrowRight size={16} />
              </button>
            </div>

            <div className="mission-hero-metrics">
              <div className="mission-metric-card">
                <span className="mission-metric-val">$1 / Day</span>
                <span className="mission-metric-lbl">Direct Lifesaving Model</span>
              </div>
              <div className="mission-metric-card">
                <span className="mission-metric-val">100%</span>
                <span className="mission-metric-lbl">Financial Transparency</span>
              </div>
              <div className="mission-metric-card">
                <span className="mission-metric-val">8 Pillars</span>
                <span className="mission-metric-lbl">Of Comprehensive Care</span>
              </div>

            </div>
          </div>
        </section>

        {/* 2. POST-HERO ANIMATED STATEMENT SECTION */}
        <section className="mission-statement-section" id="mission-statement">
          <div className="container-wide">
            <div className="mission-statement-grid">
              {/* Card 1: Institutional Accountability & Transparency */}
              <div className="mission-statement-card reveal" ref={reveal}>
                <div>
                  <div className="mission-statement-icon">
                    <ShieldCheck size={30} />
                  </div>
                  <span className="mission-statement-tag">Absolute Accountability</span>
                  <h2>Global Institutional Rigor &amp; Financial Transparency</h2>
                  <p className="mission-statement-text">
                    Designed to meet the rigorous standards expected by global institutions, governments, the United Nations, UNICEF, WWF, and everyday changemakers alike, SaveUs INC stands on a foundation of absolute accountability. We operate with 100% financial transparency so that you can see precisely how every resource is deployed for the right cause.
                  </p>
                </div>
                <div className="mission-statement-action" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#0a192f', fontWeight: 700, fontSize: '0.85rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--donate-green)' }} />
                  <span>100% Direct Field Deployment · Open Ledger</span>
                </div>
              </div>

              {/* Card 2: The $1 a Day Collective Movement */}
              <div className="mission-statement-card highlight reveal stagger-1" ref={reveal}>
                <div>
                  <div className="mission-statement-icon">
                    <HeartHandshake size={30} />
                  </div>
                  <span className="mission-statement-tag">The $1/Day Movement</span>
                  <h2>$1 a Day to Save a Life Worldwide</h2>
                  <p className="mission-statement-text">
                    To make this vision a reality across the globe, we are asking individuals, families, loved ones, friends, and offices everywhere to donate just one dollar a day ($1/day) to save a life right now. Together, we are not just offering temporary relief, we are engineering a future where humanity thrives without barriers.
                  </p>
                </div>
                <div className="mission-statement-action">
                  <button className="btn btn-primary" onClick={() => goDonate(30)} style={{ width: '100%', justifyContent: 'center', padding: '1rem 1.8rem', fontSize: '0.95rem' }} data-testid="button-mission-card-pledge">
                    Pledge $1 / Day ($30/mo) <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5. OUR VISION & VALUES SECTION */}
        <section className="mission-vision-values-section" style={{ background: '#f8fafc', padding: '5rem 0', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="container-wide">
            <div className="mission-vision-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
              {/* Our Vision Card */}
              <div className="vision-card reveal" ref={reveal} style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', display: 'flex', flexDirection: 'column' }}>
                <div className="vision-card-icon" style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(21, 42, 73, 0.08)', color: '#152A49', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Eye size={28} />
                </div>
                <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>Future Outlook</span>
                <h2 style={{ fontFamily: 'var(--app-font-display)', fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', color: '#152A49', marginBottom: '1rem' }}>Our Vision</h2>
                <p style={{ fontFamily: 'var(--app-font-sans)', fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>
                  A world where every individual, regardless of age, location, or circumstance, has access to care, dignity, essential resources, and opportunity.
                </p>
              </div>

              {/* Our Values Card */}
              <div className="values-card reveal stagger-1" ref={reveal} style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', display: 'flex', flexDirection: 'column' }}>
                <div className="values-card-icon" style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(230, 57, 70, 0.1)', color: '#e63946', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Award size={28} />
                </div>
                <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>Core Guiding Principles</span>
                <h2 style={{ fontFamily: 'var(--app-font-display)', fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', color: '#152A49', marginBottom: '1rem' }}>Our Values</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontFamily: 'var(--app-font-sans)', fontSize: '1.02rem', color: '#152A49' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(230, 57, 70, 0.12)', color: '#e63946', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Heart size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#152A49' }}>Compassion</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Humanity first always.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontFamily: 'var(--app-font-sans)', fontSize: '1.02rem', color: '#152A49' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(21, 42, 73, 0.12)', color: '#152A49', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#152A49' }}>Integrity</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Unwavering ethics.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontFamily: 'var(--app-font-sans)', fontSize: '1.02rem', color: '#152A49' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(37, 211, 102, 0.12)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Eye size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#152A49' }}>Transparency</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Open operations.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontFamily: 'var(--app-font-sans)', fontSize: '1.02rem', color: '#152A49' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(214, 158, 46, 0.15)', color: 'var(--cta-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#152A49' }}>Innovation</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Smart solutions.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


      </main>
      <SiteFooter />
    </div>
  );
}

function DonatePage() {
  const [cadence, setCadence] = useState<'once' | 'monthly'>('monthly');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [program, setProgram] = useState<string>('where-needed');

  const presetAmounts = [25, 30, 50, 100, 250, 500];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const amtParam = params.get('amount');
    if (amtParam && !isNaN(Number(amtParam))) {
      const num = Number(amtParam);
      if ([25, 30, 50, 100, 250, 500].includes(num)) {
        setAmount(num);
        setCustomAmount('');
      } else {
        setCustomAmount(String(num));
        setAmount(num);
      }
    }
  }, []);

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setAmount(Number(val));
    }
  };

  const getImpactDescription = (amt: number) => {
    if (amt <= 25) return 'Provides 10 warm nutritious meals and bottled clean water for children in crisis.';
    if (amt <= 30) return '$1 a day pledge: Delivers daily nourishment, hydration, and emergency medical kits.';
    if (amt <= 50) return 'Provides clean, filtered drinking water access and hygiene essentials to a whole family.';
    if (amt <= 100) return 'Equips 4 students with complete learning supplies, school uniforms, and solar lamps.';
    if (amt <= 250) return 'Funds emergency maternal care, chronic disease medicine, and trauma relief packages.';
    return 'Accelerates deployment of engineered rapid disaster shelters and long-term community infrastructure.';
  };

  const activeAmount = customAmount ? Number(customAmount) : amount;
  const stripeDonationUrl = `https://buy.stripe.com/?amount=${activeAmount || 50}&cadence=${cadence}&program=${encodeURIComponent(program)}`;

  return (
    <div className="saveus-app donate-page">
      <SiteHeader onDonate={() => { }} isSubPage />
      <main>
        <section className="donate-hero">
          <div className="container-wide">
            <span className="eyebrow">Official Giving Portal</span>
            <h1>Support Saveus INC Initiatives</h1>
            <p>
              Your tax-exempt financial contributions empower rapid community relief, food security drives, clean drinking water systems, and modular emergency shelters for families facing catastrophe.
            </p>
          </div>
        </section>

        <section className="donate-page-section">
          <div className="container-wide">
            <div className="donate-card-wrapper">
              {/* Trust Badge */}
              <div style={{ textAlign: 'center' }}>
                <span className="donate-trust-badge" data-testid="badge-secure-donation">
                  <ShieldCheck size={16} /> Secure 501(c)(3) Donation(Pending)
                </span>
              </div>

              {/* Headline & Context */}
              <div style={{ textAlign: 'center' }}>
                <h2 className="donate-card-title">Support Saveus INC Initiatives</h2>
                <p className="donate-card-subtitle">
                  Select your contribution amount and designated program below to complete your gift via Stripe's encrypted payment gateway.
                </p>
              </div>

              {/* Frequency Toggle */}
              <div className="donate-frequency-toggle" role="group" aria-label="Donation frequency">
                <button
                  type="button"
                  className={`donate-frequency-btn ${cadence === 'once' ? 'active' : ''}`}
                  onClick={() => setCadence('once')}
                  data-testid="button-frequency-once"
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  className={`donate-frequency-btn ${cadence === 'monthly' ? 'active' : ''}`}
                  onClick={() => setCadence('monthly')}
                  data-testid="button-frequency-monthly"
                >
                  Monthly Impact ($1/Day)
                </button>
              </div>

              {/* Preset Amounts Grid */}
              <div className="donate-amounts-grid">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    className={`donate-amount-btn ${amount === preset && !customAmount ? 'active' : ''}`}
                    onClick={() => handleAmountClick(preset)}
                    data-testid={`button-amount-${preset}`}
                  >
                    ${preset}
                    <span>{preset === 30 ? '$1 / day' : cadence === 'monthly' ? '/ month' : 'one-time'}</span>
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="donate-custom-wrap">
                <span>$</span>
                <input
                  type="text"
                  className="donate-custom-input"
                  placeholder="Custom dollar amount"
                  value={customAmount}
                  onChange={handleCustomChange}
                  data-testid="input-custom-amount"
                />
              </div>

              {/* Impact Description Box */}
              <div className="donate-impact-box">
                <Heart size={24} />
                <p>{getImpactDescription(activeAmount)}</p>
              </div>

              {/* Designation Selector */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--app-font-sans)', fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#152A49', marginBottom: '0.45rem' }}>
                  Designate Your Contribution
                </label>
                <select
                  className="donate-designation-select"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  data-testid="select-donate-program"
                >
                  <option value="where-needed">Where Needed Most (Direct General Relief)</option>
                  <option value="hunger-relief">Feed the Hungry &amp; Clean Drinking Water</option>
                  <option value="rapid-shelters">Rapid Disaster Relief Shelters ($29k Units)</option>
                  <option value="education-children">Education, Learning Kits &amp; Orphan Care</option>
                  <option value="medical-healthcare">Emergency Medical Support &amp; Healthcare</option>
                </select>
              </div>

              {/* Final Action Button (Wired Directly to Stripe Link) */}
              <a
                href={stripeDonationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-donate-stripe"
                data-testid="button-stripe-donate"
              >
                Proceed to Secure Donation (${activeAmount || 50}) <ArrowRight size={18} />
              </a>

              {/* Security Note */}
              <div className="donate-security-note">
                <Lock size={15} />
                <span>256-Bit SSL Encrypted Checkout via Stripe · Zero Raw Card Storage</span>
              </div>

              {/* Legal Footnote */}
              <div className="donate-legal-footnote">
                SaveUs INC is an active registered U.S. nonprofit entity (EIN: 88-4172639). Formal 501(c)(3) tax-exempt status determination is currently pending with the Internal Revenue Service (IRS).
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}


function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mission" component={MissionPage} />
        <Route path="/feed-the-hungry" component={FeedTheHungryPage} />
        <Route path="/clean-drinking-water" component={CleanDrinkingWaterPage} />
        <Route path="/medical-elderly-care" component={MedicalElderlyCarePage} />
        <Route path="/disaster-relief" component={DisasterReliefPage} />
        <Route path="/education-skills" component={EducationSkillsPage} />
        <Route path="/animal-welfare" component={AnimalWelfarePage} />
        <Route path="/saveuscancerhospital" component={SaveUsCancerHospitalPage} />
        <Route path="/green-energy" component={GreenEnergyPage} />
        <Route path="/extraterrestrial-affairs" component={ExtraterrestrialAffairsPage} />

        <Route path="/contact" component={Contact} />
        <Route path="/donate" component={DonatePage} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function WhatsAppIcon({ size = 26, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function WhatsAppFloatingWidget() {
  return (
    <a
      href="https://wa.me/17276660796"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp (+17276660796)"
      data-testid="whatsapp-floating-widget"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        style={{ display: 'block' }}
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
      <span className="whatsapp-float-tooltip">Chat with us on WhatsApp</span>
    </a>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <WhatsAppFloatingWidget />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

// Old stub pages removed – now using redesigned pages from @/pages/program-pages.tsx

export default App;

