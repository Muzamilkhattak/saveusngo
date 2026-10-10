import { useEffect, useState } from 'react';
import {
  ArrowRight, Menu, X, Mail,
  Utensils, Droplets, Stethoscope, ShieldAlert,
  GraduationCap, PawPrint, HeartHandshake, Zap, Rocket, Hospital
} from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

export const appBase = import.meta.env.BASE_URL.replace(/\/$/, '');
export const homeHref = `${appBase}/`;

export const programNavItems = [
  {
    label: 'Feed the Hungry',
    href: `${appBase}/feed-the-hungry`,
    testId: 'feed-the-hungry',
    icon: Utensils,
  },
  {
    label: 'Clean Drinking Water',
    href: `${appBase}/clean-drinking-water`,
    testId: 'clean-drinking-water',
    icon: Droplets,
  },
  {
    label: 'Medical & Elderly Care',
    href: `${appBase}/medical-elderly-care`,
    testId: 'medical-elderly-care',
    icon: Stethoscope,
  },
  {
    label: 'Disaster Relief',
    href: `${appBase}/disaster-relief`,
    testId: 'disaster-relief',
    icon: ShieldAlert,
  },
  {
    label: 'Education & Skills',
    href: `${appBase}/education-skills`,
    testId: 'education-skills',
    icon: GraduationCap,
  },
  {
    label: 'Animal Welfare',
    href: `${appBase}/animal-welfare`,
    testId: 'animal-welfare',
    icon: PawPrint,
  },
  {
    label: 'Cancer Hospital',
    href: `${appBase}/saveuscancerhospital`,
    testId: 'saveus-cancer-hospital',
    icon: Hospital,
  },
  {
    label: 'Green Energy & AI Robotics',
    href: `${appBase}/green-energy`,
    testId: 'green-energy',
    icon: Zap,
  },
  {
    label: 'Extraterrestrial Affairs',
    href: `${appBase}/extraterrestrial-affairs`,
    testId: 'extraterrestrial-affairs',
    icon: Rocket,
  },
];

export const platformNavItems = [
  { label: 'Home', href: homeHref, testId: 'home' },
  { label: 'About Us', href: `${appBase}/about`, testId: 'about' },
  { label: 'Our Mission', href: `${appBase}/mission`, testId: 'mission' },
  { label: 'Contact Us', href: `${appBase}/contact`, testId: 'contact' },
  { label: 'Donate Now', href: `${appBase}/donate`, testId: 'donate' },
  { label: 'Terms & Conditions', href: `${appBase}/terms`, testId: 'terms' },
  { label: 'Privacy Policy', href: `${appBase}/privacy`, testId: 'privacy' },
];

