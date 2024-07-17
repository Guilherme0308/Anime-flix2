// src/app/models/anime.ts

export interface Anime {
    id: number;
    name: string;
    image: string;
    category: string[];
    seasons: Season[];
  }
  
  export interface Season {
    id: number;
    name: string;
    episodes: Episode[];
  }
  
  export interface Episode {
    id: number;
    title: string;
    videoUrl: string;
  }
  