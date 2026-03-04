import { Search, Play, Plus, Star, Check, ChevronLeft, ChevronRight, PlayCircle, Sparkles, Globe, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-red-600 selection:text-white pb-20">
      {/* Header */}
      <header className="absolute top-0 w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-3xl font-black tracking-tighter">GATEPLAY</div>
        
        <nav className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-white/10">
          <Link href="#" className="px-5 py-1.5 rounded-full bg-white/20 text-sm font-medium">Movie</Link>
          <Link href="#" className="px-5 py-1.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors text-gray-300">TV Show</Link>
          <Link href="#" className="px-5 py-1.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors text-gray-300">Originals</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
            <Search className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full pl-1 pr-4 py-1 cursor-pointer hover:bg-white/20 transition-colors border border-white/10">
            <div className="w-8 h-8 rounded-full overflow-hidden relative">
              <Image src="https://picsum.photos/seed/user/100/100" alt="User" fill className="object-cover" />
            </div>
            <span className="text-sm font-medium">Eugene Gilev</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/scifi-movie/1920/1080" 
            alt="The Silence" 
            fill 
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent h-full" />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto w-full flex justify-between items-end pb-12">
          <div className="max-w-2xl">
            <div className="inline-block px-2 py-1 mb-4 text-[10px] font-bold uppercase tracking-wider bg-transparent rounded text-white border-l-2 border-[#E50914] pl-2">
              #1 in the US
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">The Silence</h1>
            <p className="text-base text-gray-300 mb-8 max-w-xl leading-relaxed">
              When the world is under attack by a swarm of creatures called vesps, Ally, a teenager who is aurally impaired, and her family take refuge in a house in a remote place.
            </p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-[#E50914] hover:bg-[#B81D24] text-white px-6 py-2.5 rounded font-semibold transition-colors text-sm">
                <span>PLAY NOW</span>
                <Play className="w-4 h-4 fill-current" />
              </button>
              <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2.5 rounded font-semibold transition-colors text-sm border border-white/10">
                <span>MY LIST</span>
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-row space-x-4">
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md p-2.5 rounded-xl border border-white/10 pr-6">
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                <Image src="https://picsum.photos/seed/actor1/100/100" alt="John Krasinski" fill className="object-cover" />
              </div>
              <div>
                <div className="font-semibold text-sm">John Krasinski</div>
                <div className="text-[10px] text-gray-400">American actor and filmmaker</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md p-2.5 rounded-xl border border-white/10 pr-6">
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                <Image src="https://picsum.photos/seed/actor2/100/100" alt="Emily Blunt" fill className="object-cover" />
              </div>
              <div>
                <div className="font-semibold text-sm">Emily Blunt</div>
                <div className="text-[10px] text-gray-400">British actress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Today */}
      <section className="px-6 md:px-12 py-8 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Today</h2>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded bg-[#1A1A1A] hover:bg-white/10 border border-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1.5 rounded bg-[#1A1A1A] hover:bg-white/10 border border-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { title: 'Money Heist', year: '2017', genre: 'Thriller', rating: 5, tag: 'TV-MA', img: 'heist' },
            { title: 'Cargo', year: '2017', genre: 'Drama/Thriller', duration: '2h 45m', rating: 4, tag: 'TV-MA', img: 'cargo' },
            { title: 'Spaceman', year: '2024', genre: 'Sci-fi/Action', duration: '1h 47m', rating: 4, tag: 'TV-14', img: 'space' },
            { title: 'The Matrix', year: '1999', genre: 'Sci-fi/Action', duration: '2h 16m', rating: 5, tag: 'R', img: 'matrix' },
          ].map((item, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[320px] group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3 border border-white/5 group-hover:border-white/20 transition-colors">
                <Image src={`https://picsum.photos/seed/${item.img}/600/338`} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-semibold border border-white/10">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <div className="text-[11px] text-gray-400 flex items-center space-x-1.5 mt-0.5">
                    <span>{item.year}</span>
                    <span>•</span>
                    <span>{item.genre}</span>
                    {item.duration && (
                      <>
                        <span>•</span>
                        <span>{item.duration}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex space-x-0.5 mt-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-3 h-3 ${j < item.rating ? 'fill-[#E50914] text-[#E50914]' : 'text-gray-600'}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-6 md:px-12 py-20 bg-[#161616] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Curated, Not Chaotic —<br/>
              <span className="text-gray-300">Where Every Story Is Chosen</span>
            </h2>
            <p className="text-gray-400 text-sm mb-10 max-w-md leading-relaxed">
              GatePlay replaces endless scrolling with intentional discovery. Every film and series is carefully selected for craft, perspective, and lasting impact — so you spend less time searching and more time truly watching.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#161616] overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-[10px] text-gray-400">Trusted by :</div>
                <div className="font-bold text-[#E50914] text-sm">10,000+ Users</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-4 p-5 rounded-xl bg-transparent border border-transparent hover:border-white/5 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-300">No Algorithm Noise</h3>
                <p className="text-xs text-gray-500 leading-relaxed">We don't rely on endless recommendations or data-driven overload. Instead of chasing trends, we focus on thoughtful selection — so discovery feels calm, personal, and free from digital clutter.</p>
              </div>
            </div>
            
            <div className="flex space-x-4 p-5 rounded-xl bg-[#1A1A1A] border border-white/10 shadow-lg shadow-black/50">
              <div className="flex-shrink-0 mt-1">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Handpicked Weekly</h3>
                <p className="text-xs text-gray-400 leading-relaxed">New selections thoughtfully chosen by our editors and refreshed every week. We spotlight films and series defined by craft, originality, and emotional depth — stories that deserve attention, not just attention spans.</p>
              </div>
            </div>

            <div className="flex space-x-4 p-5 rounded-xl bg-transparent border border-transparent hover:border-white/5 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <Globe className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-300">Global Perspectives</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Discover stories shaped by diverse cultures, voices, and experiences from around the world. GatePlay brings you cinema that expands your view — authentic narratives that connect beyond borders and trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Watching */}
      <section className="px-6 md:px-12 py-8 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Continue Watching</h2>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded bg-[#1A1A1A] hover:bg-white/10 border border-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1.5 rounded bg-[#1A1A1A] hover:bg-white/10 border border-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { title: 'Final Destination Bloodlines', progress: 30, time: '00:34:18', total: '01:42:00', img: 'dest' },
            { title: 'Weapons', progress: 60, time: '00:52:41', total: '01:50:00', img: 'weap' },
            { title: 'Meet, Greet & Bye', progress: 15, time: '00:17:26', total: '01:38:00', img: 'meet' },
          ].map((item, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[320px] group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3 border border-white/5">
                <Image src={`https://picsum.photos/seed/${item.img}/600/338`} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>
                
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full bg-[#E50914]" style={{ width: `${item.progress}%` }} />
                </div>
                <div className="absolute bottom-2 left-2 text-[9px] font-mono bg-black/60 px-1.5 py-0.5 rounded">{item.time}</div>
                <div className="absolute bottom-2 right-2 text-[9px] font-mono bg-black/60 px-1.5 py-0.5 rounded">{item.total}</div>
              </div>
              <h3 className="font-semibold text-sm">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's picks */}
      <section className="px-6 md:px-12 py-8 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Editor's picks for this week</h2>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded bg-[#1A1A1A] hover:bg-white/10 border border-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1.5 rounded bg-[#1A1A1A] hover:bg-white/10 border border-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { title: 'Roofman', year: '2025', genre: 'Comedy/Drama', duration: '2h 6m', rating: 5, tag: 'TV-MA', img: 'roof' },
            { title: 'Nobody 2', year: '2025', genre: 'Action/Thriller', duration: '1h 29m', rating: 5, tag: 'R', img: 'nobody' },
            { title: 'Interstellar', year: '2014', genre: 'Sci-fi/Adventure', duration: '2h 49m', rating: 5, tag: 'PG-13', img: 'inter' },
          ].map((item, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[320px] group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3 border border-white/5 group-hover:border-white/20 transition-colors">
                <Image src={`https://picsum.photos/seed/${item.img}/600/338`} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-semibold border border-white/10">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <div className="text-[11px] text-gray-400 flex items-center space-x-1.5 mt-0.5">
                    <span>{item.year}</span>
                    <span>•</span>
                    <span>{item.genre}</span>
                    {item.duration && (
                      <>
                        <span>•</span>
                        <span>{item.duration}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex space-x-0.5 mt-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-3 h-3 ${j < item.rating ? 'fill-[#E50914] text-[#E50914]' : 'text-gray-600'}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Originals */}
      <section className="px-6 md:px-12 py-8 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Originals by GatePlay</h2>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded bg-[#1A1A1A] hover:bg-white/10 border border-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1.5 rounded bg-[#1A1A1A] hover:bg-white/10 border border-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { title: 'Midnight Corridor', year: '2015', genre: 'Psychological Thriller', duration: '2h 30m', rating: 5, tag: 'R', img: 'mid' },
            { title: 'The Conjuring', year: '2013', genre: 'Sci-fi/Action', duration: '2h 2m', rating: 5, tag: 'R', img: 'conj' },
            { title: 'Stranger Things', year: '2016', genre: 'Horror', duration: '', rating: 5, tag: 'R', img: 'stranger' },
          ].map((item, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[320px] group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3 border border-white/5 group-hover:border-white/20 transition-colors">
                <Image src={`https://picsum.photos/seed/${item.img}/600/338`} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-semibold border border-white/10">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <div className="text-[11px] text-gray-400 flex items-center space-x-1.5 mt-0.5">
                    <span>{item.year}</span>
                    <span>•</span>
                    <span>{item.genre}</span>
                    {item.duration && (
                      <>
                        <span>•</span>
                        <span>{item.duration}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex space-x-0.5 mt-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-3 h-3 ${j < item.rating ? 'fill-[#E50914] text-[#E50914]' : 'text-gray-600'}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-16 py-24 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Open the Gate. Choose<br/>Your Experience.</h2>
          <p className="text-gray-400 text-lg">
            Behind every gate is a world of carefully chosen films and series.<br/>
            Select the experience that matches your rhythm — and let the stories unfold.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1 */}
          <div className="bg-[#161616] border border-white/10 rounded-3xl p-8 flex flex-col">
            <div className="mb-8">
              <div className="text-3xl font-bold mb-2">$7.99 <span className="text-lg text-gray-500 font-normal">/ MONTH</span></div>
              <p className="text-sm text-gray-400">Intentional access to curated films and series.</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['Unlimited streaming', 'HD quality', 'Weekly editor\'s picks', 'Offline downloads', 'Early access to GatePlay Originals', 'Mobile & tablet access'].map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm">
                  <Check className="w-5 h-5 text-gray-400 shrink-0" />
                  <span className={i > 2 ? 'text-gray-500' : 'text-gray-300'}>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-sm transition-colors flex items-center justify-center space-x-2">
              <span>BEGIN WITH ESSENTIAL</span>
              <Play className="w-4 h-4 fill-current" />
            </button>
          </div>

          {/* Tier 2 */}
          <div className="bg-gradient-to-b from-[#222] to-[#161616] border border-white/20 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E50914] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div className="mb-8">
              <div className="text-3xl font-bold mb-2">$12.99 <span className="text-lg text-gray-400 font-normal">/ MONTH</span></div>
              <p className="text-sm text-gray-300">The full curated experience.</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['Unlimited streaming', 'HD quality', 'Weekly editor\'s picks', 'Offline downloads', 'Early access to GatePlay Originals', 'Mobile & tablet access'].map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-[#E50914] hover:bg-[#B81D24] font-semibold text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-red-500/20">
              <span>UNLOCK FULL ACCESS</span>
              <Play className="w-4 h-4 fill-current" />
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-[#161616] border border-white/10 rounded-3xl p-8 flex flex-col">
            <div className="mb-8">
              <div className="text-3xl font-bold mb-2">$18.99 <span className="text-lg text-gray-500 font-normal">/ MONTH</span></div>
              <p className="text-sm text-gray-400">For true cinema lovers</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['Everything in Plus', '4K Ultra HD', 'Unlimited devices', 'Exclusive premieres', 'Behind-the-scenes content', 'Creator Q&A access'].map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm">
                  <Check className="w-5 h-5 text-gray-400 shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-sm transition-colors flex items-center justify-center space-x-2">
              <span>STEP INTO PREMIERE</span>
              <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>
      </section>

      {/* App Promo */}
      <section className="px-6 md:px-12 py-20 max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-r from-[#161616] to-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col md:flex-row items-center relative">
          <div className="w-full md:w-1/2 p-10 md:p-16 z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Open the Gate to<br/>Stories That Stay<br/>With You.
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
              Beyond the algorithm lies something rare — cinema shaped by human taste. Enter a space where stories are not pushed, but carefully presented.
            </p>
            <button className="bg-[#E50914] hover:bg-[#B81D24] text-white px-6 py-3 rounded font-semibold transition-colors flex items-center space-x-2 text-sm w-fit">
              <span>START FREE TRIAL</span>
              <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] overflow-hidden">
             {/* Abstract representation of phones/app interface */}
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/appbg/800/800')] bg-cover bg-center opacity-20 mix-blend-overlay" />
             <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-l from-transparent to-[#161616] z-10" />
             
             <div className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 w-48 md:w-64 h-[400px] md:h-[500px] bg-black rounded-[2rem] border-[6px] border-gray-800 overflow-hidden shadow-2xl rotate-[-5deg] z-20">
                <Image src="https://picsum.photos/seed/poster1/400/800" alt="App Screen" fill className="object-cover opacity-80" />
             </div>
             <div className="absolute -right-10 md:right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 h-[400px] md:h-[500px] bg-black rounded-[2rem] border-[6px] border-gray-800 overflow-hidden shadow-2xl rotate-[5deg] z-30 mt-10">
                <Image src="https://picsum.photos/seed/poster2/400/800" alt="App Screen" fill className="object-cover opacity-90" />
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 pt-20 pb-10 border-t border-white/10 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Stay Inside the Gate.</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              Get updates on new releases, original premieres, and curated recommendations.
            </p>
            <div className="flex max-w-sm bg-[#161616] border border-white/10 rounded-full overflow-hidden p-1 mb-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-transparent border-none outline-none px-4 py-2 w-full text-sm text-white placeholder-gray-500"
              />
              <button className="bg-[#E50914] hover:bg-[#B81D24] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input type="checkbox" className="mt-1 rounded border-gray-600 bg-transparent text-[#E50914] focus:ring-[#E50914]" />
              <span className="text-xs text-gray-500">I agree to receive curated updates from GatePlay.</span>
            </label>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-sm">Explore</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Browse</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Genres</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Editor's Picks</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">GatePlay Originals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm">Company</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About GatePlay</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partnerships</Link></li>
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-center items-center opacity-10 select-none pointer-events-none mt-10">
          <h1 className="text-[18vw] font-black tracking-tighter leading-none m-0 p-0">GATEPLAY</h1>
        </div>
      </footer>
    </div>
  );
}
