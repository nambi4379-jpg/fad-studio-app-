import React, { useState } from 'react';
import { Download, Upload, Video, Music, Copy, Check } from 'lucide-react';

export default function App() {
  const [copiedId, setCopiedId] = useState(null);

  const assets = [
    { id: '1', title: 'Cinematic Whoosh', category: 'SFX', url: '#', downloads: 142 },
    { id: '2', title: 'Neon Cyberpunk Overlay', category: 'VFX', url: '#', downloads: 389 },
    { id: '3', title: '3D Portrait Lighting Prompt', category: 'Prompt', content: 'Ultra realistic cinematic lighting, 8k render, photorealistic portrait --ar 16:9', downloads: 512 }
  ];

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            F
          </div>
          <span className="text-xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            FAD STUDIO
          </span>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition">
          <Upload size={16} /> Upload Asset
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Premium Creator Resources
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Download free VFX overlays, SFX audio tracks, and AI prompts curated directly by Fad Studio.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assets.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 transition shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/50">
                  {item.category}
                </span>
                <span className="text-xs text-slate-500">{item.downloads} downloads</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-200">{item.title}</h3>
              {item.category === 'Prompt' ? (
                <div className="bg-slate-950 p-3 rounded-lg text-xs text-slate-400 mb-4 font-mono border border-slate-800">
                  {item.content}
                </div>
              ) : (
                <div className="h-24 bg-slate-950 rounded-lg mb-4 flex items-center justify-center text-slate-600">
                  {item.category === 'VFX' ? <Video size={32} /> : <Music size={32} />}
                </div>
              )}

              {item.category === 'Prompt' ? (
                <button 
                  onClick={() => handleCopy(item.id, item.content)}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition">
                  {copiedId === item.id ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  {copiedId === item.id ? 'Copied!' : 'Copy Prompt'}
                </button>
              ) : (
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition shadow-md shadow-indigo-600/20">
                  <Download size={16} /> Download Asset
                </button>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-800 mt-20 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Fad Studio. All rights reserved.</p>
        <p className="mt-1 font-semibold text-indigo-400">Created by Fad Studio</p>
      </footer>
    </div>
  );
}
