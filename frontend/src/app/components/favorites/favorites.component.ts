import { Component } from '@angular/core';
import { FavoriteService } from '../../shared/favorite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  favorites: any[] = [];

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    this.favoriteService.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }

  removeFavorite(carId: number): void {
    this.favoriteService.removeFavorite(carId).subscribe(() => {
      this.getFavorites();
    });
  }
}
