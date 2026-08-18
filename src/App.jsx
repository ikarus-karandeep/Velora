import { useState } from "react";
import { ChevronUp, Undo, Redo, RotateCcw, Maximize, Sofa, Columns, Disc, Layers } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState('layout');
  const [expandedSections, setExpandedSections] = useState({
    layout: true,
    fabricMaterial: true,
    fabricColor: true,
    legStyle: true,
    woodFinish: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white text-gray-900 font-sans overflow-hidden">
      
      {/* LEFT: Viewer Area */}
      <div className="relative flex-1 bg-white flex flex-col items-center justify-center m-2 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Branding */}
        <div className="absolute top-6 left-6 flex items-center space-x-2 z-10">
          <div className="text-xl font-bold tracking-tight flex items-center">
            <Sofa className="w-6 h-6 mr-2 text-gray-700" /> VELORA
          </div>
        </div>

        {/* Floating Right Toolbar */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-2 bg-[#f8f6f4] rounded-2xl z-10 border border-gray-100/50 shadow-sm">
          {[
            { id: 'layout', src: '/Layout.png', alt: 'Layout' },
            { id: 'fabric', src: '/fabric.png', alt: 'Fabric' },
            { id: 'leg', src: '/Leg.png', alt: 'Leg Style' },
            { id: 'wood', src: '/wood.png', alt: 'Wood Finish' },
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-12 h-12 rounded-[10px] transition-all flex items-center justify-center ${
                activeTab === tab.id 
                  ? 'bg-[#e4dfd9]' 
                  : 'bg-white hover:bg-gray-50 shadow-sm'
              }`}
            >
              <img 
                src={tab.src} 
                alt={tab.alt} 
                className={`object-contain transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'w-7 h-7 opacity-100' 
                    : 'w-6 h-6 opacity-60 group-hover:opacity-100'
                }`} 
              />
            </button>
          ))}
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

      {/* RIGHT PANEL: Configurator Sidebar */}
      <div className="w-full md:w-[408px] flex flex-col z-20 m-2 ml-0 gap-3">
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-3">
          
          {/* Card 1: Layouts & Upholstery Fabric */}
          <div className="bg-[#f8f6f4] rounded-2xl p-6 shadow-sm">
            {/* Layouts Section */}
            <div>
              <h2 className="text-[18px] font-medium mb-4 text-gray-900">Layouts</h2>
              <div 
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => toggleSection('layout')}
              >
                <h3 className="text-[15px] font-normal uppercase">Choose Layout</h3>
                <ChevronUp className={`w-5 h-5 transition-transform ${expandedSections.layout ? '' : 'rotate-180'}`} />
              </div>
              
              {expandedSections.layout && (
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: 'Straight', image: '/Straight.png' },
                    { name: 'L- Shape left', image: '/L- Shape left.png' },
                    { name: 'U Shape', image: '/U Shape.png' },
                    { name: 'Ottoman', image: '/Ottoman.png' },
                    { name: 'Corner', image: '/Corner.png' },
                    { name: 'Special', image: '/Special.png' },
                  ].map((layout, i) => (
                    <button key={i} className="flex flex-col items-center justify-center p-2 rounded-xl border border-gray-200 hover:border-gray-300 bg-white transition-all h-[105px] group shadow-sm hover:shadow-md">
                      <img src={layout.image} alt={layout.name} className="w-16 h-16 object-contain mb-1 transition-transform group-hover:scale-110 mix-blend-multiply" />
                      <span className="text-[12px] font-normal text-gray-700 text-center leading-none mt-1">{layout.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Upholstery Fabric */}
          <div className="bg-[#f8f6f4] rounded-2xl p-6 shadow-sm">
            {/* Upholstery Fabric Section */}
            <div>
              <h2 className="text-[18px] font-medium mb-4 text-gray-900">Upholstery Fabric</h2>
              <div 
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => toggleSection('fabricMaterial')}
              >
                <h3 className="text-[15px] font-normal uppercase">Fabric Material</h3>
                <ChevronUp className={`w-5 h-5 transition-transform ${expandedSections.fabricMaterial ? '' : 'rotate-180'}`} />
              </div>
              
              {expandedSections.fabricMaterial && (
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
              )}

              <hr className="border-gray-200 my-6" />

              <div 
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => toggleSection('fabricColor')}
              >
                <h3 className="text-[15px] font-normal uppercase">Fabric Color</h3>
                <ChevronUp className={`w-5 h-5 transition-transform ${expandedSections.fabricColor ? '' : 'rotate-180'}`} />
              </div>
              
              {expandedSections.fabricColor && (
                <div className="grid grid-cols-3 gap-3">
                   {[
                    { name: 'Warm Taupe', image: '/Warm Taupe.png' },
                    { name: 'Mocha Brown', image: '/Mocha Brown.png' },
                    { name: 'Charcoal Brown', image: '/Charcoal Brown.png' },
                    { name: 'Olive Taupe', image: '/Olive Taupe.png' },
                    { name: 'Forest Olive', image: '/Forest Olive.png' },
                    { name: 'Graphite', image: '/Graphite.png' },
                  ].map((color, i) => (
                    <button key={i} className="relative flex flex-col items-center justify-end p-2 rounded-xl border border-gray-200 transition-all h-[105px] overflow-hidden group shadow-sm hover:shadow-md">
                      <img src={color.image} alt={color.name} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <span className="relative text-[12px] font-normal text-white z-10 text-shadow-sm text-center leading-none px-1 drop-shadow-md pb-1">{color.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Card 3: Leg & Finish */}
          <div className="bg-[#f8f6f4] rounded-2xl p-6 shadow-sm">
            {/* Leg & Finish Section */}
            <div>
              <h2 className="text-[18px] font-medium mb-4 text-gray-900">Leg & Finish</h2>
             <div 
               className="flex justify-between items-center mb-4 cursor-pointer"
               onClick={() => toggleSection('legStyle')}
             >
              <h3 className="text-[15px] font-normal uppercase">Leg Style</h3>
              <ChevronUp className={`w-5 h-5 transition-transform ${expandedSections.legStyle ? '' : 'rotate-180'}`} />
            </div>
            
            {expandedSections.legStyle && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { name: 'Tapered', image: '/Tapered.png' },
                  { name: 'Round', image: '/Round.png' },
                  { name: 'Slim', image: '/Slim.png' },
                  { name: 'Block', image: '/Block.png' },
                  { name: 'Turned', image: '/Turned.png' },
                  { name: 'Low Profile', image: '/Low Profile.png' },
                ].map((leg, i) => (
                  <button key={i} className="flex flex-col items-center justify-center p-2 rounded-xl border border-gray-200 hover:border-gray-300 bg-white transition-all h-[105px] group shadow-sm hover:shadow-md">
                    <img src={leg.image} alt={leg.name} className="w-16 h-16 object-contain mb-1 transition-transform group-hover:scale-110 mix-blend-multiply" />
                    <span className="text-[12px] font-normal text-gray-700 text-center leading-none mt-1">{leg.name}</span>
                  </button>
                ))}
              </div>
            )}

            <hr className="border-gray-200 my-6" />

            <div 
              className="flex justify-between items-center mb-4 cursor-pointer"
              onClick={() => toggleSection('woodFinish')}
            >
              <h3 className="text-[15px] font-normal uppercase">Wood Finish</h3>
              <ChevronUp className={`w-5 h-5 transition-transform ${expandedSections.woodFinish ? '' : 'rotate-180'}`} />
            </div>
            
            {expandedSections.woodFinish && (
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Natural Walnut', image: '/Natural Walnut.png' },
                  { name: 'Medium Walnut', image: '/Medium Walnut.png' },
                  { name: 'Dark Walnut', image: '/Dark Walnut.png' },
                  { name: 'Black Oak', image: '/Black Oak.png' },
                  { name: 'Natural Oak', image: '/Natural Oak.png' },
                  { name: 'Smoked Oak', image: '/Smoked Oak.png' },
                ].map((finish, i) => (
                  <button key={i} className="relative flex flex-col items-center justify-end p-2 rounded-xl border border-gray-200 transition-all h-[105px] overflow-hidden group shadow-sm hover:shadow-md">
                    <img src={finish.image} alt={finish.name} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                    <span className="relative text-[12px] font-normal text-white z-10 text-shadow-sm text-center leading-none px-1 drop-shadow-md pb-1">{finish.name}</span>
                  </button>
                ))}
              </div>
            )}
            </div>
          </div>
          
        </div>

        {/* Card 4: Sticky Footer */}
        <div className="p-5 bg-[#f9f8f6] rounded-2xl shadow-sm flex-shrink-0">
            <div className="mb-4">
              <div className="text-[26px] font-normal leading-none text-gray-900">$2,499</div>
              <div className="text-[15px] font-normal leading-none text-gray-600 mt-1">Total Price incl. Taxes</div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 flex justify-between items-center px-4 py-3.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl text-[18px] font-medium leading-none transition-colors">
                <span>Summary</span>
                <ChevronUp className="w-5 h-5 text-gray-500" />
              </button>
              <button className="flex-1 px-4 py-3.5 bg-[#222222] hover:bg-black text-[#ECE8DE] rounded-xl text-[18px] font-medium leading-none shadow-sm transition-colors">
                Add to cart
              </button>
          </div>
        </div>

      </div>

    </div>
  );
}
