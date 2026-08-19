import React from 'react';
import { Cpu, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2rem 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-sm)',
                background: 'linear-gradient(135deg, var(--accent-orange), var(--accent-orange-hover))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Cpu size={18} color="#ffffff" />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Pulse<span style={{ color: 'var(--accent-orange)' }}>Engine</span>
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '280px' }}>
              Next-generation resilient web data extraction, browser automation, and stealth proxy pipeline engine.
            </p>
          </div>

          {/* Navigation - Product */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#demo" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Live Sandbox
                </a>
              </li>
              <li>
                <a href="#features" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Architecture & Features
                </a>
              </li>
              <li>
                <a href="#code" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  SDK & Code Examples
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenTerminal}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'var(--accent-cyan)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Terminal size={14} /> Developer CLI
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation - Resources */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#code" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#code" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  API Reference
                </a>
              </li>
              <li>
                <a href="#demo" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  System Health & Status
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation - Company */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Security & Compliance
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 PulseEngine. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              High-scale resilient web data infrastructure.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
