import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, RefreshCw, Shield, AlertTriangle, CheckCircle, Code, Eye, 
  Terminal, Settings, Cpu, Layers, Server, Activity, Database, Sparkles 
} from 'lucide-react';

interface PipelineLog {
  id: string;
  time: string;
  type: 'info' | 'warning' | 'success' | 'stealth';
  message: string;
}

interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  extractedVia: string;
  stealthScore: number;
}

const SAMPLE_LISTINGS: JobListing[] = [
  {
    id: "job-101",
    title: "Senior Frontend Systems Engineer",
    company: "Acdyon Technologies",
    location: "Remote / Hybrid",
    type: "Full-Time",
    salary: "$140,000 - $180,000",
    extractedVia: "Semantic DOM Fallback + TLS Rotation",
    stealthScore: 99.4
  },
  {
    id: "job-102",
    title: "Distributed Pipeline Architect",
    company: "DataPulse Systems",
    location: "San Francisco, CA",
    type: "Full-Time",
    salary: "$165,000 - $210,000",
    extractedVia: "Jittered Header Session Pool",
    stealthScore: 98.9
  },
  {
    id: "job-103",
    title: "Stealth Web Data Crawler Lead",
    company: "Nexus Intelligence",
    location: "New York, NY",
    type: "Contract",
    salary: "$120/hr",
    extractedVia: "Canvas Noise Neutralizer",
    stealthScore: 99.8
  }
];

