import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Play, Twitter, Instagram, Facebook, MessageCircle, ChevronRight, Flame, User } from 'lucide-react';
import { TransferItem, RumorItem, ClubMove, TopTransfer } from './types';
import Login from './components/Login';
import Standings from './components/Standings';

// Mock Data Updated with real recent news (Simulated Winter 2026 results)
const LIVE_TRANSFERS: TransferItem[] = [
  {
    id: '1',
    player: 'Gonçalo Inácio',
    club: 'Liverpool FC',
    clubLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFJZicCMIl2rI6b-DIfD7Sx0_MBBsrUYv1PmS2ocgr8kc2ZLNctI9LnD_Qgviov6KpRtOZGmoimpbdmrSPm2Xb0qnQVASqwOAV6OJfhILfik6doeV52bncIeVhFIaPH7GzbqHgPijBBTJIo7j18neqGO6XBOpi3Q5eY6D1uV9mnBS-pY055a6Pd6QxGjb1zaYKBfG-Bk0az-V523amy7GG8-M6Av0OjD5GqMlPlFq9MFv1wXRQlArNdNT-3yrq_zWY17tO6henKA',
    type: 'confirmed',
    time: '18:45',
    description: 'Oficial: O central português deixa o Sporting rumo a Anfield por 60M€. Contrato de 5 anos.',
    progress: 100
  },
  {
    id: '2',
    player: 'Álvaro Carreras',
    club: 'SL Benfica',
    clubLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuJl9LmoZ87Ar5605Wg_3RHJA4cR-Vvzu-9MKoKawH1RAWp-VRyuu0OvNpH82RP1xXj0QjvOV3d7zmnZNyAiEeTF-2ARooPI0D13sDrusf0hzv3ApfgzD0GYBLtFZ3TY7WgSvpHuZStxnG6giTSq0w27VCnlydCrsRUhaD4CG2VF1lQRsZjPS5yNkC-b9PDl6NjNlJAtzCzIn51d1SuKCjhw3ukR25Z0moL7DBi8E9jbV4HVV8k40rAbBYwzWFl5Jz02UiTQFXKw',
    type: 'confirmed',
    time: '14:20',
    description: 'Oficial: Benfica exerce opção de compra definitiva pelo lateral espanhol junto do Man United.',
    progress: 100
  },
  {
    id: '3',
    player: 'Francisco Conceição',
    club: 'Juventus FC',
    clubLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuH689ZTu4dpbsNM81N0J4HbUNEOVE7qaDbOAdgjiPifa2QrlEz25Lflf0U4P3qBL6AP-Z-uadKbvX9zmG7JROuc6wElllcm4DD8ePQPa4HKjPpPVbd9j8O1T1TEu6AXQxnnrZK3YjfZ2YOZM4_6TlNsl6AZYFkwGV5fHc4AdbV2LsrtDVHNcKTF-8GkA8aZnI-fhSX5F0RD3PuZf-RX6GK5u0w7lRdhhPkjqEiT85s7ieKUsFz3UfiQLLVuLXU42Uaxi5tOid8w',
    type: 'confirmed',
    time: '10:15',
    description: 'Oficial: Extremo português assina em definitivo pela Vecchia Signora após empréstimo de sucesso.',
    progress: 100
  },
  {
    id: '4',
    player: 'Roger Fernandes',
    club: 'SC Braga',
    clubLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuJl9LmoZ87Ar5605Wg_3RHJA4cR-Vvzu-9MKoKawH1RAWp-VRyuu0OvNpH82RP1xXj0QjvOV3d7zmnZNyAiEeTF-2ARooPI0D13sDrusf0hzv3ApfgzD0GYBLtFZ3TY7WgSvpHuZStxnG6giTSq0w27VCnlydCrsRUhaD4CG2VF1lQRsZjPS5yNkC-b9PDl6NjNlJAtzCzIn51d1SuKCjhw3ukR25Z0moL7DBi8E9jbV4HVV8k40rAbBYwzWFl5Jz02UiTQFXKw',
    type: 'negotiating',
    time: '09:30',
    description: 'Braga em conversas avançadas com o Bayer Leverkusen pela pérola da formação. Valores rondam os 15M€.',
    progress: 65
  },
  {
    id: '5',
    player: 'Jota Silva',
    club: 'Nottingham Forest',
    clubLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFJZicCMIl2rI6b-DIfD7Sx0_MBBsrUYv1PmS2ocgr8kc2ZLNctI9LnD_Qgviov6KpRtOZGmoimpbdmrSPm2Xb0qnQVASqwOAV6OJfhILfik6doeV52bncIeVhFIaPH7GzbqHgPijBBTJIo7j18neqGO6XBOpi3Q5eY6D1uV9mnBS-pY055a6Pd6QxGjb1zaYKBfG-Bk0az-V523amy7GG8-M6Av0OjD5GqMlPlFq9MFv1wXRQlArNdNT-3yrq_zWY17tO6henKA',
    type: 'confirmed',
    time: '08:15',
    description: 'Oficial: O "Grealish de Guimarães" ruma à Premier League. Vitória SC encaixa 7M€ fixos.',
    progress: 100
  },
  {
    id: '6',
    player: 'Cristo González',
    club: 'Al-Sadd',
    clubLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuJl9LmoZ87Ar5605Wg_3RHJA4cR-Vvzu-9MKoKawH1RAWp-VRyuu0OvNpH82RP1xXj0QjvOV3d7zmnZNyAiEeTF-2ARooPI0D13sDrusf0hzv3ApfgzD0GYBLtFZ3TY7WgSvpHuZStxnG6giTSq0w27VCnlydCrsRUhaD4CG2VF1lQRsZjPS5yNkC-b9PDl6NjNlJAtzCzIn51d1SuKCjhw3ukR25Z0moL7DBi8E9jbV4HVV8k40rAbBYwzWFl5Jz02UiTQFXKw',
    type: 'confirmed',
    time: '07:45',
    description: 'Oficial: Arouca perde o seu goleador para o mercado do Qatar por 6M€.',
    progress: 100
  }
];

