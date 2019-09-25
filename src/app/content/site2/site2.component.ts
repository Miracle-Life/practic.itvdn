import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site2',
  templateUrl: './site2.component.html',
  styleUrls: ['./site2.component.css']
})
export class Site2Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  next() {
    // tslint:disable-next-line:max-line-length
   document.querySelector('.slider').insertBefore(
     document.querySelector('.slider img:last-child'),
     document.querySelector('.slider img:first-child')
   );
  }
  prev() {
    document.querySelector('.slider').appendChild(document.querySelector('.slider img:first-child'));
  }
}

