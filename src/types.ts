export interface TransferItem {
  id: string;
  player: string;
  club: string;
  clubLogo: string;
  type: 'confirmed' | 'negotiating' | 'rumor';
  time: string;
  description: string;
  progress: number;
}

export interface RumorItem {
  id: string;
  title: string;
  image: string;
  tag: string;
  tagType: 'probability' | 'speculation';
  source: string;
  position: string;
}

export interface ClubMove {
  id: string;
  player: string;
  details: string;
  type: 'in' | 'out';
}

export interface TopTransfer {
  id: string;
  player: string;
  destination: string;
  value: string;
}

export interface TeamStanding {
  rank: number;
  team: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goals: string;
  points: number;
  form: ('W' | 'D' | 'L')[];
}
