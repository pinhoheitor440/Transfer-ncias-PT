import { supabase } from '../lib/supabase';
import { TransferItem, RumorItem, TeamStanding } from '../types';

export const dbService = {
  async getTransfers() {
    const { data, error } = await supabase
      .from('transfers')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getRumors() {
    const { data, error } = await supabase
      .from('rumors')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getStandings() {
    const { data, error } = await supabase
      .from('standings')
      .select('*')
      .order('rank', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  async subscribeToTransfers(callback: (payload: any) => void) {
    return supabase
      .channel('public:transfers')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'transfers' }, callback)
      .subscribe();
  }
};
