import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { FeatureGrid } from './components/FeatureGrid';
import { CodePlayground } from './components/CodePlayground';
import { EasterEggTerminal } from './components/EasterEggTerminal';
import { Footer } from './components/Footer';

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
