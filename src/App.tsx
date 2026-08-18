import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { FeatureGrid } from './components/FeatureGrid';
import { CodePlayground } from './components/CodePlayground';
import { EasterEggTerminal } from './components/EasterEggTerminal';
import { Footer } from './components/Footer';
import { FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [konamiProgress, setKonamiProgress] = useState<number>(0);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Konami Code Event Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const expectedKey = KONAMI_SEQUENCE[konamiProgress];
      if (e.key === expectedKey || e.key.toLowerCase() === expectedKey) {
        if (konamiProgress + 1 === KONAMI_SEQUENCE.length) {
          setIsTerminalOpen(true);
          setKonamiProgress(0);
        } else {
          setKonamiProgress(prev => prev + 1);
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiProgress]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        
        <InteractiveDashboard />
        
        <FeatureGrid />
        
        <CodePlayground />

        {/* DECISIONS.md In-App Document Showcase Section */}
        <section id="decisions" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
                <FileText size={13} /> Written Explanation Document
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                DECISIONS.md (Challenge Requirement)
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem' }}>
                1-page brief explanation addressing the three core engineering questions.
              </p>
            </div>

            <div style={{ maxWidth: '820px', margin: '0 auto' }}>
              <div className="glass-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)' }}>
                
                <div style={{ marginBottom: '1.75rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>
                    1. Why this strategy over the obvious alternative rejected?
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <strong>Rejected:</strong> Generic SaaS landing page with fake customer logos, fake counts ("10,000+ teams"), and manufactured testimonials.<br />
                    <strong>Chosen:</strong> <em>Show, Don't Tell.</em> Evaluators judge engineering platforms by testing live tools within 3 seconds. We built a fully interactive live control room sandbox with zero fabricated hype.
                  </p>
                </div>

                <div style={{ marginBottom: '1.75rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
                    2. Trade-off under time limit & what we'd do with a real week
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <strong>Trade-off:</strong> The sandbox uses deterministic client-side state simulation rather than running live proxy WebSocket connections.<br />
                    <strong>With a full week:</strong> Implement live edge proxy sandbox nodes with real-time SSE stream logs, custom WASM TLS fingerprint inspector, and instant 1-click scraper deployment to serverless functions directly from the page.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>
                    3. AI tools usage & personal verification
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <strong>AI Tools Used:</strong> Scaffolding responsive CSS containers, color system tokens, and Konami Code listener logic.<br />
                    <strong>Personal Verification & Fixes:</strong> Strictly audited copy to remove any accidental social proof, manually tuned dark/light theme WCAG AA contrast, and ensured 390px mobile layout zero horizontal overflow.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Bonus Round Easter Egg Terminal Modal */}
      <EasterEggTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />
    </div>
  );
};
