import React, { useState, useEffect } from 'react';
import { X, Terminal as TerminalIcon, ShieldAlert, Sparkles, Send } from 'lucide-react';

interface EasterEggTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

export const EasterEggTerminal: React.FC<EasterEggTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<string[]>([
    "============================================================",
    "  ACDYON TECHNOLOGIES STEALTH DIAGNOSTIC ENGINE v2.4 (BONUS)",
    "============================================================",
    " [!] Konami Code Activated: ↑ ↑ ↓ ↓ ← → ← → B A",
    " [✓] Zero Account Burn Protocols Verified.",
    " [✓] Candidate Easter Egg Unlocked: You found the secret terminal!",
    " Type 'help' or 'acdyon' or 'stealth' for secret commands."
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let responseLines: string[] = [`> ${inputVal}`];

    if (cmd === 'help') {
      responseLines.push(
        "Available Easter Egg Commands:",
        "  - acdyon     : Learn about the Acdyon Engineering philosophy",
        "  - stealth    : Run simulated anti-bot diagnostic test",
        "  - quote      : Retrieve engineering quote",
        "  - clear      : Clear terminal screen",
        "  - exit       : Close diagnostic console"
      );
    } else if (cmd === 'acdyon') {
      responseLines.push(
        " [ACDYON PHILOSOPHY] 'Build It Like You Mean It'",
        " We don't want trivia quizzes. We value systems thinking,",
        " UI craft & restraint, honesty over fake social proof,",
        " and deep engineering ownership. Welcome to the team candidate!"
      );
    } else if (cmd === 'stealth') {
      responseLines.push(
        " Running diagnostic scan...",
        " [1/3] JA3 Fingerprint Hash: MATCH (Chrome 122 Windows)",
        " [2/3] Canvas Random Noise: INJECTED (+0.0001% GPU drift)",
        " [3/3] IP Reputation Score: 100/100 (Clean residential relay)",
        " Status: PASS — 100% Anti-Detection Stealth Active."
      );
    } else if (cmd === 'quote') {
      responseLines.push(
        " \"Data doesn't want to leave. Engineers make it dance anyway.\""
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cmd === 'exit') {
      onClose();
      return;
    } else {
      responseLines.push(`Command not recognized: '${cmd}'. Type 'help' for command list.`);
    }

    setHistory(prev => [...prev, ...responseLines]);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(3, 7, 18, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      
      {/* Terminal Window Shell */}
      <div style={{
        width: '100%',
        maxWidth: '720px',
        backgroundColor: '#050b14',
        border: '1px solid var(--accent-orange)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 0 35px rgba(249, 115, 22, 0.3)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '85vh'
      }}>
        
        {/* Terminal Header */}
        <div style={{
          backgroundColor: '#0f172a',
          padding: '0.75rem 1.25rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <TerminalIcon size={16} color="#f97316" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#f97316', fontWeight: 700 }}>
              ACDYON_STEALTH_TERMINAL // BONUS_ROUND
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="code-block" style={{
          flex: 1,
          borderRadius: 0,
          border: 'none',
          backgroundColor: '#030712',
          color: '#22c55e',
          fontFamily: 'var(--font-mono)',
          padding: '1.25rem',
          overflowY: 'auto',
          minHeight: '320px',
          fontSize: '0.85rem',
          lineHeight: '1.6'
        }}>
          {history.map((line, index) => (
            <div key={index} style={{
              color: line.startsWith('>') ? 'var(--accent-orange)' :
                     line.includes('ACDYON') ? '#38bdf8' :
                     line.includes('PASS') || line.includes('Activated') ? '#22c55e' : '#94a3b8'
            }}>
              {line}
            </div>
          ))}

          {/* Interactive Command Input Form */}
          <form onSubmit={handleCommandSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
            <span style={{ color: 'var(--accent-orange)', fontWeight: 700 }}>&gt;</span>
            <input
              type="text"
              autoFocus
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'acdyon', or 'stealth'..."
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                color: '#f8fafc',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </form>
        </div>

      </div>

    </div>
  );
};