const HOT_RUMORS: RumorItem[] = [
  {
    id: '1',
    title: 'Pavlidis a caminho da Luz? Negociações em fase final.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPufXhSzbxNr1rI-hf5a1CvOikMZnBugRRrvQJre-SpwN-umGWWTY9NpaTCFpv8ga23IDgrxFrTAJHcvpNV-3e2t4ccKDh_yJFhV479JFGHn_gGp0kfNDtrZKDYjahzugpyaWAnWhkR8z4iwyP_MViO-JlFbtL_0u12j5M2Z6gTDZ_g2iYYm5hGd6dWKhkn7y0WT35iZaBGo3rvKWlTJeaghvFEBRjW840hBU_Jj_gQlVpPuNF7OgnrVlrko7miNy1AIZHZwygkw',
    tag: '90% PROVÁVEL',
    tagType: 'probability',
    source: 'Record',
    position: 'Avançado'
  },
  {
    id: '2',
    title: 'Sérgio Conceição no radar do AC Milan para 24/25.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv5iKIjw_7jzxu9-qygaKqCUCHc0QmLzoCVjXGOatFdlnNfP-78TAt6itUMPmBw0vuDuP53bZyYjt9IjhijHxMPsXOKM_275WISw49RtEX_EXJzB_I9L4CGkLhMOuyZCQuOxJfBp8nXZ77Fowgvzl-3KC3E81IKaVVmHW-QTakNQzChxEZ7YcwWW55FBjjkImdT9CNB7yCew4gB9FKmggmpkOvOyJNYyJKaWMCMv3_fgyhQnW6TYrvG7GmGIlS7E1245ONL6cyQA',
    tag: 'ESPECULAÇÃO',
    tagType: 'speculation',
    source: 'O Jogo',
    position: 'Treinador'
  },
  {
    id: '3',
    title: 'Gustavo Sá na mira do Sporting para o meio-campo.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000',
    tag: 'RUMOR',
    tagType: 'speculation',
    source: 'A Bola',
    position: 'Médio'
  },
  {
    id: '4',
    title: 'Zaydou Youssouf pode deixar Famalicão rumo a França.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000',
    tag: 'INTERESSE',
    tagType: 'speculation',
    source: 'L\'Equipe',
    position: 'Médio'
  }
];

