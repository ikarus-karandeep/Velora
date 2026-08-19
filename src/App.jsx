import { useState, useRef } from "react";
import { ChevronUp, Undo, Redo, RotateCcw, Maximize, Sofa, Columns, Disc, Layers } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState('layout');
  const [expandedSections, setExpandedSections] = useState({
    layout: true,
    fabricMaterial: true,
    fabricColor: true,
    woodFinish: true
  });

  const [selectedConfig, setSelectedConfig] = useState({
    layout: '2 Seater',
    fabricMaterial: 'Linen',
    fabricColor: 'Linen_Warm Taupe',
    woodFinish: 'Natural Walnut'
  });

  const [activeLayoutCategory, setActiveLayoutCategory] = useState('Straight');

  const layoutRef = useRef(null);
  const fabricRef = useRef(null);
  const legRef = useRef(null);

  const scrollToSection = (id) => {
    setActiveTab(id);
    if (id === 'layout' && layoutRef.current) layoutRef.current.scrollIntoView({ behavior: 'smooth' });
    if (id === 'wood' && fabricRef.current) fabricRef.current.scrollIntoView({ behavior: 'smooth' });
    if (id === 'leg' && legRef.current) legRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Map internal state keys to the URL Keys defined in the Ikarus Editor Addons panel
  // Update the values below if your editor URL Keys are different.
  const URL_KEYS = {
    layout: 'layout', 
    fabricMaterial: 'fabric material',
    fabricColor: 'fabric color',
    woodFinish: 'wood finish'
  };

  const layoutCategories = [
    { 
      name: 'Straight', image: '/Straight.png',
      options: ['2 Seater', '3 Seater', '4 Seater', 'Loveseat']
    },
    { 
      name: 'L- Shape', image: '/L- Shape left.png',
      options: ['Left Chaise', 'Right Chaise', 'L- Shape left', 'L- Shape right', 'Double Chaise']
    },
    { 
      name: 'U Shape', image: '/U Shape.png', 
      options: ['U- Shape', 'U Ottoman'] 
    },
    { 
      name: 'Ottoman', image: '/Ottoman.png', 
      options: ['Sofa + Ottoman', 'Centre Ottoman', 'Left Ottoman', 'Right Ottoman', 'U Ottoman'] 
    },
    // { 
    //   name: 'Corner', image: '/Corner.png', 
    //   options: ['Angle + Corner', 'Corner + Armless'] 
    // },
    // { 
    //   name: 'Special', image: '/Special.png', 
    //   options: ['Open end left', 'Open end right', 'Modular 3 piece', 'Modular 4 piece', 'Conversational', 'Curved'] 
    // }
  ];

  const sendConfiguration = (configToSend) => {
    const iframe = document.getElementById('ikarus-configurator');
    if (iframe && iframe.contentWindow) {
      const formattedConfig = {};
      Object.keys(configToSend).forEach(key => {
        if (URL_KEYS[key]) {
          if (key === 'layout') {
            formattedConfig[URL_KEYS[key]] = configToSend[key];
          } else {
            formattedConfig[URL_KEYS[key]] = configToSend[key];
          }
        }
      });

      console.log('--- DEBUG: Sending Config to Ikarus ---');
      console.log('Raw State:', configToSend);
      console.log('Formatted Payload being sent:', formattedConfig);

      iframe.contentWindow.postMessage({
        type: 'IKARUS_CONFIG',
        config: formattedConfig
      }, '*');
    } else {
      console.warn('--- DEBUG: Iframe not found or not ready ---');
    }
  };

  const fabricColorOptions = {
    default: [
      { name: 'Warm Taupe', image: '/Warm Taupe.png' },
      { name: 'Mocha Brown', image: '/Mocha Brown.png' },
      { name: 'Charcoal Brown', image: '/Charcoal Brown.png' },
      { name: 'Olive Taupe', image: '/Olive Taupe.png' },
      { name: 'Forest Olive', image: '/Forest Olive.png' },
      { name: 'Graphite', image: '/Graphite.png' },
    ],
    Leather: [
      { name: 'Leather_Rust Terracota', image: 'icons/Leather_Rust Terracotta.webp' },
      { name: 'Leather_Saddle Brown', image: 'icons/Leather_Mocha Brown.webp' },
      { name: 'Leather_Sage Green', image: 'icons/Leather_Sage Green.webp' },
      { name: 'Leather_Sand Beige', image: 'icons/Leather_Sand Biege.webp' },
      { name: 'Leather_Sapphire Mist', image: 'icons/Leather_Deep Blue.webp' },
      { name: 'Leather_Warm Taupe', image: 'icons/Leather_Warm Taupe.webp' },
    ],
    Velvet: [
      { name: 'Velvet_Rust Terracota', image: 'icons/Velvet_Rust Terracotta.webp' },
      { name: 'Velvet_Warm Taupe', image: 'icons/Velvet_Warm Taupe.webp' },
      { name: 'Velvet_Saddle Brown', image: 'icons/Velvet_Mocha Brown.webp' },
      { name: 'Velvet_Sage Green', image: 'icons/Velvet_Sage Green.webp' },
      { name: 'Velvet_Sand Beige', image: 'icons/Velvet_Sand Biege.webp' },
      { name: 'Velvet_Sapphire Mist', image: 'icons/Velvet_Deep Blue.webp' },
    ],
    Linen: [
      { name: 'Linen_Rust Terracota', image: 'icons/Linen_Rust Terracotta.webp' },
      { name: 'Linen_Warm Taupe', image: 'icons/Linen_Warm Taupe.webp' },
      { name: 'Linen_Saddle Brown', image: 'icons/Linen_Mocha Brown.webp' },
      { name: 'Linen_Sage Green', image: 'icons/Linen_Sage Green.webp' },
      { name: 'Linen_Sand Beige', image: 'icons/Linen_Sand Biege.webp' },
      { name: 'Linen_Sapphire Mist', image: 'icons/Linen_Deep Blue.webp' },
    ],
    Boucle: [
      { name: 'Boucle_Rust Terracota', image: 'icons/Boucle_Rust Terracotta.webp' },
      { name: 'Boucle_Warm Taupe', image: 'icons/Boucle_Warm Taupe.webp' },
      { name: 'Boucle_Saddle Brown', image: 'icons/Boucle_Mocha Brown.webp' },
      { name: 'Boucle_Sage Green', image: 'icons/Boucle_Sage Green.webp' },
      { name: 'Boucle_Sand Beige', image: 'icons/Boucle_Sand Biege.webp' },
      { name: 'Boucle_Sapphire Mist', image: 'icons/Boucle_Deep Blue.webp' },
    ],
    Suede: [
      { name: 'Suede_Rust Terracota', image: '/icons/Suede_Rust Terracotta.webp' },
      { name: 'Suede_Warm Taupe', image: 'icons/Suede_Warm Taupe.webp' },
      { name: 'Suede_Saddle Brown', image: 'icons/Suede_Mocha Brown.webp' },
      { name: 'Suede_Sage Green', image: 'icons/Suede_Sage Green.webp' },
      { name: 'Suede_Sand Beige', image: 'icons/Suede_Sand Biege.webp' },
      { name: 'Suede_Sapphire Mist', image: 'icons/Suede_Deep Blue.webp' },
    ],
    Corduroy: [
      { name: 'Corduroy_Rust Terracota', image: 'icons/Corduroy_Rust Terracotta.webp' },
      { name: 'Corduroy_Warm Taupe', image: 'icons/Corduroy_Warm Taupe.webp' },
      { name: 'Corduroy_Saddle Brown', image: 'icons/Corduroy_Mocha Brown.webp' },
      { name: 'Corduroy_Sage Green', image: 'icons/Corduroy_Sage Green.webp' },
      { name: 'Corduroy_Sand Beige', image: 'icons/Corduroy_Sand Biege.webp' },
      { name: 'Corduroy_Sapphire Mist', image: 'icons/Corduroy_Deep Blue.webp' },
    ]
  };



  const renderSubmenu = (categoryName) => {
    const category = layoutCategories.find(c => c.name === categoryName);
    if (!category) return null;
    const index = layoutCategories.findIndex(c => c.name === categoryName);
    const col = index % 3;
    let caretClass = '';
    if (col === 0) caretClass = 'left-[16.6%]';
    if (col === 1) caretClass = 'left-[50%]';
    if (col === 2) caretClass = 'left-[83.3%]';

    return (
      <div className="mt-3 bg-white p-3 rounded-xl shadow-sm relative z-10 w-full animate-in fade-in slide-in-from-top-2">
        <div className={`absolute -top-2 w-4 h-4 bg-white transform rotate-45 -translate-x-1/2 ${caretClass}`}></div>
        <div className="relative z-10 grid grid-cols-2 gap-2">
          {category.options.map((opt, i) => (
            <button 
              key={i}
              onClick={() => handleOptionSelect('layout', opt)}
              className={`py-2 px-3 text-[13px] rounded-lg transition-colors border-none ${selectedConfig.layout === opt ? 'bg-[#373737] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const currentColors = fabricColorOptions[selectedConfig.fabricMaterial] || fabricColorOptions.default;

  const handleOptionSelect = (category, optionName) => {
    const newConfig = { ...selectedConfig, [category]: optionName };
    
    // Auto-select first color if material changes
    if (category === 'fabricMaterial') {
      const colors = fabricColorOptions[optionName] || fabricColorOptions.default;
      newConfig.fabricColor = colors[0].name;
    }

    setSelectedConfig(newConfig);
    sendConfiguration(newConfig);
  };

  return (
    <div className="flex flex-col lg:flex-row fixed inset-0 bg-white text-gray-900 font-sans overflow-hidden p-2 gap-3 lg:p-2 lg:gap-2">
      
      {/* LEFT: Viewer Area */}
      <div className="relative flex-1 lg:h-full lg:flex-1 min-h-0 bg-white flex flex-col items-center justify-center rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Branding */}
        {/* <div className="absolute top-6 left-6 flex items-center space-x-2 z-10">
          <div className="text-xl font-bold tracking-tight flex items-center">
            <Sofa className="w-6 h-6 mr-2 text-gray-700" /> VELORA
          </div>
        </div> */}

        {/* Floating Right Toolbar */}
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-2 p-2 bg-[#f8f6f4] rounded-2xl z-10 border border-gray-100/50 shadow-sm">
          {[
            { id: 'layout', src: '/Layout.png', alt: 'Layout' },
            { id: 'wood', src: '/wood.png', alt: 'Wood Finish' },
            { id: 'leg', src: '/Leg.png', alt: 'Leg Style' },
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
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
                    ? 'w-10 h-10 opacity-100' 
                    : 'w-10 h-10 opacity-60 group-hover:opacity-100'
                }`} 
              />
            </button>
          ))}
        </div>

        {/* Iframe for 3D Viewer */}
        <div className="w-full h-full flex items-center justify-center">
          {/* Replace this with actual iframe link */}
          <iframe 
            id="ikarus-configurator"
            src="https://beta-viewer.ikarusdelta.com/product/v6?id=cc42abcb-f527-4225-a836-355ab4176d32" 
            title="3D Viewer"
            className="w-full h-full border-0 bg-transparent rounded-xl pointer-events-auto"
            sandbox="allow-scripts allow-same-origin"
            onLoad={() => sendConfiguration(selectedConfig)}
          />
        </div>

        {/* Bottom Toolbar */}
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10 w-max">
          <div className="flex bg-white/80 backdrop-blur-md rounded-lg shadow-sm border border-gray-200 p-1">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><Undo className="w-4 h-4 text-gray-600" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><Redo className="w-4 h-4 text-gray-600" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><RotateCcw className="w-4 h-4 text-gray-600" /></button>
            <div className="w-px h-6 bg-gray-200 mx-1 self-center"></div>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><Maximize className="w-4 h-4 text-gray-600" /></button>
          </div>
          
          <button className="hidden lg:flex items-center space-x-2 bg-white/80 backdrop-blur-md hover:bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 transition-colors text-sm font-medium text-gray-700">
            <Disc className="w-4 h-4" />
            <span>View in your space</span>
          </button>
        </div> */}
      </div>

      {/* RIGHT PANEL: Configurator Sidebar */}
      <div className="w-full flex-1 lg:h-full lg:w-[408px] lg:flex-none min-h-0 flex flex-col z-20 gap-3 overflow-hidden">
        
        {/* Scrollable Content */}
        <div className="flex-1 rounded-2xl min-h-0 overflow-y-auto pb-4 lg:pb-0 no-scrollbar">
          <div className="flex flex-col gap-3">
          
          {/* Card 1: Layouts */}
          <div ref={layoutRef} className="bg-[#f8f6f4] rounded-2xl p-6 shadow-sm">
            {/* Layouts Section */}
            <div>
              <h2 className="text-[18px] font-medium mb-4 text-gray-900">Layouts</h2>
              <hr className="border-gray-200 my-6" />
              <div 
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => toggleSection('layout')}
              >
                <h3 className="text-[15px] font-normal uppercase">Choose Layout</h3>
                <ChevronUp className={`w-5 h-5 transition-transform ${expandedSections.layout ? '' : 'rotate-180'}`} />
              </div>
              
              {expandedSections.layout && (
                <div className="flex flex-col">
                  {/* Top Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {layoutCategories.slice(0, 3).map((category, i) => (
                      <div 
                        key={i} 
                        onClick={() => {
                          if (activeLayoutCategory === category.name) {
                            setActiveLayoutCategory(null);
                          } else {
                            setActiveLayoutCategory(category.name);
                            handleOptionSelect('layout', category.options[0]);
                          }
                        }}
                        className={`relative flex flex-col items-center justify-center p-2 rounded-xl border ${activeLayoutCategory === category.name ? 'border-[#373737] bg-[#4a4a4a] text-white shadow-md' : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'} transition-all h-[75px] lg:h-[105px] group cursor-pointer`}
                      >
                        <img src={category.image} alt={category.name} className={`w-10 h-10 lg:w-16 lg:h-16 object-contain mb-1 transition-transform group-hover:scale-110`} />
                        <span className={`text-[11px] lg:text-[12px] font-normal text-center leading-none mt-1`}>{category.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Submenu for top row */}
                  {activeLayoutCategory && layoutCategories.slice(0, 3).find(c => c.name === activeLayoutCategory) && renderSubmenu(activeLayoutCategory)}

                  {/* Bottom Row */}
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    {layoutCategories.slice(3, 6).map((category, i) => (
                      <div 
                        key={i} 
                        onClick={() => {
                          if (activeLayoutCategory === category.name) {
                            setActiveLayoutCategory(null);
                          } else {
                            setActiveLayoutCategory(category.name);
                            handleOptionSelect('layout', category.options[0]);
                          }
                        }}
                        className={`relative flex flex-col items-center justify-center p-2 rounded-xl border ${activeLayoutCategory === category.name ? 'border-[#373737] bg-[#4a4a4a] text-white shadow-md' : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'} transition-all h-[75px] lg:h-[105px] group cursor-pointer`}
                      >
                        <img src={category.image} alt={category.name} className={`w-10 h-10 lg:w-16 lg:h-16 object-contain mb-1 transition-transform group-hover:scale-110`} />
                        <span className={`text-[11px] lg:text-[12px] font-normal text-center leading-none mt-1`}>{category.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Submenu for bottom row */}
                  {activeLayoutCategory && layoutCategories.slice(3, 6).find(c => c.name === activeLayoutCategory) && renderSubmenu(activeLayoutCategory)}
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Upholstery Fabric */}
          <div ref={fabricRef} className="bg-[#f8f6f4] rounded-2xl p-6 shadow-sm">
            {/* Upholstery Fabric Section */}
            <div>
              <h2 className="text-[18px] font-medium mb-4 text-gray-900">Upholstery Fabric</h2>
              <hr className="border-gray-200 my-6" />
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
                    { name: 'Boucle', image: '/Boucle.png' },
                    { name: 'Corduroy', image: '/Corduroy.png' },
                    { name: 'Velvet', image: '/Velvet.png' },
                  ].map((material, i) => (
                    <div 
                      key={i} 
                      onClick={() => handleOptionSelect('fabricMaterial', material.name)}
                      className={`relative flex flex-col items-center justify-end h-[60px] rounded-[30px] border ${selectedConfig.fabricMaterial === material.name ? 'border-gray-800 ring-2 ring-gray-800' : 'border-gray-200'} transition-all overflow-hidden group shadow-sm hover:shadow-md cursor-pointer`}
                    >
                      <img src={material.image} alt={material.name} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <span className="relative text-[11px] text-white font-medium z-10 text-shadow-sm leading-tight text-center pb-2 drop-shadow-md">{material.name}</span>
                    </div>
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
                   {currentColors.map((color, i) => (
                    <div 
                      key={i} 
                      onClick={() => handleOptionSelect('fabricColor', color.name)}
                      className={`relative flex flex-col items-center justify-end p-2 rounded-xl border ${selectedConfig.fabricColor === color.name ? 'border-gray-800 ring-2 ring-gray-800' : 'border-gray-200'} transition-all h-[75px] lg:h-[105px] overflow-hidden group shadow-sm hover:shadow-md cursor-pointer`}
                    >
                      <img src={color.image} alt={color.name} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <span className="relative text-[11px] lg:text-[12px] font-normal text-white z-10 text-shadow-sm text-center leading-none px-1 drop-shadow-md pb-1">{color.name.replace(`${selectedConfig.fabricMaterial}_`, '')}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Card 3: Leg & Finish */}
          <div ref={legRef} className="bg-[#f8f6f4] rounded-2xl p-6 shadow-sm">
            {/* Leg & Finish Section */}
            <div>
              <h2 className="text-[18px] font-medium mb-4 text-gray-900">Leg & Finish</h2>
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
                  <div 
                    key={i} 
                    onClick={() => handleOptionSelect('woodFinish', finish.name)}
                    className={`relative flex flex-col items-center justify-end p-2 rounded-xl border ${selectedConfig.woodFinish === finish.name ? 'border-gray-800 ring-2 ring-gray-800' : 'border-gray-200'} transition-all h-[75px] lg:h-[105px] overflow-hidden group shadow-sm hover:shadow-md cursor-pointer`}
                  >
                    <img src={finish.image} alt={finish.name} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                    <span className="relative text-[11px] lg:text-[12px] font-normal text-white z-10 text-shadow-sm text-center leading-none px-1 drop-shadow-md pb-1">{finish.name}</span>
                  </div>
                ))}
              </div>
            )}
            </div>
          </div>
          
          </div>
        </div>

        {/* Card 4: Sticky Footer */}
        <div className="p-3 lg:p-5 bg-[#f9f8f6] rounded-2xl shadow-sm flex-shrink-0">
            <div className="mb-2 lg:mb-4 flex flex-row lg:flex-col justify-between items-center lg:items-start">
              <div>
                <div className="text-[22px] lg:text-[26px] font-normal leading-none text-gray-900">$2,499</div>
                <div className="text-[13px] lg:text-[15px] font-normal leading-none text-gray-600 mt-1">Total Price incl. Taxes</div>
              </div>
            </div>
            
            <div className="flex space-x-2 lg:space-x-3">
              <button className="flex-1 flex justify-between items-center px-3 lg:px-4 py-2.5 lg:py-3.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl text-[15px] lg:text-[18px] font-medium leading-none transition-colors">
                <span>Summary</span>
                <ChevronUp className="w-4 h-4 lg:w-5 lg:h-5 text-gray-500" />
              </button>
              <button className="flex-1 px-3 lg:px-4 py-2.5 lg:py-3.5 bg-[#373737] hover:bg-black text-[#ECE8DE] rounded-xl text-[15px] lg:text-[18px] font-medium leading-none shadow-sm transition-colors">
                Add to cart
              </button>
          </div>
        </div>

      </div>

    </div>
  );
}
