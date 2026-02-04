import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { MovieService } from './movie-service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Worksheet3 - Movie Details App [Kennedy Moore, S00271816]');
  
  protected movieService = inject(MovieService);
}