const CLUB_MOVES: Record<string, { logo: string, color: string, moves: ClubMove[] }> = {
  'Benfica': {
    logo: 'SLB',
    color: 'bg-pt-red',
    moves: [
      { id: 'b1', player: 'Álvaro Carreras', details: 'Compra Definitiva • Man Utd', type: 'in' },
      { id: 'b2', player: 'António Silva', details: '85M€ • Real Madrid', type: 'out' }
    ]
  },
  'FC Porto': {
    logo: 'FCP',
    color: 'bg-blue-600',
    moves: [
      { id: 'p1', player: 'Samu Omorodion', details: '15M€ • Atlético Madrid', type: 'in' },
      { id: 'p2', player: 'Francisco Conceição', details: '30M€ • Juventus', type: 'out' }
    ]
  },
  'Sporting': {
    logo: 'SCP',
    color: 'bg-pt-green',
    moves: [
      { id: 's1', player: 'Conrad Harder', details: '19M€ • Nordsjaelland', type: 'in' },
      { id: 's2', player: 'Gonçalo Inácio', details: '60M€ • Liverpool', type: 'out' }
    ]
  },
  'SC Braga': {
    logo: 'SCB',
    color: 'bg-red-800',
    moves: [
      { id: 'br1', player: 'Bright Arrey-Mbi', details: '6M€ • Hannover 96', type: 'in' },
      { id: 'br2', player: 'Al Musrati', details: '12M€ • Besiktas', type: 'out' }
    ]
  },
  'Vitória SC': {
    logo: 'VSC',
    color: 'bg-gray-800',
    moves: [
      { id: 'v1', player: 'Kaio César', details: 'Empréstimo • Coritiba', type: 'in' },
      { id: 'v2', player: 'Jota Silva', details: '7M€ • Nottingham Forest', type: 'out' }
    ]
  },
  'Famalicão': {
    logo: 'FCF',
    color: 'bg-blue-900',
    moves: [
      { id: 'f1', player: 'Gil Dias', details: 'Livre • Estugarda', type: 'in' },
      { id: 'f2', player: 'Jhunder Cádiz', details: '3M€ • León', type: 'out' }
    ]
  },
  'Moreirense': {
    logo: 'MFC',
    color: 'bg-green-700',
    moves: [
      { id: 'm1', player: 'Benny', details: 'Livre • AVS', type: 'in' },
      { id: 'm2', player: 'Gonçalo Franco', details: '2M€ • Swansea', type: 'out' }
    ]
  },
  'Gil Vicente': {
    logo: 'GVF',
    color: 'bg-red-600',
    moves: [
      { id: 'g1', player: 'Jorge Aguirre', details: 'Livre • Osasuna B', type: 'in' },
      { id: 'g2', player: 'Gabriel Pereira', details: '5M€ • Copenhaga', type: 'out' }
    ]
  },
  'Rio Ave': {
    logo: 'RAV',
    color: 'bg-green-900',
    moves: [
      { id: 'r1', player: 'Tiago Morais', details: 'Empréstimo • Lille', type: 'in' },
      { id: 'r2', player: 'Costinha', details: '2.5M€ • Olympiacos', type: 'out' }
    ]
  },
  'Arouca': {
    logo: 'FCA',
    color: 'bg-yellow-500',
    moves: [
      { id: 'a1', player: 'Nico Mantl', details: 'Livre • RB Salzburg', type: 'in' },
      { id: 'a2', player: 'Cristo González', details: '6M€ • Al-Sadd', type: 'out' }
    ]
  },
  'Boavista': {
    logo: 'BFC',
    color: 'bg-black',
    moves: [
      { id: 'bo1', player: 'Bruninho', details: 'Empréstimo • Atlético MG', type: 'in' },
      { id: 'bo2', player: 'Chidozie', details: '500k€ • Cincinnati', type: 'out' }
    ]
  },
  'Estoril': {
    logo: 'GDEP',
    color: 'bg-yellow-400',
    moves: [
      { id: 'e1', player: 'Kévin Boma', details: '250k€ • Rodez', type: 'in' },
      { id: 'e2', player: 'Rafik Guitane', details: 'Empréstimo • Braga', type: 'out' }
    ]
  },
  'Santa Clara': {
    logo: 'CDSC',
    color: 'bg-red-700',
    moves: [
      { id: 'sc1', player: 'Matheus Pereira', details: 'Livre • Vizela', type: 'in' },
      { id: 'sc2', player: 'Paulo Henrique', details: 'Fim de Contrato', type: 'out' }
    ]
  },
  'Nacional': {
    logo: 'CDN',
    color: 'bg-black',
    moves: [
      { id: 'n1', player: 'Tiago Reis', details: 'Livre • Alverca', type: 'in' },
      { id: 'n2', player: 'Danilovic', details: 'Venda • Rússia', type: 'out' }
    ]
  },
  'Farense': {
    logo: 'SCF',
    color: 'bg-black',
    moves: [
      { id: 'fa1', player: 'Alex Bermejo', details: 'Livre • Burgos', type: 'in' },
      { id: 'fa2', player: 'Mattheus Oliveira', details: 'Fim de Contrato', type: 'out' }
    ]
  }
};

