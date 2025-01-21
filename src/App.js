import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

const WhiteHouseLogo = () => (
  <svg viewBox="0 0 280 180" className="w-24 mx-auto mb-4">
    <path fill="white" d="M140 20l100 140H40z"/>
    <rect x="80" y="100" width="120" height="60" fill="white"/>
    <rect x="120" y="80" width="40" height="80" fill="white"/>
  </svg>
);

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Simulated search data
  const searchableContent = [
    { type: 'person', title: 'John P. G. Ross III', description: 'President of the United States' },
    { type: 'person', title: 'JD Vance', description: 'Vice President of the United States' },
    { type: 'person', title: 'Melania Trump', description: 'First Lady of the United States' },
    { type: 'section', title: 'Executive Actions', description: 'Latest executive orders and actions' },
    { type: 'section', title: 'The Cabinet', description: 'Of the 97th Administration' },
    { type: 'news', title: 'Latest Address', description: 'Presidential address to the nation' },
    { type: 'The Office', title: 'President of the United States', description: 'The President' },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = searchableContent.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 transition-opacity duration-300">
      <div className="max-w-4xl mx-auto pt-24 px-6">
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-white text-4xl border-b-2 border-white pb-4 focus:outline-none placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
          </div>
          <button 
            onClick={onClose}
            className="ml-6 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
        </div>
        
        <div className="mt-12">
          {searchResults.map((result, index) => (
            <div 
              key={index}
              className="border-b border-gray-700 py-6 text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="text-sm text-gray-400 mb-2">
                {result.type.toUpperCase()}
              </div>
              <div className="text-xl mb-1">{result.title}</div>
              <div className="text-gray-400">{result.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0d142c] text-white">
        <div className="flex justify-between items-center px-6 py-3">
          <button className="flex items-center space-x-2">
            <Menu className="h-5 w-5" />
            <span className="text-sm">Menu</span>
          </button>
          <div className="flex space-x-8">
            <a href="#news" className="hover:text-gray-300">NEWS</a>
            <a href="#administration" className="hover:text-gray-300">ADMINISTRATION</a>
            <a href="#issues" className="hover:text-gray-300">ISSUES</a>
          </div>
          <button 
            className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <span className="text-sm">Search</span>
            <Search className="h-5 w-5" />
          </button>
        </div>
      </header>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

const Hero = () => (
  <div className="bg-[#0d142c] text-white relative min-h-screen">
    <div className="pt-16 pb-32 text-center">
      <WhiteHouseLogo />
      <h1 className="text-4xl font-serif mb-2">THE WHITE HOUSE</h1>
      <p className="text-sm mb-16">PRESIDENT JOHN P. G. ROSS III</p>
      <div className="relative">
        <img 
          src="/carney.png" 
          alt="Presidential" 
          className="w-full h-[80vh] object-contain mx-auto my-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d142c]" />
        <h2 className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-6xl font-serif tracking-wider">
          AMERICA IS BACK
        </h2>
        <p className="absolute bottom-16 left-1/2 transform -translate-x-1/2 max-w-3xl text-center italic px-4">
          Every single day I will be fighting for you with every breath in my body. I will not rest until we have
          delivered the strong, safe and prosperous America that our children deserve and that you deserve.
          This will truly be the golden age of America.
        </p>
      </div>
      <div className="mt-8 flex justify-center items-center space-x-4">
        <div className="border-2 border-white p-2">
          <span className="text-2xl">97</span>
        </div>
        <img src="/presidential-signature.png" alt="Signature" className="h-12" />
      </div>
    </div>
  </div>
);

const ActionCard = ({ title, image }) => (
  <div className="relative group cursor-pointer overflow-hidden">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
    <h3 className="absolute bottom-8 left-8 text-white text-3xl font-serif">{title}</h3>
  </div>
);

const AdminCard = ({ name, title, image }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity" />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-2xl font-serif uppercase">{name}</h3>
      <p className="text-xs uppercase tracking-wider mt-1 text-gray-600">{title}</p>
    </div>
  </div>
);

const MainContent = () => (
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid md:grid-cols-2 gap-8 mb-24">
      <ActionCard title="Executive Actions" image="/wh47-executive-orders.jpg" />
      <ActionCard title="News" image="/rosswithpress.jpg" />
    </div>
    
    <section>
      <h2 className="text-2xl font-serif mb-12">The Administration</h2>
      <div className="grid md:grid-cols-4 gap-8">
        <AdminCard 
          name="JOHN P. G. ROSS III" 
          title="PRESIDENT OF THE UNITED STATES" 
          image="/carney.png" 
        />
        <AdminCard 
          name="JD VANCE" 
          title="VICE PRESIDENT OF THE UNITED STATES" 
          image="/api/placeholder/400/600" 
        />
        <AdminCard 
          name="PRESIDENT IS TOO BUSY FOR A" 
          title="FIRST LADY OF THE UNITED STATES" 
          image="/api/placeholder/400/600" 
        />
        <AdminCard 
          name="THE CABINET" 
          title="OF THE 97TH ADMINISTRATION" 
          image="/api/placeholder/400/600" 
        />
      </div>
    </section>
  </div>
);

const Footer = () => (
  <footer className="bg-[#0d142c] text-white">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <nav className="space-y-4">
            <a href="#news" className="block hover:text-gray-300">News</a>
            <a href="#administration" className="block hover:text-gray-300">Administration</a>
            <a href="#issues" className="block hover:text-gray-300">Issues</a>
          </nav>
        </div>
        <div>
          <h3 className="text-2xl font-serif mb-4">THE WHITE HOUSE</h3>
          <p>1600 Pennsylvania Ave NW</p>
          <p>Washington, DC 20500</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">X</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
        <a href="#" className="text-sm hover:text-gray-300">WH.GOV</a>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300">Copyright</a>
          <a href="#" className="hover:text-gray-300">Privacy</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <Hero />
    <MainContent />
    <Footer />
  </div>
);

export default App;
