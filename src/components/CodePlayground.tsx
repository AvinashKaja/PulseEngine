import React, { useState } from 'react';
import { Terminal, Copy, Check, Code, Play } from 'lucide-react';

export const CodePlayground: React.FC = () => {
  const [lang, setLang] = useState<'ts' | 'py' | 'curl'>('ts');
  const [copied, setCopied] = useState<boolean>(false);

  const codeSnippets = {
    ts: `import { PulseEngine } from '@pulseengine/sdk';

// Initialize resilient ingestion pipeline
const engine = new PulseEngine({
  stealthProfile: 'ultra-stealth',
  tlsJitter: true,
  fallbackStrategy: 'rss-first',
  maxConcurrency: 5
});

// Stream structured listings without account risk
const stream = await engine.extractListings({
  target: 'https://sandbox.jobboard.org/jobs',
  schema: {
    title: 'string',
    company: 'string',
    location: 'string',
    salary: 'string?'
  }
});

console.log(\`Extracted \${stream.listings.length} listings with 0% block rate.\`);`,

    py: `from pulse_engine import StealthPipeline, TargetConfig

# Initialize Python Ingestion Worker
pipeline = StealthPipeline(
    tls_fingerprint_rotation=True,
    canvas_noise_masking=True,
    rate_limit_backoff_ms=1200
)

# Extract job listings securely
response = pipeline.scrape_jobs(
    endpoint="https://sandbox.jobboard.org/jobs",
    semantic_fallback=True
)

for job in response.data:
    print(f"[{job.company}] {job.title} -> {job.location}")`,

    curl: `# Execute stealth fetch request via PulseEngine Proxy Gate
curl -X POST "https://api.pulseengine.dev/v1/extract" \\
  -H "Authorization: Bearer pe_live_89f72b9a10c" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://sandbox.jobboard.org/jobs",
    "stealthLevel": "high",
    "format": "json"
  }'`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" style={{ padding: '4rem 0' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
            <Terminal size={13} /> Developer Integration
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Integrate In Under 5 Minutes
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.5rem auto 0 auto', fontSize: '1rem' }}>
            Clean TypeScript and Python SDKs designed for high-throughput pipeline reliability.
          </p>
        </div>

        {/* Code Container Shell */}
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div className="glass-card" style={{ overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            
            {/* Header Tabs */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.75rem 1.25rem',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => setLang('ts')}
                  style={{
                    backgroundColor: lang === 'ts' ? 'var(--bg-tertiary)' : 'transparent',
                    color: lang === 'ts' ? 'var(--accent-orange)' : 'var(--text-secondary)',
                    border: '1px solid ' + (lang === 'ts' ? 'var(--border-hover)' : 'transparent'),
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.3rem 0.75rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  TypeScript
                </button>

                <button
                  onClick={() => setLang('py')}
                  style={{
                    backgroundColor: lang === 'py' ? 'var(--bg-tertiary)' : 'transparent',
                    color: lang === 'py' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    border: '1px solid ' + (lang === 'py' ? 'var(--border-hover)' : 'transparent'),
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.3rem 0.75rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  Python
                </button>

                <button
                  onClick={() => setLang('curl')}
                  style={{
                    backgroundColor: lang === 'curl' ? 'var(--bg-tertiary)' : 'transparent',
                    color: lang === 'curl' ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                    border: '1px solid ' + (lang === 'curl' ? 'var(--border-hover)' : 'transparent'),
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.3rem 0.75rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  cURL HTTP
                </button>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.15s'
                }}
              >
                {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Snippet'}</span>
              </button>
            </div>

            {/* Code View */}
            <div className="code-block" style={{ margin: 0, borderRadius: 0, border: 'none', minHeight: '260px' }}>
              <pre>{codeSnippets[lang]}</pre>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
