import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimeService } from '../../services/anime.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: string[] = [];

  constructor(
    private navCtrl: NavController,
    private animeService: AnimeService
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.animeService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  goToCategory(category: string) {
    this.navCtrl.navigateForward(`/category-anime-page/${category}`);
  }
}
