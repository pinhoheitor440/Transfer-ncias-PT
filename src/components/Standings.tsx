import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Trophy, Calendar, Info } from 'lucide-react';
import { TeamStanding } from '../types';

interface RecentResult {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: string;
  status: 'FT' | 'LIVE' | 'POSTP';
}

const STANDINGS: TeamStanding[] = [
  { rank: 1, team: 'Sporting CP', played: 25, wins: 21, draws: 2, losses: 2, goals: '72:20', points: 65, form: ['W', 'W', 'W', 'W', 'W'] },
  { rank: 2, team: 'SL Benfica', played: 25, wins: 19, draws: 4, losses: 2, goals: '59:17', points: 61, form: ['W', 'W', 'D', 'W', 'W'] },
  { rank: 3, team: 'FC Porto', played: 25, wins: 17, draws: 4, losses: 4, goals: '49:19', points: 55, form: ['W', 'L', 'W', 'W', 'W'] },
  { rank: 4, team: 'SC Braga', played: 25, wins: 16, draws: 4, losses: 5, goals: '55:35', points: 52, form: ['W', 'W', 'W', 'L', 'W'] },
  { rank: 5, team: 'Vitória SC', played: 25, wins: 14, draws: 5, losses: 6, goals: '40:27', points: 47, form: ['L', 'W', 'D', 'W', 'W'] },
  { rank: 6, team: 'Moreirense', played: 25, wins: 12, draws: 6, losses: 7, goals: '30:28', points: 42, form: ['W', 'L', 'W', 'L', 'D'] },
  { rank: 7, team: 'Famalicão', played: 25, wins: 10, draws: 8, losses: 7, goals: '31:28', points: 38, form: ['D', 'L', 'W', 'D', 'W'] },
  { rank: 8, team: 'Arouca', played: 25, wins: 11, draws: 4, losses: 10, goals: '45:37', points: 37, form: ['W', 'W', 'L', 'W', 'L'] },
  { rank: 9, team: 'Casa Pia', played: 25, wins: 9, draws: 6, losses: 10, goals: '28:32', points: 33, form: ['W', 'D', 'L', 'W', 'D'] },
  { rank: 10, team: 'Gil Vicente', played: 25, wins: 8, draws: 7, losses: 10, goals: '37:40', points: 31, form: ['D', 'D', 'D', 'L', 'W'] },
  { rank: 11, team: 'Santa Clara', played: 25, wins: 8, draws: 6, losses: 11, goals: '25:35', points: 30, form: ['L', 'L', 'W', 'L', 'W'] },
  { rank: 12, team: 'Rio Ave', played: 25, wins: 6, draws: 11, losses: 8, goals: '29:34', points: 29, form: ['D', 'D', 'D', 'W', 'L'] },
  { rank: 13, team: 'Nacional', played: 25, wins: 7, draws: 5, losses: 13, goals: '28:42', points: 26, form: ['L', 'W', 'L', 'L', 'D'] },
  { rank: 14, team: 'AVS', played: 25, wins: 6, draws: 7, losses: 12, goals: '24:39', points: 25, form: ['D', 'L', 'W', 'L', 'L'] },
  { rank: 15, team: 'Estoril', played: 25, wins: 6, draws: 5, losses: 14, goals: '42:48', points: 23, form: ['L', 'D', 'L', 'L', 'W'] },
  { rank: 16, team: 'Boavista', played: 25, wins: 5, draws: 7, losses: 13, goals: '29:48', points: 22, form: ['L', 'L', 'D', 'W', 'L'] },
  { rank: 17, team: 'Estrela Amadora', played: 25, wins: 5, draws: 6, losses: 14, goals: '23:42', points: 21, form: ['L', 'D', 'L', 'W', 'L'] },
  { rank: 18, team: 'Farense', played: 25, wins: 5, draws: 5, losses: 15, goals: '30:45', points: 20, form: ['L', 'L', 'D', 'L', 'L'] },
];

const RECENT_RESULTS: RecentResult[] = [
  { id: '1', homeTeam: 'Sporting CP', awayTeam: 'FC Porto', homeScore: 2, awayScore: 1, date: '09 Mar', status: 'FT' },
  { id: '2', homeTeam: 'SL Benfica', awayTeam: 'Vitória SC', homeScore: 3, awayScore: 0, date: '08 Mar', status: 'FT' },
  { id: '3', homeTeam: 'SC Braga', awayTeam: 'Rio Ave', homeScore: 2, awayScore: 0, date: '08 Mar', status: 'FT' },
  { id: '4', homeTeam: 'Moreirense', awayTeam: 'Gil Vicente', homeScore: 1, awayScore: 1, date: '07 Mar', status: 'FT' },
  { id: '5', homeTeam: 'Famalicão', awayTeam: 'Boavista', homeScore: 2, awayScore: 0, date: '07 Mar', status: 'FT' },
  { id: '6', homeTeam: 'Casa Pia', awayTeam: 'Arouca', homeScore: 1, awayScore: 0, date: '06 Mar', status: 'FT' },
];

interface StandingsProps {
  onBack: () => void;
}

export default function Standings({ onBack }: StandingsProps) {
  return (
    <div className="min-h-screen bg-pt-dark-900 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </button>
          <div className="text-right">
            <h1 className="font-heading text-4xl uppercase tracking-tighter">Tabela <span className="text-pt-red italic">Classificativa</span></h1>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Liga Portugal Betclic 25/26</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Table Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-morphism rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/5">
                      <th className="py-5 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">#</th>
                      <th className="py-5 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Equipa</th>
                      <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">J</th>
                      <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">V</th>
                      <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">E</th>
                      <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">D</th>
                      <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Golos</th>
                      <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Pts</th>
                      <th className="py-5 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Forma</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {STANDINGS.map((team) => (
                      <motion.tr 
                        key={team.team}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="py-4 px-6">
                          <span className={`text-xs font-black ${team.rank <= 3 ? 'text-pt-gold' : team.rank >= 16 ? 'text-pt-red' : 'text-gray-500'}`}>
                            {team.rank}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-pt-dark-800 flex items-center justify-center text-[10px] font-black border border-white/5 group-hover:border-pt-red/30 transition-colors">
                              {team.team.substring(0, 3).toUpperCase()}
                            </div>
                            <span className="text-sm font-bold tracking-tight">{team.team}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center text-xs font-medium text-gray-400">{team.played}</td>
                        <td className="py-4 px-4 text-center text-xs font-medium text-gray-400">{team.wins}</td>
                        <td className="py-4 px-4 text-center text-xs font-medium text-gray-400">{team.draws}</td>
                        <td className="py-4 px-4 text-center text-xs font-medium text-gray-400">{team.losses}</td>
                        <td className="py-4 px-4 text-center text-xs font-mono text-gray-500">{team.goals}</td>
                        <td className="py-4 px-4 text-center font-black text-white">{team.points}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-center gap-1">
                            {team.form.map((res, i) => (
                              <div 
                                key={i}
                                className={`w-5 h-5 rounded-md flex items-center justify-center text-[8px] font-black text-white ${
                                  res === 'W' ? 'bg-pt-green/20 text-pt-green' : 
                                  res === 'D' ? 'bg-gray-500/20 text-gray-400' : 
                                  'bg-pt-red/20 text-pt-red'
                                }`}
                              >
                                {res}
                              </div>
                            ))}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 px-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pt-gold"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Champions League</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pt-red"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Despromoção</span>
              </div>
            </div>
          </div>

          {/* Results Sidebar */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-pt-red" />
              <h2 className="font-heading text-2xl uppercase tracking-tighter">Resultados <span className="text-pt-red italic">Recentes</span></h2>
            </div>

            <div className="space-y-4">
              {RECENT_RESULTS.map((result) => (
                <motion.div 
                  key={result.id}
                  whileHover={{ x: 5 }}
                  className="glass-morphism rounded-3xl p-6 border border-white/5 hover:border-pt-red/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{result.date}</span>
                    <span className="bg-pt-red/10 text-pt-red text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest">{result.status}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-pt-dark-800 flex items-center justify-center text-[8px] font-black border border-white/5">
                          {result.homeTeam.substring(0, 3).toUpperCase()}
                        </div>
                        <span className="text-sm font-bold">{result.homeTeam}</span>
                      </div>
                      <span className={`text-lg font-black ${result.homeScore > result.awayScore ? 'text-white' : 'text-gray-600'}`}>
                        {result.homeScore}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-pt-dark-800 flex items-center justify-center text-[8px] font-black border border-white/5">
                          {result.awayTeam.substring(0, 3).toUpperCase()}
                        </div>
                        <span className="text-sm font-bold">{result.awayTeam}</span>
                      </div>
                      <span className={`text-lg font-black ${result.awayScore > result.homeScore ? 'text-white' : 'text-gray-600'}`}>
                        {result.awayScore}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all border border-white/5">
              Ver Todos os Resultados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
