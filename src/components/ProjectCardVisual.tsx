import React from 'react';

interface ProjectVisualProps {
  type: 'aquabill' | 'myklyra' | 'university' | 'blender';
  title: string;
}

export const ProjectCardVisual: React.FC<ProjectVisualProps> = ({ type, title }) => {
  switch (type) {
    case 'aquabill':
      return (
        <div className="relative w-full h-full min-h-[220px] bg-[#111111] overflow-hidden flex flex-col justify-between p-6 border-b border-[#292929]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#5A5A5A] uppercase tracking-wider">
            <span>SYS.UTILITY // SCHEMATIC</span>
            <span className="text-[#C5F467]">CONTRIBUTOR</span>
          </div>

          {/* Fluid schematic vector */}
          <div className="relative my-4 flex items-center justify-center">
            <svg
              viewBox="0 0 320 120"
              className="w-full h-24 stroke-current text-[#C5F467]/40 fill-none"
            >
              {/* Wave pipelines */}
              <path
                d="M 10,60 C 60,20 100,100 160,60 C 220,20 260,100 310,60"
                strokeWidth="2"
                stroke="#C5F467"
              />
              <path
                d="M 10,75 C 60,35 100,115 160,75 C 220,35 260,115 310,75"
                strokeWidth="1"
                stroke="#3D3D3D"
                strokeDasharray="4 4"
              />
              <circle cx="160" cy="60" r="4" fill="#C5F467" />
              <circle cx="60" cy="20" r="3" fill="#F5F5F5" />
              <circle cx="260" cy="100" r="3" fill="#F5F5F5" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-3xl font-display font-extrabold tracking-tight text-white/5 uppercase select-none">
                AQUABILL
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[#5A5A5A]">
            <span>NODE_FLOW // MTRX</span>
            <span className="px-2 py-0.5 rounded bg-[#171717] border border-[#292929] text-[#929292]">
              PLACEHOLDER ASSET
            </span>
          </div>
        </div>
      );

    case 'myklyra':
      return (
        <div className="relative w-full h-full min-h-[220px] bg-[#111111] overflow-hidden flex flex-col justify-between p-6 border-b border-[#292929]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#5A5A5A] uppercase tracking-wider">
            <span>EDITORIAL // E-COMMERCE</span>
            <span className="text-[#F5F5F5]">WORDPRESS OPS</span>
          </div>

          {/* Minimalist drape / garment silhouette grid */}
          <div className="relative my-4 flex items-center justify-center">
            <svg
              viewBox="0 0 240 100"
              className="w-full h-24 stroke-current text-[#929292]/30 fill-none"
            >
              <rect x="20" y="10" width="200" height="80" rx="4" stroke="#292929" strokeWidth="1" />
              <line x1="20" y1="50" x2="220" y2="50" stroke="#292929" strokeDasharray="3 3" />
              <line x1="120" y1="10" x2="120" y2="90" stroke="#292929" strokeDasharray="3 3" />
              {/* Silhouette abstract fold */}
              <path
                d="M 60,80 Q 90,20 120,50 T 180,30"
                stroke="#C5F467"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-3xl font-display font-extrabold tracking-widest text-white/5 uppercase select-none">
                MYKLYRA
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[#5A5A5A]">
            <span>CATALOG &amp; DIGITAL OUTREACH</span>
            <span className="text-[#C5F467]">6 MONTHS</span>
          </div>
        </div>
      );

    case 'university':
      return (
        <div className="relative w-full h-full min-h-[220px] bg-[#111111] overflow-hidden flex flex-col justify-between p-6 border-b border-[#292929]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#5A5A5A] uppercase tracking-wider">
            <span>IUST AWANTIPORA // DYOD</span>
            <span className="text-[#C5F467]">ACADEMIC</span>
          </div>

          {/* Terminal / Computational Script Aesthetic */}
          <div className="relative my-4 flex flex-col justify-center px-4 py-3 bg-[#0A0A0A] rounded border border-[#242424] font-mono text-[11px] text-[#929292]">
            <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-[#1E1E1E]">
              <div className="w-2 h-2 rounded-full bg-[#333]" />
              <div className="w-2 h-2 rounded-full bg-[#333]" />
              <div className="w-2 h-2 rounded-full bg-[#333]" />
              <span className="text-[9px] text-[#5A5A5A] ml-2">iust_lab@dyod:~</span>
            </div>
            <div className="text-[#C5F467]">$ python3 -m coursework.analytics</div>
            <div className="text-[#5A5A5A] mt-1">&gt; Processing datasets... [OK]</div>
            <div className="text-[#5A5A5A]">&gt; Status: Practical student prototypes</div>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[#5A5A5A]">
            <span>LINUX · PYTHON · ANALYSIS</span>
            <span className="text-[#929292]">COURSEWORK</span>
          </div>
        </div>
      );

    case 'blender':
      return (
        <div className="relative w-full h-full min-h-[220px] bg-[#111111] overflow-hidden flex flex-col justify-between p-6 border-b border-[#292929]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#5A5A5A] uppercase tracking-wider">
            <span>BLENDER 4.X // VIEWPORT</span>
            <span className="text-[#C5F467]">3D CREATIVE</span>
          </div>

          {/* Isometric 3D wireframe mesh */}
          <div className="relative my-4 flex items-center justify-center">
            <svg
              viewBox="0 0 200 120"
              className="w-full h-24 stroke-current text-[#C5F467] fill-none"
            >
              {/* Wireframe isometric cube */}
              <polygon points="100,20 160,50 160,100 100,70" stroke="#3D3D3D" strokeWidth="1" />
              <polygon points="100,20 40,50 40,100 100,70" stroke="#292929" strokeWidth="1" />
              <polygon points="100,20 160,50 100,80 40,50" stroke="#C5F467" strokeWidth="1.5" />
              {/* Vertex points */}
              <circle cx="100" cy="20" r="2.5" fill="#C5F467" />
              <circle cx="160" cy="50" r="2.5" fill="#C5F467" />
              <circle cx="100" cy="80" r="2.5" fill="#C5F467" />
              <circle cx="40" cy="50" r="2.5" fill="#C5F467" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-3xl font-display font-extrabold tracking-widest text-white/5 uppercase select-none">
                BLENDER
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[#5A5A5A]">
            <span>GEOMETRY · ANIMATION · SHADERS</span>
            <span className="text-[#C5F467]">PORTFOLIO READY</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-44 bg-[#111111] flex items-center justify-center font-mono text-xs text-[#5A5A5A]">
          {title}
        </div>
      );
  }
};
