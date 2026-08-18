import React from 'react';
import { EyeOff, ShieldAlert, Cpu, Layers, Radio, Compass, Lock, Activity } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <Cpu size={13} /> Deep Systems Engineering
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Architected Against Anti-Bot Engineering
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0.5rem auto 0 auto', fontSize: '1rem' }}>
            Platforms like LinkedIn, Indeed, Naukri, and Wellfound actively deploy anti-bot systems. Here is how PulseEngine stays operational without account or IP bans.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          
          {/* Pillar 1: Detection Surface Countermeasures */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(249, 115, 22, 0.12)',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              color: 'var(--accent-orange)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <EyeOff size={24} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
              1. Detection Surface Countermeasures
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Automated scraping clients get burned due to detectable fingerprints: headless navigator flags, uniform request timing, missing Client-Hints headers, and default TLS ciphers.
            </p>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginTop: 'auto' }}>
              <li><strong>JA3/JA4 TLS Jitter:</strong> Rotates cipher suites per TLS handshake.</li>
              <li><strong>Canvas & WebGL Masking:</strong> Injects uniform noise into GPU render passes.</li>
              <li><strong>Bezier Mouse Kinematics:</strong> Simulates physical human cursor deceleration.</li>
            </ul>
          </div>

          {/* Pillar 2: Ingestion & Fallback Strategy */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(6, 182, 212, 0.12)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <Radio size={24} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
              2. Adaptive Ingestion & Fallbacks
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Pulling data under the radar requires multi-layer session pacing, residential IP subnet rotation, and instant fallback when a primary endpoint starts rate-limiting.
            </p>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginTop: 'auto' }}>
              <li><strong>Circuit Breaker Pool:</strong> Automatically quarantines blocked IPs for 24h.</li>
              <li><strong>Session Token Isolation:</strong> Prevents cross-request cookie leakage.</li>
              <li><strong>RSS / Public Sandbox Fallback:</strong> Switches to public endpoints if live scrapers get challenged.</li>
            </ul>
          </div>

          {/* Pillar 3: Markup Drift Resilience */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: 'var(--accent-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <Layers size={24} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
              3. Dynamic Markup Drift Resilience
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              When platforms modify HTML CSS classes overnight (e.g. Obfuscated React CSS-in-JS like <code style={{ color: 'var(--accent-orange)' }}>.css-19v82a</code>), traditional scrapers return blank data silently.
            </p>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginTop: 'auto' }}>
              <li><strong>Semantic Tree Matching:</strong> Uses HTML5 ARIA role hierarchies over static CSS classes.</li>
              <li><strong>Empty Payload Health Alarm:</strong> Immediate alerts when extracted fields drop below 80% coverage.</li>
              <li><strong>Schema Auto-Repair:</strong> Infers job title/salary text via spatial layout distance.</li>
            </ul>
          </div>

          {/* Pillar 4: Ethical & Technical Line */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(139, 92, 246, 0.12)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: 'var(--accent-violet)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <Lock size={24} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
              4. Where We Draw The Line
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Every major platform has strict ToS against bulk automated scraping. PulseEngine maintains explicit ethical boundaries to prevent harmful platform overload.
            </p>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginTop: 'auto' }}>
              <li><strong>No Authenticated Account Scraping:</strong> Never risks user login credentials or session tokens.</li>
              <li><strong>Strict Concurrency Throttling:</strong> Enforces mandatory exponential backoff per host.</li>
              <li><strong>Low-Risk Sandbox Verification:</strong> Live demos test against public job RSS/APIs, preserving target stability.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
