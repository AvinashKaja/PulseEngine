import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Lock, RefreshCw, AlertTriangle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
      
      {/* Background glow accent */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(9, 13, 22, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Status Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--bg-glass-card)',
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(8px)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <span className="status-dot status-dot-active" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Built for Non-Cooperative Web Platforms
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>|</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontWeight: 600 }}>
              Zero IP Burn Architecture
            </span>
          </div>
        </div>

        {/* Hero Title & Pitch */}
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            color: 'var(--text-primary)'
          }}>
            Web Ingestion That Doesn't Get <span style={{
              background: 'linear-gradient(135deg, var(--accent-orange), #f97316, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Burned By Tuesday.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '2.25rem',
            fontWeight: 400
          }}>
            Extract structured job listings, talent data, and market intelligence from target platforms without triggering CAPTCHA walls, IP bans, or silent DOM breakage.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#demo" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              Launch Interactive Demo
              <ArrowRight size={18} />
            </a>
            
            <a href="#decisions" className="btn btn-secondary" style={{ padding: '0.9rem 1.75rem', fontSize: '1.05rem' }}>
              Read Architecture & Decisions
            </a>
          </div>

          {/* Key Honest Architectural Guarantees (No fake stats!) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginTop: '2rem'
          }}>
            <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>
                <ShieldCheck size={20} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Fingerprint Stealth</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Real browser TLS fingerprint rotation, Canvas noise randomization, and human mouse velocity simulation.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
                <RefreshCw size={20} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>DOM Drift Self-Repair</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Semantic fallback engine that dynamically recovers job attributes when target class names change overnight.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>
                <Lock size={20} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Ethical Guardrails</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Respects robots.txt directives, rate-limits concurrency, and safely operates against low-risk sandboxes.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
