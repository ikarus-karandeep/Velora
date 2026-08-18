import { ChevronUp, Undo, Redo, RotateCcw, Maximize, Sofa, Columns, Disc, Layers } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      
      {/* LEFT: Viewer Area */}
      <div className="relative flex-1 bg-white flex flex-col items-center justify-center m-2 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Branding */}
        <div className="absolute top-6 left-6 flex items-center space-x-2 z-10">
          <div className="text-xl font-bold tracking-tight flex items-center">
            <Sofa className="w-6 h-6 mr-2 text-gray-700" /> VELORA
          </div>
        </div>

        {/* Floating Right Toolbar */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-2 bg-[#f9f8f6] rounded-2xl z-10 border border-gray-100/50 shadow-sm">
          <button className="w-11 h-11 bg-[#e4dfd5] rounded-[10px] transition-colors flex items-center justify-center">
            <img src="/Layout.png" alt="Layout" className="w-[22px] h-[22px] object-contain" />
          </button>
          <button className="w-11 h-11 bg-transparent hover:bg-gray-200/50 rounded-[10px] transition-colors flex items-center justify-center">
            <img src="/fabric.png" alt="Fabric" className="w-[22px] h-[22px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
          </button>
          <button className="w-11 h-11 bg-transparent hover:bg-gray-200/50 rounded-[10px] transition-colors flex items-center justify-center">
            <img src="/Leg.png" alt="Leg Style" className="w-[22px] h-[22px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
          </button>
          <button className="w-11 h-11 bg-transparent hover:bg-gray-200/50 rounded-[10px] transition-colors flex items-center justify-center">
            <img src="/wood.png" alt="Wood Finish" className="w-[22px] h-[22px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Iframe for 3D Viewer */}
        <div className="w-full h-full flex items-center justify-center p-12">
          {/* Replace this with actual iframe link */}
          <iframe 
            src="about:blank" 
            title="3D Viewer"
            className="w-full h-full border-0 bg-transparent rounded-xl pointer-events-auto"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* Bottom Toolbar */}
        <div className="absolute bottom-6 flex items-center gap-4 z-10">
          <div className="flex bg-white/80 backdrop-blur-md rounded-lg shadow-sm border border-gray-200 p-1">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><Undo className="w-4 h-4 text-gray-600" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><Redo className="w-4 h-4 text-gray-600" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><RotateCcw className="w-4 h-4 text-gray-600" /></button>
            <div className="w-px h-6 bg-gray-200 mx-1 self-center"></div>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><Maximize className="w-4 h-4 text-gray-600" /></button>
          </div>
          
          <button className="flex items-center space-x-2 bg-white/80 backdrop-blur-md hover:bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 transition-colors text-sm font-medium text-gray-700">
            <Disc className="w-4 h-4" />
            <span>View in your space</span>
          </button>
        </div>
      </div>

      {/* RIGHT: Sidebar Configurator */}
      <div className="w-full md:w-[500px] bg-white flex flex-col z-20 m-2 ml-0 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-200">
          
          {/* Card 1: Layouts & Upholstery Fabric */}
          <div className="bg-[#f9f8f6] rounded-2xl p-5">
            {/* Layouts Section */}
            <div className="mb-6">
              <h2 className="text-xl font-medium mb-4 text-gray-900">Layouts</h2>
              <div className="flex justify-between items-center mb-4 cursor-pointer border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-600 uppercase">Choose Layout</h3>
                <ChevronUp className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Straight', icon: 'M4 8h16v8H4z' },
                  { name: 'L- Shape left', icon: 'M4 4h8v12h8v4H4z' },
                  { name: 'U Shape', icon: 'M4 4h4v12h8V4h4v16H4z' },
                  { name: 'Ottoman', icon: 'M6 10h12v6H6z' },
                  { name: 'Corner', icon: 'M4 4h12l4 4v12H8l-4-4z' },
                  { name: 'Special', icon: 'M4 8h16v8H4z M10 12h4v2h-4z' },
                ].map((layout, i) => (
                  <button key={i} className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 hover:border-gray-300 bg-white transition-all aspect-square">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10 mb-2 text-gray-600">
                        <path d={layout.icon} />
                     </svg>
                    <span className="text-[11px] text-gray-700 font-medium text-center leading-tight">{layout.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Upholstery Fabric Section */}
            <div>
              <h2 className="text-xl font-medium mb-4 text-gray-900">Upholstery Fabric</h2>
              <div className="flex justify-between items-center mb-4 cursor-pointer border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-600 uppercase">Fabric Material</h3>
                <ChevronUp className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Linen', image: '/Linen.png' },
                  { name: 'Leather', image: '/Leather.png' },
                  { name: 'Suede', image: '/Suede.png' },
                  { name: 'Bouclé', image: '/Boucle.png' },
                  { name: 'Corduroy', image: '/Corduroy.png' },
                  { name: 'Velvet', image: '/Velvet.png' },
                ].map((material, i) => (
                  <button key={i} className="relative flex flex-col items-center justify-end h-[60px] rounded-[30px] border border-gray-200 transition-all overflow-hidden group shadow-sm hover:shadow-md">
                    <img src={material.image} alt={material.name} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <span className="relative text-[11px] text-white font-medium z-10 text-shadow-sm leading-tight text-center pb-2 drop-shadow-md">{material.name}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6 mb-4 cursor-pointer">
                <h3 className="text-sm font-medium text-gray-600 uppercase">Fabric Color</h3>
                <ChevronUp className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                 {[
                  { name: 'Warm Taupe', bg: 'bg-[#7a6b5e]' },
                  { name: 'Mocha Brown', bg: 'bg-[#5c4a3d]' },
                  { name: 'Charcoal Brown', bg: 'bg-[#403a35]' },
                  { name: 'Olive Taupe', bg: 'bg-[#6a6f58]' },
                  { name: 'Forest Olive', bg: 'bg-[#414838]' },
                  { name: 'Graphite', bg: 'bg-[#3b3c3e]' },
                ].map((color, i) => (
                  <button key={i} className={`relative flex flex-col items-center justify-end p-2 rounded-xl border border-gray-200 transition-all aspect-square overflow-hidden group shadow-sm hover:shadow-md`}>
                    <div className={`absolute inset-0 ${color.bg} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
                    <span className="relative text-[11px] text-white font-medium z-10 text-shadow-sm leading-tight text-center px-1 drop-shadow-md pb-1">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Leg & Finish Section */}
          <div className="bg-[#f9f8f6] rounded-2xl p-5">
             <h2 className="text-xl font-medium mb-4 text-gray-900">Leg & Finish</h2>
             <div className="flex justify-between items-center mb-4 cursor-pointer border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium text-gray-600 uppercase">Leg Style</h3>
              <ChevronUp className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { name: 'Tapered', icon: '🪑' },
                { name: 'Round', icon: '🛢️' },
                { name: 'Slim', icon: '🦯' },
                { name: 'Block', icon: '🧱' },
                { name: 'Turned', icon: '🏺' },
                { name: 'Low Profile', icon: '➖' },
              ].map((leg, i) => (
                <button key={i} className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 hover:border-gray-300 bg-white transition-all aspect-square">
                  <div className="text-2xl mb-2 opacity-70">{leg.icon}</div>
                  <span className="text-[11px] text-gray-600 font-medium text-center leading-tight">{leg.name}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center mb-4 cursor-pointer border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium text-gray-600 uppercase">Wood Finish</h3>
              <ChevronUp className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Natural Walnut', color: 'bg-[#8B5A2B]' },
                { name: 'Medium Walnut', color: 'bg-[#6B4226]' },
                { name: 'Dark Walnut', color: 'bg-[#3E2723]' },
                { name: 'Black Oak', color: 'bg-[#212121]' },
                { name: 'Natural Oak', color: 'bg-[#D2B48C]' },
                { name: 'Smoked Oak', color: 'bg-[#8D6E63]' },
              ].map((finish, i) => (
                <button key={i} className={`relative flex flex-col items-center justify-end p-2 rounded-xl border border-gray-200 transition-all aspect-square overflow-hidden group shadow-sm hover:shadow-md`}>
                  <div className={`absolute inset-0 ${finish.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
                  <span className="relative text-[11px] text-white font-medium z-10 text-shadow-sm leading-tight text-center px-1 drop-shadow-md pb-1">{finish.name}</span>
                </button>
              ))}
            </div>
          </div>
          
        </div>

        {/* Card 3: Sticky Footer */}
        <div className="px-4 pb-4 bg-white z-10">
          <div className="p-5 bg-[#f9f8f6] rounded-2xl">
            <div className="mb-4">
              <div className="text-[28px] font-medium text-gray-900">$2,499</div>
              <div className="text-sm text-gray-600">Total Price incl. Taxes</div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 flex justify-between items-center px-4 py-3.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl text-[15px] font-medium transition-colors">
                <span>Summary</span>
                <ChevronUp className="w-5 h-5 text-gray-500" />
              </button>
              <button className="flex-1 px-4 py-3.5 bg-[#222222] hover:bg-black text-white rounded-xl text-[15px] font-medium shadow-sm transition-colors">
                Add to cart
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