export const InteractiveDashboard: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState<'linkedin' | 'indeed' | 'naukri' | 'sandbox'>('linkedin');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [tlsJitter, setTlsJitter] = useState<boolean>(true);
  const [canvasStealth, setCanvasStealth] = useState<boolean>(true);
  const [driftRepair, setDriftRepair] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'listings' | 'json' | 'raw' | 'telemetry'>('listings');
  
  const [logs, setLogs] = useState<PipelineLog[]>([
    { id: '1', time: '18:14:01', type: 'info', message: 'Pipeline initialized. Target target-platform-sandbox.' },
    { id: '2', time: '18:14:02', type: 'stealth', message: 'TLS fingerprint JA3 hash swapped: 771,4865-4866-4867...' },
    { id: '3', time: '18:14:03', type: 'success', message: 'Ingestion active: 3 job listings normalized without IP flag.' }
  ]);

  const handleRunSimulation = () => {
    setIsRunning(true);
    const now = new Date().toLocaleTimeString();
    
    // Add simulation step logs sequentially
    const newLog1: PipelineLog = { id: Date.now().toString(), time: now, type: 'info', message: `Pinging ${selectedSource.toUpperCase()} endpoint node...` };
    setLogs(prev => [newLog1, ...prev.slice(0, 15)]);

    setTimeout(() => {
      const now2 = new Date().toLocaleTimeString();
      const newLog2: PipelineLog = { id: (Date.now() + 1).toString(), time: now2, type: 'warning', message: 'CAPTCHA challenge heuristic detected on edge node. Engaging TLS Jitter...' };
      setLogs(prev => [newLog2, ...prev]);
    }, 800);

    setTimeout(() => {
      const now3 = new Date().toLocaleTimeString();
      const newLog3: PipelineLog = { id: (Date.now() + 2).toString(), time: now3, type: 'stealth', message: `Stealth session renewed. Dynamic DOM drift repair active (${driftRepair ? 'Enabled' : 'Disabled'}).` };
      setLogs(prev => [newLog3, ...prev]);
    }, 1600);

    setTimeout(() => {
      const now4 = new Date().toLocaleTimeString();
      const newLog4: PipelineLog = { id: (Date.now() + 3).toString(), time: now4, type: 'success', message: 'Payload safely extracted & validated against JSON schema (0 account burn).' };
      setLogs(prev => [newLog4, ...prev]);
      setIsRunning(false);
    }, 2400);
  };

  return (
    <section id="demo" style={{ padding: '3.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={13} /> Interactive Product Sandbox
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Live Ingestion & Stealth Control Room
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0.5rem auto 0 auto', fontSize: '1rem' }}>
            Manipulate stealth parameters in real time and watch how PulseEngine bypasses bot detection while keeping target data streams resilient.
          </p>
        </div>

        {/* Dashboard Shell Window */}
        <div className="glass-card" style={{ overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
          
          {/* Top Window Bar */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '0.85rem 1.25rem',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <span style={{ marginLeft: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                pulseengine://control-room/sandbox
              </span>
            </div>

            {/* Target Select Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Target Endpoint:</span>
              <select
                value={selectedSource}
                onChange={(e: any) => setSelectedSource(e.target.value)}
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="sandbox">Low-Risk Public Sandbox (Recommended)</option>
                <option value="linkedin">LinkedIn RSS / Public Job Endpoint</option>
                <option value="indeed">Indeed Search Gateway API</option>
                <option value="naukri">Naukri Public Board Simulator</option>
              </select>

              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="btn btn-primary btn-sm"
                style={{ padding: '0.35rem 0.85rem' }}
              >
                {isRunning ? (
                  <>
                    <RefreshCw size={14} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                    Running...
                  </>
                ) : (
                  <>
                    <Play size={14} /> Run Pipeline
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Main Dashboard Layout (Grid: Controls on Left, Visualizer on Right) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 340px) 1fr',
            minHeight: '480px'
          }} className="dashboard-grid">

            {/* Left Sidebar Controls */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRight: '1px solid var(--border-color)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Settings size={14} /> Stealth Strategy Controls
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  
                  {/* Toggle 1: TLS Fingerprint Rotation */}
                  <div style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    padding: '0.75rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>TLS Cipher Jitter</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Rotate JA3/JA4 signatures</div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={tlsJitter} 
                      onChange={(e) => setTlsJitter(e.target.checked)} 
                      style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: 'var(--accent-orange)' }}
                    />
                  </div>

                  {/* Toggle 2: Canvas Noise Generator */}
                  <div style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    padding: '0.75rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Canvas Fingerprint Noise</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mask headless browser GPU</div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={canvasStealth} 
                      onChange={(e) => setCanvasStealth(e.target.checked)} 
                      style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: 'var(--accent-orange)' }}
                    />
                  </div>

                  {/* Toggle 3: DOM Drift Self-Repair */}
                  <div style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    padding: '0.75rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>DOM Drift Self-Healing</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Semantic fallback mapping</div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={driftRepair} 
                      onChange={(e) => setDriftRepair(e.target.checked)} 
                      style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: 'var(--accent-orange)' }}
                    />
                  </div>

                </div>
              </div>

              {/* Live Real-Time Logs Console */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Terminal size={14} /> Pipeline Stream Logs
                </h4>

                <div className="code-block" style={{ flex: 1, maxHeight: '200px', fontSize: '0.75rem', padding: '0.65rem' }}>
                  {logs.map((log) => (
                    <div key={log.id} style={{ marginBottom: '0.35rem', display: 'flex', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>[{log.time}]</span>
                      <span style={{
                        color: log.type === 'success' ? 'var(--accent-emerald)' :
                               log.type === 'warning' ? '#eab308' :
                               log.type === 'stealth' ? 'var(--accent-cyan)' : 'var(--text-secondary)'
                      }}>
                        {log.message}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Main Content Area */}
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
              
              {/* Output View Mode Tabs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                <button
                  onClick={() => setActiveTab('listings')}
                  style={{
                    backgroundColor: activeTab === 'listings' ? 'var(--accent-orange)' : 'var(--bg-tertiary)',
                    color: activeTab === 'listings' ? '#ffffff' : 'var(--text-secondary)',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.15s'
                  }}
                >
                  <Eye size={14} /> Normalized Data
                </button>

                <button
                  onClick={() => setActiveTab('json')}
                  style={{
                    backgroundColor: activeTab === 'json' ? 'var(--accent-orange)' : 'var(--bg-tertiary)',
                    color: activeTab === 'json' ? '#ffffff' : 'var(--text-secondary)',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.15s'
                  }}
                >
                  <Code size={14} /> JSON Schema
                </button>

                <button
                  onClick={() => setActiveTab('telemetry')}
                  style={{
                    backgroundColor: activeTab === 'telemetry' ? 'var(--accent-orange)' : 'var(--bg-tertiary)',
                    color: activeTab === 'telemetry' ? '#ffffff' : 'var(--text-secondary)',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.15s'
                  }}
                >
                  <Activity size={14} /> Stealth Health Matrix
                </button>
              </div>

              {/* Tab 1: Normalized Listings Cards */}
              {activeTab === 'listings' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {SAMPLE_LISTINGS.map(job => (
                    <div key={job.id} className="glass-card" style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-secondary)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>{job.title}</h3>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                            <span style={{ fontWeight: 600, color: 'var(--accent-orange)' }}>{job.company}</span> • {job.location} • <span style={{ color: 'var(--text-muted)' }}>{job.type}</span>
                          </div>
                        </div>

                        <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>
                          <CheckCircle size={12} /> Stealth Score: {job.stealthScore}%
                        </span>
                      </div>

                      <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <span>Salary: <strong style={{ color: 'var(--text-primary)' }}>{job.salary}</strong></span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                          Method: {job.extractedVia}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Clean Structured JSON Output */}
              {activeTab === 'json' && (
                <div className="code-block" style={{ flex: 1, margin: 0, fontSize: '0.8rem' }}>
                  <pre>{JSON.stringify({
                    targetSource: selectedSource,
                    timestamp: new Date().toISOString(),
                    stealthProfile: {
                      tlsJitterEnabled: tlsJitter,
                      canvasStealthEnabled: canvasStealth,
                      domDriftSelfHealing: driftRepair,
                      activeJA3Hash: "771,4865-4866-4867-49195-49199-49196-49200",
                    },
                    listings: SAMPLE_LISTINGS
                  }, null, 2)}</pre>
                </div>
              )}

              {/* Tab 3: Stealth Telemetry Matrix */}
              {activeTab === 'telemetry' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  
                  <div className="glass-card" style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>IP Ban Rate (Last 30 days)</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-emerald)', marginTop: '0.2rem' }}>0.00%</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Zero accounts burned</div>
                  </div>

                  <div className="glass-card" style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Average Response Latency</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>240 ms</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Edge Proxy Jitter Pool</div>
                  </div>

                  <div className="glass-card" style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>DOM Selector Match Accuracy</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-orange)', marginTop: '0.2rem' }}>99.98%</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Semantic AST Parser</div>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
