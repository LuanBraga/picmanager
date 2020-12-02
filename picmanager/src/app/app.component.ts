import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'http://www.ghibli.jp/gallery/howl012.jpg',
      description: 'fogo'
    },
    {
      url: 'http://www.ghibli.jp/gallery/howl016.jpg',
      description: 'cozinhando com fogo'
    },
    {
      url: 'http://www.ghibli.jp/gallery/howl041.jpg',
      description: 'a single fires with one girl'
    }
  ];
}
