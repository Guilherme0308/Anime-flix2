import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Anime } from '../models/anime'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private animes: Anime[] = [
    {
      id: 1,
      name: 'Attack on Titan',
      image: 'assets/attack_titan.jpg',
      category: ['Ação'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        },
        {
          id: 2,
          name: 'Temporada 2',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'My Hero Academia',
      image: 'assets/my_hero_academia.jpg',
      category: ['Super-herói', 'Ação'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Death Note',
      image: 'assets/death_note.jpg',
      category: ['Suspense', 'Terror'],
      seasons: []
    },
    {
      id: 4,
      name: 'Dr Stone',
      image: 'assets/Dr_stone.jpg',
      category: ['Ficção Científica', 'Ação'],
      seasons: []
    },
    {
      id: 5,
      name: 'Ultraman',
      image: 'assets/ultraman.jpg',
      category: ['Ficção Científica', 'Ação'],
      seasons: []
    },
    {
      id: 6,
      name: 'Naruto',
      image: 'assets/Naruto.jpg',
      category: ['Ação', 'Aventura'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 7,
      name: 'One Piece',
      image: 'assets/One_piece.jpg',
      category: ['Ação', 'Aventura'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 8,
      name: 'Sword Art Online',
      image: 'assets/Sao.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 9,
      name: 'Demon Slayer',
      image: 'assets/Demon_Slayer.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 10,
      name: 'Fullmetal Alchemist: Brotherhood',
      image: 'assets/fullmetal_alchemist.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 11,
      name: 'Tokyo Ghoul',
      image: 'assets/tokyo_ghoul.jpg',
      category: ['Horror', 'Supernatural'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 12,
      name: 'Bleach',
      image: 'assets/bleach.jpg',
      category: ['Ação', 'Supernatural'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 13,
      name: 'Hunter x Hunter',
      image: 'assets/hunter_x_hunter.jpg',
      category: ['Ação', 'Adventure'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 14,
      name: 'Fairy Tail',
      image: 'assets/fairy_tail.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 15,
      name: 'Black Clover',
      image: 'assets/black_clover.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 16,
      name: 'JoJo\'s Bizarre Adventure',
      image: 'assets/jojo_bizarre.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 17,
      name: 'Steins;Gate',
      image: 'assets/steins_gate.jpg',
      category: ['Ficção Científica', 'Thriller'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 18,
      name: 'Code Geass',
      image: 'assets/code_geass.jpg',
      category: ['Ação', 'Mecha'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 19,
      name: 'One Punch Man',
      image: 'assets/one_punch_man.jpg',
      category: ['Ação', 'Comédia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 20,
      name: 'The Rising of the Shield Hero',
      image: 'assets/shield_hero.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    }
  ]; constructor() {}

  getAnimes(): Observable<Anime[]> {
    return of(this.animes);
  }

  getAnimesByCategory(category: string): Observable<Anime[]> {
    const filteredAnimes = this.animes.filter(anime => anime.category.includes(category));
    return of(filteredAnimes);
  }

  getAllCategories(): Observable<string[]> {
    const allCategories: string[] = [];

    this.animes.forEach(anime => {
      anime.category.forEach(category => {
        if (!allCategories.includes(category)) {
          allCategories.push(category);
        }
      });
    });

    return of(allCategories);
  }
}