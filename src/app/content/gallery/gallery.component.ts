
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: any[] = [
    'https://images.wallpaperscraft.ru/image/krysha_lestnitsa_zdanie_148069_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/pirs_siluety_temnyj_148071_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/balkon_okno_teleskop_148073_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/nochnoj_gorod_zdaniia_arhitektura_148065_1280x720.jpg',
    'https://images.wallpaperscraft.ru/image/kosmicheskij_vzryv_linii_formy_137586_2560x1080.jpg',
  ];
  i: number = 0;
  constructor(private _http: HttpClient) { }
  currentImg: string;

  // cards = [
  //   {title: 'hi title 1', text: 'some1 text one'},
  //   {title: 'hi title 2', text: 'some2 text two'},
  //   {title: 'hi title 3', text: 'some3 text three'},
  //   {title: 'hi title 4', text: 'some4 text four'}
  // ];
  cards;
  ngOnInit() {
    this.currentImg = this.gallery[0];
    this._http.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .subscribe(resolve => {
        this.cards = resolve;
        console.log(resolve);
      });
  }

  next(){
    this.i++;
    if (this.i >= this.gallery.length) {
      this.i = 0;
    }
    this.currentImg = this.gallery[this.i];
    console.log('next method ' + this.i);
  }
  prev() {
    this.i--;
    if (this.i < 0) {
      this.i = this.gallery.length - 1;
    }
    this.currentImg = this.gallery[this.i];
    console.log('prev method ' + this.i);
  }


}
