import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Worksheet2 - Fav Movies App [Kennedy Moore, S00271816]');
  protected movies=signal(
    [
      "Inception",
      "The Shawshank Redemption",
      "The Dark Knight",
      "Pulp Fiction",
      "Spirited Away",
      "The Godfather"
    ]
  )

  protected favourites=signal<string[]>([])
  protected addToFavourites(movie: string) {
    this.favourites.update(current => [...current, movie]);
  }

  protected deleteFromFavourites(movie: string) {
    this.favourites.update(favourites => 
      favourites.filter(fav => fav !== movie));
  }
}
