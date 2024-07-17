import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../models/anime';

@Component({
  selector: 'app-category-anime-page',
  templateUrl: './category-anime-page.page.html',
  styleUrls: ['./category-anime-page.page.scss'],
})
export class CategoryAnimePage implements OnInit {
  category: string | undefined;
  animes: Anime[] = [];

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      if (this.category) {
        this.loadAnimesByCategory(this.category);
      } else {
        console.error('Category parameter is undefined.');
        // Handle the case where category is undefined, e.g., redirect or display an error.
      }
    });
  }

  loadAnimesByCategory(category: string) {
    this.animeService.getAnimesByCategory(category).subscribe(
      (animes: Anime[]) => {
        this.animes = animes;
      },
      (error) => {
        console.error('Error loading animes:', error);
      }
    );
  }
}