const TOP_TRANSFERS: TopTransfer[] = [
  { id: '1', player: 'Gonçalo Inácio', destination: 'Liverpool', value: '60.00M€' },
  { id: '2', player: 'João Neves', destination: 'PSG', value: '70.00M€' },
  { id: '3', player: 'Viktor Gyökeres', destination: 'Arsenal', value: '100.00M€' },
  { id: '4', player: 'António Silva', destination: 'Real Madrid', value: '85.00M€' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'home' | 'login' | 'standings'>('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (view === 'login') {
    return <Login onBack={() => setView('home')} />;
  }

  if (view === 'standings') {
    return <Standings onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen">
      {/* Breaking News Ticker */}
      <div className="bg-pt-red text-white py-2 px-6 overflow-hidden relative z-[110]">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
          {[
            "ÚLTIMA HORA: João Neves regressa ao Benfica por empréstimo do PSG",
            "MERCADO: Diogo Costa na mira do Real Madrid para a próxima época",
            "CONFIRMADO: Quenda renova com o Sporting até 2030 com cláusula de 100M€",
            "RUMOR: Sérgio Conceição apontado ao banco do AC Milan",
            "OFICIAL: Liga Portugal anuncia novo formato para a Taça da Liga 2027"
          ].map((news, i) => (
            <React.Fragment key={i}>
              <span className="text-[10px] font-black uppercase tracking-widest">{news}</span>
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "ÚLTIMA HORA: João Neves regressa ao Benfica por empréstimo do PSG",
            "MERCADO: Diogo Costa na mira do Real Madrid para a próxima época",
            "CONFIRMADO: Quenda renova com o Sporting até 2030 com cláusula de 100M€",
            "RUMOR: Sérgio Conceição apontado ao banco do AC Milan",
            "OFICIAL: Liga Portugal anuncia novo formato para a Taça da Liga 2027"
          ].map((news, i) => (
            <React.Fragment key={i + 10}>
              <span className="text-[10px] font-black uppercase tracking-widest">{news}</span>
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-pt-dark-900/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'} ${scrolled ? 'mt-0' : 'mt-8'}`}>
        <nav className="px-6 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-pt-red to-pt-dark-900 rounded-lg flex items-center justify-center font-black text-white shadow-lg shadow-pt-red/20">PT</div>
            <span className="font-heading text-xl uppercase tracking-tighter leading-none">Transferências<span className="text-pt-red">.</span>pt</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Rumores', id: 'rumores', action: 'scroll' },
              { label: 'Confirmados', id: 'direto', action: 'scroll' },
              { label: 'Classificação', id: 'standings', action: 'view' },
              { label: 'Análises', id: 'analise', action: 'scroll' }
            ].map((item) => (
              <button 
                key={item.label} 
                onClick={() => {
                  if (item.action === 'view') {
                    setView('standings');
                  } else {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setView('login')}
              className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
            >
              <User className="w-4 h-4" />
              Entrar
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-pt-dark-900 pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {[
                { label: 'Rumores', id: 'rumores', action: 'scroll' },
                { label: 'Confirmados', id: 'direto', action: 'scroll' },
                { label: 'Classificação', id: 'standings', action: 'view' },
                { label: 'Análises', id: 'analise', action: 'scroll' }
              ].map((item) => (
                <button 
                  key={item.label} 
                  onClick={() => {
                    if (item.action === 'view') {
                      setView('standings');
                    } else {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMenuOpen(false);
                  }}
                  className="text-3xl font-heading uppercase tracking-tighter text-left hover:text-pt-red transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYWTPWrvWHaRY9bbc5E1kNiyY3XJyfXm7XzMyoS1ir0pCTEGaLvG_ym0WlcU35ievISLoL3QgnGeCJiBonENhfX3sBwOmWc2gJnLkRCX5uwnv9kIANrSq7hbxUFr9bLi-Jb1yinKxoVCaXXFfNWahk2Ihsmx9eY90DKYkxawTkJ2W0Oe9o6GxDJj3iHKyBzKPg4RfbRpDRVsfXRycGxOpEt7bdy65Df8yS8frmKauB6CIxP3hDjgh7DSefiSI245GNf0J80D5DkA" 
              alt="Stadium" 
              className="w-full h-full object-cover scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pt-dark-900 via-pt-dark-900/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-pt-dark-900 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-pt-red/20 border border-pt-red/30 text-pt-red text-[10px] font-black px-3 py-1.5 uppercase tracking-[0.2em] mb-6 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-pt-red rounded-full animate-pulse"></span>
                Mercado de Verão 24/25
              </div>
              <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-[0.85] uppercase mb-8">
                O MERCADO<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pt-gold via-pt-red to-pt-gold italic">NÃO PARA.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                As últimas do Benfica, Porto e Sporting. Acompanha confirmações e rumores exclusivos em tempo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-black font-black py-5 px-10 rounded-2xl transition-all duration-300 hover:bg-pt-green hover:scale-105 uppercase text-sm tracking-widest flex items-center justify-center gap-2 shadow-2xl shadow-white/5">
                  Ver Transferências
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 uppercase text-sm tracking-widest backdrop-blur-md">
                  Subscrever Alertas
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Live Market Feed */}
        <section id="direto" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-heading text-4xl uppercase tracking-tighter mb-2">Mercado em <span className="text-pt-red">Direto</span></h2>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Atualizado há 2 minutos</p>
            </div>
            <button className="text-pt-red text-xs font-black uppercase tracking-widest hover:text-white transition-colors border-b-2 border-pt-red pb-1">
              Arquivo Completo
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {LIVE_TRANSFERS.map((item, idx) => (
              <motion.article 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-3xl p-6 transition-all hover:bg-white/[0.05] group"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border ${
                    item.type === 'confirmed' ? 'bg-pt-green/10 text-pt-green border-pt-green/20' :
                    item.type === 'negotiating' ? 'bg-pt-gold/10 text-pt-gold border-pt-gold/20' :
                    'bg-pt-red/10 text-pt-red border-pt-red/20'
                  }`}>
                    {item.type === 'confirmed' ? 'Confirmado' : item.type === 'negotiating' ? 'Em Negociações' : 'Rumor'}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{item.time}</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={item.clubLogo} 
                    alt={item.player} 
                    className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-black text-xl leading-none">{item.player}</h3>
                    <p className="text-pt-red text-xs font-bold uppercase mt-1">{item.club}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    className={`h-full ${
                      item.type === 'confirmed' ? 'bg-pt-green' :
                      item.type === 'negotiating' ? 'bg-pt-gold' :
                      'bg-pt-red'
                    }`}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Club Focus */}
        <section className="py-24 bg-pt-dark-800 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-4xl uppercase tracking-tighter mb-12">Foco nos <span className="italic text-pt-gold">Clubes</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(CLUB_MOVES).map(([club, data]) => (
                <div key={club} className="space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-12 h-12 ${data.color} rounded-xl flex items-center justify-center font-bold text-white shadow-lg`}>
                      {data.logo}
                    </div>
                    <h3 className="font-black text-2xl uppercase italic">{club}</h3>
                  </div>
                  <div className="space-y-3">
                    {data.moves.map((move) => (
                      <div key={move.id} className="bg-white/5 p-4 rounded-2xl border-l-2 border-opacity-50 hover:bg-white/10 transition-colors" style={{ borderLeftColor: move.type === 'in' ? '#00ff66' : '#ff1744' }}>
                        <span className={`text-[9px] font-black uppercase block mb-1 tracking-widest ${move.type === 'in' ? 'text-pt-green' : 'text-pt-red'}`}>
                          {move.type === 'in' ? 'Entrada' : 'Saída'}
                        </span>
                        <p className="font-bold text-sm">{move.player}</p>
                        <p className="text-[10px] text-gray-500 font-medium">{move.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Rumors */}
        <section id="rumores" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-heading text-4xl uppercase tracking-tighter">Rumores <span className="text-pt-red">Quentes</span> <Flame className="inline-block text-pt-red" /></h2>
            <div className="flex-grow h-[1px] bg-white/10"></div>
          </div>
          
          <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar -mx-6 px-6">
            {HOT_RUMORS.map((rumor) => (
              <div key={rumor.id} className="min-w-[320px] md:min-w-[400px] bg-pt-dark-800 rounded-[2rem] overflow-hidden border border-white/5 group shadow-2xl">
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={rumor.image} 
                    alt={rumor.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pt-dark-800 to-transparent"></div>
                  <div className={`absolute top-4 left-4 font-black text-[10px] px-3 py-1 rounded-full uppercase italic tracking-widest shadow-xl ${
                    rumor.tagType === 'probability' ? 'bg-pt-green text-black' : 'bg-pt-red text-white'
                  }`}>
                    {rumor.tag}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-heading text-2xl leading-tight mb-6">{rumor.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] px-3 py-1 bg-white/10 rounded-full font-bold uppercase tracking-widest">{rumor.position}</span>
                      <span className="text-[10px] text-gray-500 font-bold italic">via {rumor.source}</span>
                    </div>
                    <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-pt-red transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inside Analysis */}
        <section id="analise" className="py-24 bg-pt-dark-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-pt-red font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Inside Analysis</span>
                <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tighter leading-none mb-8">PORQUE O BENFICA PRECISA DE UM <span className="italic text-white underline decoration-pt-red decoration-8">MATADOR.</span></h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Análise tática às movimentações de mercado de Roger Schmidt. Como a saída de Rafa e a chegada de Pavlidis podem mudar o xadrez das águias para a próxima época.
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYWTPWrvWHaRY9bbc5E1kNiyY3XJyfXm7XzMyoS1ir0pCTEGaLvG_ym0WlcU35ievISLoL3QgnGeCJiBonENhfX3sBwOmWc2gJnLkRCX5uwnv9kIANrSq7hbxUFr9bLi-Jb1yinKxoVCaXXFfNWahk2Ihsmx9eY90DKYkxawTkJ2W0Oe9o6GxDJj3iHKyBzKPg4RfbRpDRVsfXRycGxOpEt7bdy65Df8yS8frmKauB6CIxP3hDjgh7DSefiSI245GNf0J80D5DkA" 
                    alt="Expert" 
                    className="w-12 h-12 rounded-full border-2 border-pt-red"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-black text-sm uppercase tracking-widest">Carlos Rodrigues</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Analista Principal</p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pt-red to-pt-green opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-pt-dark-800 rounded-[2.5rem] overflow-hidden aspect-video border border-white/10 shadow-2xl">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYWTPWrvWHaRY9bbc5E1kNiyY3XJyfXm7XzMyoS1ir0pCTEGaLvG_ym0WlcU35ievISLoL3QgnGeCJiBonENhfX3sBwOmWc2gJnLkRCX5uwnv9kIANrSq7hbxUFr9bLi-Jb1yinKxoVCaXXFfNWahk2Ihsmx9eY90DKYkxawTkJ2W0Oe9o6GxDJj3iHKyBzKPg4RfbRpDRVsfXRycGxOpEt7bdy65Df8yS8frmKauB6CIxP3hDjgh7DSefiSI245GNf0J80D5DkA" 
                    alt="Analysis Video" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Transfers Table */}
        <section id="negocios" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl uppercase tracking-tighter mb-12">Maiores Negócios <span className="text-pt-gold italic">23/24</span></h2>
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden shadow-2xl overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead className="bg-white/5 text-[10px] uppercase font-black text-gray-500 tracking-[0.2em]">
                <tr>
                  <th className="px-8 py-6">Jogador</th>
                  <th className="px-8 py-6 text-right">Destino</th>
                  <th className="px-8 py-6 text-right">Montante</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {TOP_TRANSFERS.map((transfer) => (
                  <tr key={transfer.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-8 py-8 font-black text-lg italic uppercase tracking-tight group-hover:text-pt-red transition-colors">{transfer.player}</td>
                    <td className="px-8 py-8 text-right font-bold text-gray-400">{transfer.destination}</td>
                    <td className="px-8 py-8 text-right font-black text-xl text-pt-gold font-mono tracking-tighter">{transfer.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Newsletter */}
        <section className="my-32 px-6 max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-pt-red via-pt-dark-800 to-pt-dark-900 border border-white/10 p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pt-red/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pt-green/10 blur-[120px] rounded-full -ml-48 -mb-48"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block bg-white text-black font-black text-[10px] px-4 py-2 rounded-full uppercase tracking-[0.3em] mb-8 shadow-xl">Premium Club</span>
              <h3 className="font-heading text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-6">NUNCA PERCAS<br /><span className="text-pt-gold italic">UMA BOMBA.</span></h3>
              <p className="text-gray-400 text-lg mb-12">Recebe notificações exclusivas sobre transferências confirmadas diretamente no teu WhatsApp e Email.</p>
              
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Teu email oficial"
                  className="flex-grow bg-pt-dark-900/50 border-white/10 rounded-2xl py-5 px-8 text-white placeholder-gray-600 focus:ring-pt-red focus:border-pt-red transition-all backdrop-blur-md outline-none"
                />
                <button className="bg-white text-black font-black py-5 px-10 rounded-2xl uppercase tracking-widest text-sm hover:bg-pt-red hover:text-white transition-all shadow-2xl active:scale-95">
                  Aderir Agora
                </button>
              </form>
              <p className="mt-8 text-[10px] text-gray-500 font-bold uppercase tracking-widest">+ 50.000 adeptos já subscreveram</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pt-dark-900 pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center font-black text-xl">PT</div>
              <span className="font-heading text-2xl uppercase tracking-tighter">Transferências<span className="text-pt-red">.</span>pt</span>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {[Twitter, Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <button key={i} className="text-gray-500 hover:text-pt-red transition-colors">
                  <Icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-white/5 py-12">
            {[
              { title: 'Clubes', items: ['Benfica', 'FC Porto', 'Sporting CP', 'SC Braga'] },
              { title: 'Mercado', items: ['Rumores', 'Oficiais', 'Ligas Big 5', 'Mercado Saudita'] },
              { title: 'Mídia', items: ['Podcasts', 'Vídeos', 'Análises', 'Opinião'] },
              { title: 'Legal', items: ['Privacidade', 'Termos', 'Cookies', 'Contactos'] }
            ].map((group) => (
              <div key={group.title} className="space-y-4">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-pt-red">{group.title}</h5>
                <ul className="text-sm text-gray-500 space-y-2">
                  {group.items.map((item) => (
                    <li key={item}><button className="hover:text-white transition-colors">{item}</button></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.3em]">© 2024 TRANSFERÊNCIAS PT. THE GLOBAL FOOTBALL MARKET SOURCE.</p>
            <div className="flex items-center gap-2 text-[9px] text-gray-600 font-bold uppercase tracking-widest">
              <span>Designed for</span>
              <span className="text-white">Champions</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
