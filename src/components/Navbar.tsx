import React from 'react';
import { ShieldAlert, Sun, Moon, Terminal, Cpu } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenTerminal }) => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'var(--bg-glass)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.85rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, var(--accent-orange), var(--accent-orange-hover))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-orange)'
          }}>
            <Cpu size={20} color="#ffffff" />
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Pulse<span style={{ color: 'var(--accent-orange)' }}>Engine</span>
            </span>
            <span className="badge badge-orange" style={{ marginLeft: '0.5rem', fontSize: '0.65rem', padding: '0.15rem 0.45rem' }}>
              v2.4 Stealth
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="nav-desktop">
          <a href="#demo" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-orange)'}
             onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Live Product Demo
          </a>
          <a href="#features" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-orange)'}
             onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Architecture
          </a>
          <a href="#code" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-orange)'}
             onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            SDK & Code
          </a>
          <a href="#decisions" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-orange)'}
             onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            DECISIONS.md
          </a>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          
          {/* Easter Egg Terminal Trigger Button */}
          <button
            onClick={onOpenTerminal}
            title="Open Developer Diagnostic Console (Easter Egg)"
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.45rem 0.75rem', fontFamily: 'var(--font-mono)' }}
          >
            <Terminal size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '0.75rem' }}>CLI</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#f97316" /> : <Moon size={18} color="#6366f1" />}
          </button>

          {/* Primary Action Button */}
          <a href="#demo" className="btn btn-primary btn-sm">
            Try Demo
          </a>
        </div>

      </div>
    </header>
  );
};
