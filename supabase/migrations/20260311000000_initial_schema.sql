CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Transfers table
CREATE TABLE IF NOT EXISTS transfers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  player TEXT NOT NULL,
  club TEXT NOT NULL,
  club_logo TEXT,
  type TEXT CHECK (type IN ('confirmed', 'negotiating', 'rumor')),
  time TEXT,
  description TEXT,
  progress INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Rumors table
CREATE TABLE IF NOT EXISTS rumors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  image TEXT,
  tag TEXT,
  tag_type TEXT,
  source TEXT,
  position TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Standings table
CREATE TABLE IF NOT EXISTS standings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  rank INTEGER NOT NULL,
  team TEXT NOT NULL,
  played INTEGER DEFAULT 0,
  wins INTEGER DEFAULT 0,
  draws INTEGER DEFAULT 0,
  losses INTEGER DEFAULT 0,
  goals TEXT,
  points INTEGER DEFAULT 0,
  form TEXT[],
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Club Moves table
CREATE TABLE IF NOT EXISTS club_moves (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  club_name TEXT NOT NULL,
  player TEXT NOT NULL,
  details TEXT,
  move_type TEXT CHECK (move_type IN ('in', 'out')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
