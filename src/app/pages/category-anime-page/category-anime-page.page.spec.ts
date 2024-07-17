import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryAnimePagePage } from './category-anime-page.page';

describe('CategoryAnimePagePage', () => {
  let component: CategoryAnimePagePage;
  let fixture: ComponentFixture<CategoryAnimePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAnimePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
