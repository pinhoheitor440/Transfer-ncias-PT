import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

interface LoginProps {
  onBack: () => void;
}

export default function Login({ onBack }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="min-h-screen bg-pt-dark-900 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pt-red/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pt-green/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all mb-8"
          >
            Voltar ao Início
          </button>
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pt-red to-pt-dark-900 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-2xl shadow-pt-red/20">PT</div>
          </div>
          
          <h1 className="font-heading text-4xl uppercase tracking-tighter mb-2">Bem-vindo de <span className="text-pt-red italic">Volta</span></h1>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Acede à tua conta Premium Club</p>
        </div>

        <div className="glass-morphism rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-pt-red transition-colors" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                  className="w-full bg-pt-dark-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder-gray-700 focus:ring-2 focus:ring-pt-red focus:border-pt-red transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Palavra-passe</label>
                <button type="button" className="text-[10px] font-black uppercase tracking-widest text-pt-red hover:text-white transition-colors">Esqueceste-te?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-pt-red transition-colors" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-pt-dark-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder-gray-700 focus:ring-2 focus:ring-pt-red focus:border-pt-red transition-all outline-none"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black font-black py-5 rounded-2xl uppercase tracking-widest text-sm hover:bg-pt-red hover:text-white transition-all shadow-2xl flex items-center justify-center gap-2 group"
            >
              Entrar na Conta
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
              <span className="bg-pt-dark-800 px-4 text-gray-600">Ou continuar com</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 py-4 rounded-2xl transition-all">
              <Chrome className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 py-4 rounded-2xl transition-all">
              <Github className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-xs text-gray-500 font-medium">
          Não tens conta? <button className="text-pt-red font-black uppercase tracking-widest hover:text-white transition-colors">Regista-te aqui</button>
        </p>
      </motion.div>
    </div>
  );
}