export function WhatsAppIcon({ size = 26, color = "currentColor" }: { size?: number; color?: string }) {
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

export function BrandLockup({ link = true, className = '' }: { link?: boolean; className?: string }) {
  const content = (
    <div className="brand-lockup">
      <img
        src={`${appBase}/images/saveuslogomain.jpeg`}
        alt="SaveUs - Together For A Better Future"
        className="brand-logo-img"
      />
    </div>
  );
  return link ? (
    <a href={homeHref} className={`brand ${className}`} data-testid="link-brand" aria-label="SaveUs Home">
      {content}
    </a>
  ) : (
    <div className={`brand ${className}`}>{content}</div>
  );
}

export function SiteHeader({
  onDonate: _onDonate,
  aboutPage: _aboutPage = false,
  isSubPage: _isSubPage = false,
}: {
  onDonate?: () => void;
  aboutPage?: boolean;
  isSubPage?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-wide">
          <div className="header-row-centered">
            {/* Left side: Hamburger Toggle Button */}
            <div className="header-left">
              <button
                className="header-menu-toggle-btn"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => setMenuOpen(!menuOpen)}
                data-testid="button-header-menu-toggle"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                <span className="menu-toggle-label">Menu</span>
              </button>
            </div>

            {/* Center: Centered Logo / Brand */}
            <div className="header-center">
              <BrandLockup />
            </div>

            {/* Right side: Contact Us Page button */}
            <div className="header-right">
              <a
                href={`${appBase}/contact`}
                className="btn btn-primary header-contact-btn"
                onClick={() => setMenuOpen(false)}
                data-testid="button-header-contact"
              >
                Contact Us <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Navigation Menu Overlay (Shows all pages when toggle is clicked) */}
      <div className={`fullscreen-menu-overlay ${menuOpen ? 'open' : ''}`} data-testid="fullscreen-menu-overlay">
        <div className="fullscreen-menu-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="fullscreen-menu-content">
          <div className="container-wide fullscreen-menu-inner">
            <div className="fullscreen-menu-header">
              <BrandLockup link={false} />
              <button
                className="fullscreen-menu-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                data-testid="button-fullscreen-menu-close"
              >
                <X size={26} />
              </button>
            </div>

            <div className="fullscreen-menu-grid">
              {/* Explore Platform Column */}
              <div className="fullscreen-nav-links">
                <span className="fullscreen-menu-eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', display: 'block' }}>
                  Explore Platform
                </span>
                {platformNavItems.map((item, idx) => (
                  <a
                    key={item.testId}
                    href={item.href}
                    className="fullscreen-nav-item"
                    onClick={() => setMenuOpen(false)}
                    data-testid={`link-fullscreen-${item.testId}`}
                    style={{ animationDelay: `${idx * 0.04}s` }}
                  >
                    <span className="nav-item-title">{item.label}</span>
                    <ArrowRight size={20} className="nav-item-arrow" />
                  </a>
                ))}
              </div>

              {/* Our 8 Causes & Programs Column */}
              <div className="fullscreen-nav-links">
                <span className="fullscreen-menu-eyebrow" style={{ color: 'var(--cta-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', display: 'block' }}>
                  Our 8 Causes &amp; Programs
                </span>
                {programNavItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.testId}
                      href={item.href}
                      className="fullscreen-nav-item"
                      onClick={() => setMenuOpen(false)}
                      data-testid={`link-fullscreen-${item.testId}`}
                      style={{
                        animationDelay: `${(idx + platformNavItems.length) * 0.04}s`,
                        fontSize: '1.15rem',
                        padding: '0.75rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Icon size={18} style={{ color: 'var(--cta-gold)' }} />
                        <span className="nav-item-title">{item.label}</span>
                      </span>
                      <ArrowRight size={16} className="nav-item-arrow" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-row">
        <BrandLockup link={false} />
        <div className="footer-meta">
          SaveUs Inc. · EIN 88-4172639 · 501(c)(3) status pending<br />
          Email: <a href="mailto:Info@saveusngo.org" style={{ color: 'inherit', textDecoration: 'underline' }}>Info@saveusngo.org</a> · Direct &amp; WhatsApp: <a href="tel:+17276660796" style={{ color: 'inherit', textDecoration: 'underline' }}>+17276660796</a><br />
          Donations are not yet tax-deductible. © 2025 SaveUs Inc.
        </div>
        <div className="footer-links">
          <a href={`${appBase}/`} data-testid="link-footer-home">Home</a>
          <a href={`${appBase}/about`} data-testid="link-footer-about">About Us</a>
          <a href={`${appBase}/mission`} data-testid="link-footer-mission">Our Mission</a>
          <a href={`${appBase}/feed-the-hungry`} data-testid="link-footer-feed">Feed Hungry</a>
          <a href={`${appBase}/clean-drinking-water`} data-testid="link-footer-water">Clean Water</a>
          <a href={`${appBase}/medical-elderly-care`} data-testid="link-footer-medical">Medical Care</a>
          <a href={`${appBase}/disaster-relief`} data-testid="link-footer-disaster">Disaster Relief</a>
          <a href={`${appBase}/education-skills`} data-testid="link-footer-education">Education</a>
          <a href={`${appBase}/animal-welfare`} data-testid="link-footer-animal">Animal Welfare</a>
          <a href={`${appBase}/saveuscancerhospital`} data-testid="link-footer-saveus-cancer-hospital">SaveUs Cancer Hospital</a>
          <a href={`${appBase}/green-energy`} data-testid="link-footer-green">Green Energy &amp; AI</a>
          <a href={`${appBase}/contact`} data-testid="link-footer-contact">Contact</a>
          <a href={`${appBase}/donate`} data-testid="link-footer-donate">Donate</a>
          <a href={`${appBase}/terms`} data-testid="link-footer-terms">Terms &amp; Conditions</a>
          <a href={`${appBase}/privacy`} data-testid="link-footer-privacy">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <a href="mailto:Info@saveusngo.org" aria-label="Email" data-testid="link-footer-email" title="Email: Info@saveusngo.org">
            <Mail size={20} color="#EA4335" />
          </a>
          <a href="https://wa.me/17276660796" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-testid="link-footer-whatsapp" title="WhatsApp: +17276660796">
            <WhatsAppIcon size={20} color="#25D366" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-testid="link-footer-facebook" title="Facebook">
            <FaFacebook size={20} color="#1877F2" />
          </a>
          <a href="https://www.youtube.com/@SaveUsInc" target="_blank" rel="noopener noreferrer" aria-label="YouTube" data-testid="link-footer-youtube" title="YouTube">
            <FaYoutube size={20} color="#FF0000" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="link-footer-instagram" title="Instagram">
            <FaInstagram size={20} color="#E4405F" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" data-testid="link-footer-tiktok" title="TikTok">
            <FaTiktok size={20} style={{ color: '#ffffff', filter: 'drop-shadow(1.5px 1.5px 0px #FE2C55) drop-shadow(-1.5px -1.5px 0px #25F4EE)' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
