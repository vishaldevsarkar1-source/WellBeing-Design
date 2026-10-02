import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_GALLERY, PortfolioItem } from '../data/businessData';
import { ArrowUpRight, X, Layers, Palette, Eye, Upload, RefreshCw, CheckCircle2, Trash2 } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Residential',
  'Living Spaces',
  'Bedrooms',
  'Kitchens',
  'Modern Interiors',
  'Details & Décor',
] as const;

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [customItems, setCustomItems] = useState<PortfolioItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load user uploaded photos from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wellbeing_custom_portfolio_items');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCustomItems(parsed);
        }
      }
    } catch {
      // Storage parsing safety
    }
  }, []);

  const handleMultipleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    const newItems: PortfolioItem[] = [];
    let processedCount = 0;

    const defaultCategories: Array<PortfolioItem['category']> = [
      'Bedrooms',
      'Living Spaces',
      'Modern Interiors',
      'Living Spaces',
      'Bedrooms',
      'Kitchens',
    ];

    const defaultTitles = [
      'Master Bedroom & Powder Blue Vanity Suite',
      'Duplex Architectural Staircase & Nook',
      'Bespoke Salon & Styling Studio Interior',
      'Double-Height Grand Living & TV Feature Wall',
      'Dual-Tone Sliding Wardrobe Suite',
      'L-Shaped Granite Modular Kitchen Layout',
    ];

    fileList.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          const category = defaultCategories[index % defaultCategories.length];
          const title = defaultTitles[index % defaultTitles.length] || `Turnkey Project ${customItems.length + index + 1}`;
          
          newItems.push({
            id: `custom-port-${Date.now()}-${index}`,
            title,
            category,
            categoryLabel: category,
            description: `Authentic completed interior project by WellBeing Design / Art Interiorz in Nagpur showcasing real craftsmanship, bespoke finishes, and functional spatial layout.`,
            image: dataUrl,
            aspect: 'aspect-[4/3]',
            materials: ['Real Site Execution', 'Custom Finishes', 'Architectural Lighting'],
            tone: 'Authentic Project Photo',
          });
        }

        processedCount++;
        if (processedCount === fileList.length) {
          const updated = [...newItems, ...customItems];
          setCustomItems(updated);
          try {
            localStorage.setItem('wellbeing_custom_portfolio_items', JSON.stringify(updated));
          } catch {
            // Storage quota limit fallback
          }
        }
      };
      reader.readAsDataURL(file);
    });

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClearCustomPhotos = () => {
    setCustomItems([]);
    try {
      localStorage.removeItem('wellbeing_custom_portfolio_items');
    } catch {
      // Ignore
    }
  };

  // Combine custom uploaded authentic items with standard portfolio items
  const allItems = [...customItems, ...PORTFOLIO_GALLERY];

  const filteredItems = selectedCategory === 'All'
    ? allItems
    : allItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#F7F4EF] text-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#B08D57]" />
              <span>Project Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#222222] leading-tight">
              Our Completed Spaces
            </h2>
            <p className="mt-3 text-base text-[#77736E] font-light leading-relaxed">
              Explore authentic executed projects, bedrooms, kitchens, living rooms, and bespoke interior executions.
            </p>
          </div>

          {/* Action Bar: Direct Real Photo Upload */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleMultipleFiles}
              multiple
              accept="image/*"
              className="hidden"
              id="portfolio-multiple-upload"
            />
            
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#222222] hover:bg-[#333333] text-white text-xs uppercase tracking-wider font-semibold rounded-md shadow transition-colors cursor-pointer"
              title="Add your 6 photos directly without AI"
            >
              <Upload className="w-4 h-4 text-[#C9B9A5]" />
              <span>Upload Real Photos (Multi-Select)</span>
            </button>

            {customItems.length > 0 && (
              <button
                type="button"
                onClick={handleClearCustomPhotos}
                className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#C9B9A5]/60 hover:bg-[#EDE7DD] text-[#77736E] hover:text-red-700 text-xs rounded-md transition-colors cursor-pointer"
                title="Reset custom uploaded photos"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Reset ({customItems.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs - Interactive Functional Segmented Control */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#C9B9A5]/30 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 rounded-md cursor-pointer ${
                  isActive
                    ? 'bg-[#222222] text-white shadow-sm'
                    : 'text-[#77736E] hover:text-[#222222] hover:bg-[#EDE7DD]/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isCustom = item.id.startsWith('custom-port-');
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-[#C9B9A5]/40 hover:border-[#B08D57] transition-all duration-300 shadow-[0_4px_20px_rgba(74,56,44,0.04)] hover:shadow-[0_12px_30px_rgba(74,56,44,0.1)] flex flex-col"
              >
                {/* Image Container with Elegant Zoom */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#EDE7DD]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-[#222222]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 text-[#222222] text-xs uppercase tracking-wider font-semibold rounded shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5 text-[#B08D57]" />
                      <span>View Project Details</span>
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-[#222222]/85 backdrop-blur-xs text-[#F7F4EF] text-[11px] font-sans tracking-wider uppercase px-2.5 py-1 rounded">
                    {item.categoryLabel}
                  </div>

                  {/* Real Photo Flag if custom */}
                  {isCustom && (
                    <div className="absolute top-3 right-3 bg-emerald-800/90 text-white text-[10px] font-sans tracking-wider uppercase px-2 py-0.5 rounded shadow">
                      Real Photo
                    </div>
                  )}
                </div>

                {/* Card Information */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif-luxury font-medium text-[#222222] group-hover:text-[#4A382C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#77736E] font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#C9B9A5]/30 flex items-center justify-between text-xs">
                    <span className="text-[#4A382C] font-medium">{item.tone}</span>
                    <span className="inline-flex items-center gap-1 text-[#B08D57] font-medium group-hover:translate-x-0.5 transition-transform">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Photography Customization */}
        <div className="mt-12 text-center text-xs text-[#77736E] font-light">
          Photographic concepts demonstrate style, spatial balancing, and finish curation.
        </div>

      </div>

      {/* Modal / Detail Lightbox */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#222222]/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-[#F7F4EF] rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl border border-[#C9B9A5] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-2 bg-[#222222]/80 hover:bg-[#222222] text-white rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-[#EDE7DD] overflow-hidden">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#222222]/80 backdrop-blur-xs text-white text-xs uppercase tracking-wider px-3 py-1 rounded">
                {activeModalItem.categoryLabel}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#222222]">
                  {activeModalItem.title}
                </h3>
                <p className="mt-2 text-sm text-[#77736E] font-light leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>

              {activeModalItem.materials && (
                <div className="pt-3 border-t border-[#C9B9A5]/40">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4A382C] uppercase tracking-wider mb-2">
                    <Layers className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>Material & Finish Palette:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-[#222222]">
                    {activeModalItem.materials.map((m) => (
                      <span key={m} className="px-2.5 py-1 bg-[#EDE7DD] border border-[#C9B9A5]/50 rounded text-[#4A382C]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#C9B9A5]/30">
                <div className="text-xs text-[#77736E]">
                  Looking to incorporate this design aesthetic into your home in Nagpur?
                </div>
                <a
                  href="#contact"
                  onClick={() => setActiveModalItem(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#222222] hover:bg-[#4A382C] rounded transition-colors"
                >
                  <span>Discuss Your Space</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C9B9A5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
