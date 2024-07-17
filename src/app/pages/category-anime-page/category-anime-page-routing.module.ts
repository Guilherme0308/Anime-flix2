import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAnimePage } from './category-anime-page.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryAnimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryAnimePageRoutingModule {}
